import { useEffect, useMemo, useState, forwardRef } from "react";
import Head from "next/head";
import FlipMove from "react-flip-move";

import {
  Accordion,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  RepeatClockIcon,
} from "@chakra-ui/icons";
import { millisToMinutesAndSeconds } from "../../lib/helper";
import { getReplayData, ReplayData } from "../../lib/replay";
import { useTimer } from "../../lib/stopwatch";
import { PlayerProps, PlayerState } from "../../components/PlayerState";
import { GameEntity, GameEntityState } from "../../lib/game";

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

export default function ReplayView({ replay }: Props) {
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer();
  const missionStart = new Date(replay.mission_start);

  // TODO: automatically fetch additional game_entity_states when the time is updated
  // TODO: automatically pause the clock when we run out of additional entity_states to show - 'bufferring'
  // TODO: investigate very poor accordion performance (open/close) while timer is running

  const allStates: ExtendedGameEntityState[] = useMemo(() => {
    return replay.game_teams.reduce((acc: ExtendedGameEntityState[], team) => {
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
    }, []);
  }, [replay]);

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

  //   const latestActiveState = useMemo((): number => {
  //     let latest = 0
  //     activeStates.forEach((state) => {
  //       if (state?.state_time > latest) {
  //         latest = state?.state_time
  //       }
  //     })
  //     return latest
  //   }, [activeStates])

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

  useEffect(() => {
    if (latestState && elapsedTime && latestState < elapsedTime * 1000) {
      setIsRunning(false);
      window.alert("Loading additional entity states");
    }
  }, [latestState, elapsedTime, setIsRunning]);

  //   console.log({
  //     latestState,
  //     latestActiveState,
  //     allStates,
  //     allPlayers,
  //     activeStates,
  //   })

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
              Game at {missionStart.getHours()}:{missionStart.getMinutes()}
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
          {replay.game_teams.reduce(
            (acc, team) =>
              acc +
              team.game_entities.reduce(
                (entAcc, ent) => entAcc + (ent.game_entity_states?.length ?? 0),
                0
              ),
            0
          )}{" "}
          Entity States Loaded
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
              variant={"outline"}
              icon={<ArrowLeftIcon boxSize={3} />}
              colorScheme="blue"
              onClick={() => setElapsedTime(Math.max(0, elapsedTime - 30))}
            />
            {isRunning ? (
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
              onClick={() =>
                setElapsedTime(Math.min(15 * 60, elapsedTime + 30))
              }
            />
          </Flex>
        </Box>
        {/* This works, although it does throw a warning
	 in both server-side compile and client-side console...
	 To resolve the warning, we may have to do similar to FlippablePlayerState toward the top of this file */}
        <FlipMove>
          {replay.game_teams
            .filter(
              ({ team_desc }: { team_desc: string }) => team_desc !== "Neutral"
            )
            .sort((firstTeam, secondTeam) => {
              const firstTeamScore =
                teamScores.find((team) => team?.team === firstTeam.team_desc)
                  ?.score ?? 0;

              const secondTeamScore =
                teamScores.find((team) => team?.team === secondTeam.team_desc)
                  ?.score ?? 0;
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
                              (state) => state?.playerId === firstEntity.ipl_id
                            )?.score;
                            const secondEntityScore = activeStates.find(
                              (state) => state?.playerId === secondEntity.ipl_id
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
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const gameId = context.params.gid;
  const data = await getReplayData(gameId);

  return {
    props: {
      replay: data,
    },
  };
}
