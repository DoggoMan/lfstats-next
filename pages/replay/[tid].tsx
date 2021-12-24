import { useEffect, useMemo, useState, forwardRef, useCallback } from "react";
import Head from "next/head";
import FlipMove from "react-flip-move";
import {
  Accordion,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  RepeatClockIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { millisToMinutesAndSeconds } from "../../lib/helper";
import { getReplayData, ReplayData } from "../../lib/replay";
import { useTimer } from "../../lib/stopwatch";
import { PlayerProps, PlayerState } from "../../components/PlayerState";
import { GameAction, GameEntity, GameEntityState } from "../../lib/game";
import ReplayActions from "../../components/ReplayActions";

type ExtendedGameEntityState = GameEntityState & {
  playerId: number;
};

type Player = Omit<GameEntity, "game_entity_states">;

const FlippablePlayerState = forwardRef(function FlippablePlayerState(
  props: PlayerProps,
  ref
) {
  return (
    <div ref={ref as any}>
      <PlayerState {...props} />
    </div>
  );
});

interface Props {
  replay: ReplayData;
}

// TODO: investigate very poor accordion performance (open/close) while timer is running
export default function ReplayView({ replay }: Props) {
  const missionStart = new Date(replay?.mission_start);
  const missionLength = Math.ceil(replay?.mission_length / 1000);

  const {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime,
    timeScale,
    updateTimeScale,
  } = useTimer(missionLength);

  const [extraStates, setExtraStates] = useState<ExtendedGameEntityState[]>([]);
  const [visibleActions, setVisibleActions] = useState<GameAction[]>([]);
  const [loading, setLoading] = useState(false);
  const [wasRunning, setWasRunning] = useState(false);

  const loadMoreStates = useCallback(async () => {
    const initialRunningState = isRunning;
    setIsRunning(false);
    if (replay.mission_length <= elapsedTime * 1000) {
      console.log(`Aborted more states request as mission is finished!`);
      return;
    }
    setLoading(true);

    // Maybe set some loading useState to true for the duration of this call? at least we can indicate it to user then
    const sec = Math.floor(elapsedTime);
    console.log(
      `Requesting more states at time ${millisToMinutesAndSeconds(sec * 1000)}`
    );
    const more = await getReplayData(replay.tdf_id, sec);

    setExtraStates((prev) => {
      const newStates = more.game_teams.reduce(
        (acc: ExtendedGameEntityState[], team) => {
          const teamEntityStates = team.game_entities.reduce(
            (acc: ExtendedGameEntityState[], player) => {
              const playerEntityStates =
                player.game_entity_states?.map((state) => ({
                  ...state,
                  playerId: player.ipl_id,
                })) ?? [];
              return [...acc, ...playerEntityStates];
            },
            []
          );

          return [...acc, ...teamEntityStates];
        },
        []
      );

      console.log(`Received additional ${newStates.length} states`);
      return [...prev, ...newStates];
    });

    setLoading(false);
    setIsRunning(initialRunningState);
  }, [isRunning, elapsedTime, replay, setIsRunning]);

  const allStates: ExtendedGameEntityState[] = useMemo(() => {
    const initialStates = replay.game_teams.reduce(
      (acc: ExtendedGameEntityState[], team) => {
        const teamEntityStates = team.game_entities.reduce(
          (acc: ExtendedGameEntityState[], player) => {
            const playerEntityStates =
              player.game_entity_states?.map((state) => ({
                ...state,
                playerId: player.ipl_id,
              })) ?? [];
            return [...acc, ...playerEntityStates];
          },
          []
        );

        return [...acc, ...teamEntityStates];
      },
      []
    );

    return (
      [...initialStates, ...extraStates]
        .sort((a, b) => a.state_time - b.state_time)
        // Deduplicate
        .filter((item, i, all) => i === all.findIndex((e) => e.id === item.id))
    );
  }, [replay, extraStates]);

  const allPlayers = useMemo(() => {
    return replay.game_teams.reduce((acc: Player[], team) => {
      const teamPlayers = team.game_entities
        .filter((entity) => entity.player)
        .map((entity) => ({
          ...entity,
          game_entity_states: null,
        }));
      return [...acc, ...teamPlayers];
    }, []);
  }, [replay]);

  const activeStates = useMemo(() => {
    const states: (ExtendedGameEntityState | null)[] = allPlayers.map(
      (player) => {
        const data = allStates
          .filter((state) => state.state_time <= elapsedTime * 1000)
          .filter((state) => state.playerId === player.ipl_id)
          .pop();

        if (data) {
          return { ...data, playerId: player.ipl_id };
        }
        // This is actually quite annoying. It may be worth implementing a dummy initial player state generator
        // just to avoid returning null here sometimes
        return null;
      }
    );
    return states;
  }, [elapsedTime, allPlayers, allStates]);

  const latestState = useMemo(
    (): number => allStates[allStates.length - 1]?.state_time ?? 0,
    [allStates]
  );

  const latestActiveState = useMemo((): number => {
    let latest = 0;
    activeStates.forEach((state) => {
      if (state?.state_time > latest) {
        latest = state?.state_time;
      }
    });
    return latest;
  }, [activeStates]);

  const teamScores = useMemo(() => {
    const scores = replay.game_teams.map((team) => ({
      team: team.team_desc,
      score: team.game_entities.reduce(
        (total, entity) =>
          total +
          (activeStates.find((state) => state?.playerId === entity.ipl_id)
            ?.score || 0),
        0
      ),
    }));
    return scores;
  }, [activeStates, replay]);

  // automatically fetch additional game_entity_states when the time is updated
  // Also, automatically pause the clock when we run out of additional entity_states to show
  useEffect(() => {
    // States between now and 5 seconds in the future
    const upcomingStates = allStates.filter(
      (s) =>
        s.state_time >= elapsedTime * 1000 &&
        s.state_time < (elapsedTime + 5 * timeScale) * 1000
    );

    const noUpcomingStates = upcomingStates.length === 0;

    if (
      !loading &&
      latestState &&
      elapsedTime &&
      // latestState < elapsedTime * 1000
      noUpcomingStates
    ) {
      loadMoreStates();
      // window.alert('Loading additional entity states')
    }

    setVisibleActions(
      replay.game_actions.filter(
        (action) => action.action_time <= elapsedTime * 1000
      )
    );
  }, [
    allStates,
    loading,
    latestState,
    elapsedTime,
    timeScale,
    replay.game_actions,
    setIsRunning,
    loadMoreStates,
  ]);

  return (
    <div>
      <Head>
        <title>LFStats - Game {replay.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box justifyContent="center" paddingTop="70" px={4}>
        <Box maxW="2xl" key={"game header"} p={2} my={4} mx="auto">
          <Flex>
            <Heading>
              Replay at {missionStart.getHours()}:{missionStart.getMinutes()}
            </Heading>
            {/* REVIEW: We can't even link to lfstats.com because the replay.id is not the lfstats game id :( */}
            {/* <Link href={`https://lfstats.com/games/view/${replay.id}`}></Link> */}
          </Flex>
        </Box>
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="base"
          key={"states loaded"}
          p={2}
          my={4}
          borderColor={`green.400`}
          mx="auto"
        >
          <Flex>
            <Text alignSelf={"center"}>
              {allStates.length} Entity States Loaded
            </Text>
            <Spacer />
            <Text alignSelf={"center"}>[{timeScale}x]</Text>
            <IconButton
              aria-label={"Settings"}
              icon={<SettingsIcon />}
              colorScheme="blue"
              size={"sm"}
              onClick={updateTimeScale}
            />
          </Flex>
        </Box>
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="base"
          key={"time"}
          p={2}
          my={4}
          borderColor={`green.400`}
          mx="auto"
        >
          <Flex gridGap={1}>
            <Text alignSelf="center">
              Current Time: {millisToMinutesAndSeconds(elapsedTime * 1000)}
            </Text>

            {/* <Text alignSelf="center">
              Last State: {millisToMinutesAndSeconds(latestActiveState)}
            </Text> */}
            <Spacer />
            <IconButton
              aria-label={"Restart"}
              icon={<RepeatClockIcon />}
              colorScheme="blue"
              onClick={() => {
                setIsRunning(false);
                setElapsedTime(0);
              }}
            />
            <IconButton
              aria-label={"Rewind"}
              icon={<ArrowLeftIcon boxSize={3} />}
              colorScheme="blue"
              variant={"outline"}
              disabled={loading}
              onClick={() => setElapsedTime(Math.max(0, elapsedTime - 30))}
            />
            {loading ? (
              <Button colorScheme="blue" variant={"outline"} disabled={true}>
                Loading
              </Button>
            ) : isRunning ? (
              <Button
                colorScheme="blue"
                variant={"outline"}
                onClick={() => setIsRunning(false)}
              >
                Pause
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                variant={"solid"}
                onClick={() => setIsRunning(true)}
              >
                {elapsedTime === 0 ? "Start" : "Play"}
              </Button>
            )}
            <IconButton
              aria-label={"Fast Forward"}
              icon={<ArrowRightIcon boxSize={3} />}
              colorScheme="blue"
              variant={"outline"}
              disabled={loading}
              onClick={() =>
                setElapsedTime(Math.min(15 * 60, elapsedTime + 30))
              }
            />
          </Flex>
          <Flex margin={2} marginBottom={0}>
            <Slider
              aria-label={"slider-game-time"}
              defaultValue={0}
              value={Math.floor(elapsedTime / 5) * 5 ?? 0}
              min={0}
              max={missionLength}
              step={5}
              onChangeEnd={(val) => {
                // console.log(`changeEnd: ${val}`);
                // Messy - restore the running state from when we started dragging
                setIsRunning(wasRunning);
              }}
              onChangeStart={(val) => {
                // console.log(`changeStart: ${val}`);
                setWasRunning(isRunning);
                setIsRunning(false);
              }}
              onChange={(val) => {
                // console.log(`change: ${val}`);
                setElapsedTime(val);
              }}
              focusThumbOnChange={false}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
        </Box>
        {/* This works, although it does throw a warning
	 in both server-side compile and client-side console...
	 To resolve the warning, we may have to do similar to FlippablePlayerState toward the top of this file */}
        <Flex>
          <Box maxW="2xl" mx="auto">
            <FlipMove>
              {replay.game_teams
                .filter(
                  ({ team_desc }: { team_desc: string }) =>
                    team_desc !== "Neutral"
                )
                .sort((firstTeam, secondTeam) => {
                  const firstTeamScore =
                    teamScores.find(
                      (team) => team?.team === firstTeam.team_desc
                    )?.score ?? 0;

                  const secondTeamScore =
                    teamScores.find(
                      (team) => team?.team === secondTeam.team_desc
                    )?.score ?? 0;
                  return secondTeamScore - firstTeamScore;
                })
                .map((team) => {
                  const teamData = teamScores.find(
                    (tScore) => tScore.team === team.team_desc
                  );
                  return (
                    <div key={team.team_index}>
                      <Box
                        maxW="2xl"
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="base"
                        key={team.team_index}
                        p={2}
                        my={4}
                        borderColor={`${team.ui_color}.400`}
                        mx="auto"
                      >
                        <Flex>
                          <Heading color={`${team.ui_color}.500`}>
                            {team.team_desc}
                          </Heading>
                          <Spacer />
                          <Heading color={`${team.ui_color}.500`}>
                            {teamData?.score}
                          </Heading>
                        </Flex>

                        <Accordion allowMultiple allowToggle>
                          <FlipMove>
                            {team.game_entities
                              .filter(
                                ({ entity_type }: { entity_type: string }) =>
                                  entity_type === "player"
                              )
                              .sort((firstEntity, secondEntity) => {
                                const firstEntityScore = activeStates.find(
                                  (state) =>
                                    state?.playerId === firstEntity.ipl_id
                                )?.score;
                                const secondEntityScore = activeStates.find(
                                  (state) =>
                                    state?.playerId === secondEntity.ipl_id
                                )?.score;
                                return secondEntityScore - firstEntityScore;
                              })
                              .map((entity) => {
                                const state =
                                  activeStates.find(
                                    (state) => state?.playerId === entity.ipl_id
                                  ) ?? null;
                                return (
                                  <FlippablePlayerState
                                    team={team}
                                    entity={entity}
                                    state={state}
                                    key={entity.id}
                                  />
                                );
                              })}
                          </FlipMove>
                        </Accordion>
                      </Box>
                    </div>
                  );
                })}
            </FlipMove>
          </Box>
          <Box
            maxW="2xl"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="base"
            p={2}
            my={4}
            borderColor={`green.400`}
            mx="auto"
            height={500}
          >
            <ReplayActions actions={visibleActions} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const tdfId = context.params.tid;
  const data = await getReplayData(tdfId);

  if (data) {
    return {
      props: {
        replay: data,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/replay/build?tid=${tdfId}`,
        permanent: false,
      },
    };
  }
}
