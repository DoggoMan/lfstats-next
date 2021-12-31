import {
  ArrowLeftIcon,
  ArrowRightIcon,
  RepeatClockIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import ReplayActions from "./ReplayActions";
import { GameAction, GameEntity, GameEntityState } from "../lib/game";
import { millisToMinutesAndSeconds } from "../lib/helper";
import { ReplayData } from "../lib/replay";
import { useTimer } from "../lib/stopwatch";

interface ReplayProps {
  replay: ReplayData;
}

type Player = Omit<GameEntity, "game_entity_states">;

export default function ReplayView({ replay }: ReplayProps) {
  const missionStart = new Date(replay.mission_start);
  const missionLength = Math.ceil(replay.mission_length / 1000);

  const {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime,
    timeScale,
    updateTimeScale,
  } = useTimer(missionLength);

  const [visibleActions, setVisibleActions] = useState<GameAction[]>([]);
  const [wasRunning, setWasRunning] = useState(false);

  const allStates = useMemo(() => {
    return replay.game_teams.reduce((acc: GameEntityState[], team) => {
      const teamEntityStates = team.game_entities.reduce(
        (acc: GameEntityState[], player) => {
          const playerEntityStates = player.game_entity_states ?? [];
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
    const states = allPlayers.map((player) => {
      return allStates
        .filter((state) => state.state_time <= elapsedTime * 1000)
        .filter((state) => state.entity_id === player.id)
        .pop();
    });
    return states;
  }, [elapsedTime, allPlayers, allStates]);

  const teamScores = useMemo(() => {
    const scores = replay.game_teams.map((team) => ({
      team: team.team_desc,
      score: team.game_entities.reduce(
        (total, entity) =>
          total +
          (activeStates.find((state) => state?.entity_id === entity.id)
            ?.score || 0),
        0
      ),
    }));
    return scores;
  }, [activeStates, replay]);

  useEffect(() => {
    setVisibleActions(
      replay.game_actions.filter(
        (action) => action.action_time <= elapsedTime * 1000
      )
    );
  }, [replay.game_actions, elapsedTime]);

  return (
    <>
      <Head>
        <title>LFStats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box maxW="2xl" key={"game header"} p={2} my={4} mx="auto">
        <Flex>
          <Heading>
            {replay.center.name} Replay at {missionStart.getHours()}:
            {missionStart.getMinutes()}
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
            onClick={() => setElapsedTime(Math.min(15 * 60, elapsedTime + 30))}
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
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="base"
          mx="auto"
        >
          {replay.game_teams
            .filter(
              ({ team_desc }: { team_desc: string }) => team_desc !== "Neutral"
            )
            .sort((firstTeam, secondTeam) => {
              const firstTeamScore =
                teamScores.find((team) => team.team === firstTeam.team_desc)
                  ?.score ?? 0;

              const secondTeamScore =
                teamScores.find((team) => team.team === secondTeam.team_desc)
                  ?.score ?? 0;
              return secondTeamScore - firstTeamScore;
            })
            .map((team) => {
              const teamData = teamScores.find(
                (tScore) => tScore.team === team.team_desc
              );
              return (
                <motion.table
                  layout
                  transition={{ type: "spring", duration: 0.3 }}
                  key={team.team_index}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Score</th>
                      <th>MVP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.game_entities
                      .filter(
                        ({ entity_type }: { entity_type: string }) =>
                          entity_type === "player"
                      )
                      .sort((firstEntity, secondEntity) => {
                        const firstEntityScore =
                          activeStates.find(
                            (state) => state?.entity_id === firstEntity.id
                          )?.score ?? 0;
                        const secondEntityScore =
                          activeStates.find(
                            (state) => state?.entity_id === secondEntity.id
                          )?.score ?? 0;
                        return secondEntityScore - firstEntityScore;
                      })
                      .map((entity) => {
                        const state =
                          activeStates.find(
                            (state) => state?.entity_id === entity.id
                          ) ?? null;
                        return (
                          <motion.tr
                            layout
                            transition={{ type: "spring", duration: 0.3 }}
                            key={entity.id}
                          >
                            <td>{entity.player.current_alias}</td>
                            <td>{state?.score}</td>
                            <td>{Math.round((state?.mvp ?? 0) * 100) / 100}</td>
                          </motion.tr>
                        );
                      })}
                  </tbody>
                </motion.table>
              );
            })}
        </Box>
      </Flex>
    </>
  );
}
