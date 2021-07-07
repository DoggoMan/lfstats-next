import { useEffect, useMemo, useState, forwardRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import FlipMove from 'react-flip-move'

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Spacer,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  RepeatClockIcon,
} from '@chakra-ui/icons'
import { BsCircleFill } from 'react-icons/bs'
import { StatDisplay } from '../../components/StatDisplay'
import { PositionIcon } from '../../components/PositionIcon'
import { millisToMinutesAndSeconds } from '../../lib/helper'
import { getReplayData, ReplayData } from '../../lib/replay'
import { useTimer } from '../../lib/stopwatch'
import { PlayerProps, PlayerState } from '../../components/PlayerState'

type ExtendedGameEntityState =
  ReplayData['game_teams'][0]['game_entities'][0]['game_entity_states'][0] & {
    playerId: number
  }

type PlayerState = Omit<
  ReplayData['game_teams'][0]['game_entities'][0],
  'game_entity_states'
>

const FlippablePlayerState = forwardRef((props: PlayerProps, ref) => (
  <div ref={ref as any}>
    <PlayerState {...props} />
  </div>
))

interface Props {
  replay: ReplayData
}

export default function ReplayView({ replay }: Props) {
  const router = useRouter()
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer()

  //   const [activeStates, setActiveStates] = useState<
  //     (ExtendedGameEntityState | null)[]
  //   >([])

  //   TODO: automatically fetch additional game_entity_states when the time is updated
  //   TODO: automatically pause the clock when we run out of additional entity_states to show - 'bufferring'

  const allStates: ExtendedGameEntityState[] = useMemo(() => {
    return replay.game_teams.reduce((acc: ExtendedGameEntityState[], team) => {
      const teamEntityStates = team.game_entities.reduce(
        (acc: ExtendedGameEntityState[], player) => {
          const playerEntityStates = player.game_entity_states.map((state) => ({
            ...state,
            playerId: player.ipl_id,
          }))
          return [...acc, ...playerEntityStates]
        },
        []
      )

      return [...acc, ...teamEntityStates]
    }, [])
  }, [replay])

  const allPlayers = useMemo(() => {
    return replay.game_teams.reduce((acc: PlayerState[], team) => {
      const teamPlayers = team.game_entities
        .filter((entity) => entity.player)
        .map((entity) => ({
          ...entity,
          game_entity_states: null,
        }))
      return [...acc, ...teamPlayers]
    }, [])
  }, [replay])

  // Reviewing whether useState has any less re-renders than useMemo, for activeStates.
  // Not sure if upon a single player's activeState changing, is it causing a re-render for every player's card.
  const activeStates = useMemo(() => {
    const states: (ExtendedGameEntityState | null)[] = allPlayers.map(
      (player) => {
        const data = allStates
          .filter((state) => state.state_time <= elapsedTime * 1000)
          .filter((state) => state.playerId === player.ipl_id)
          .pop()

        if (data) {
          return { ...data, playerId: player.ipl_id }
        }
        return null
      }
    )
    return states
  }, [elapsedTime, allPlayers])

  /**
   * 
  useEffect(() => {
    const elapsedMillis = elapsedTime * 1000
    const relevantStates = allStates.filter(
      (state) => state.state_time <= elapsedMillis
    )
    const newActiveStates = allPlayers.map((player) => {
      const data = relevantStates
        .filter((state) => state.playerId === player.ipl_id)
        .pop()

      if (data) {
        return { ...data, playerId: player.ipl_id }
      }
      return null
    })
    setActiveStates(newActiveStates)
    //     setActiveStates((prev) =>
    //       prev !== newActiveStates ? newActiveStates : null
    //     )
  }, [allStates, allPlayers, elapsedTime])
	*/

  const latestState = useMemo(
    (): number => allStates[allStates.length - 1]?.state_time ?? 0,
    [allStates]
  )

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
    //     const scores = [
    //       { team: 'red', score: 0 },
    //       { team: 'green', score: 0 },
    //     ]

    const scores = replay.game_teams.map((team) => ({
      team: team.team_desc,
      score: team.game_entities.reduce(
        (total, entity) =>
          total +
          (activeStates.find((state) => state?.playerId === entity.ipl_id)
            ?.score || 0),
        0
      ),
    }))
    return scores
  }, [activeStates, replay])

  useEffect(() => {
    if (latestState && elapsedTime && latestState < elapsedTime) {
      setIsRunning(false)
      window.alert('Loading additional entity states')
    }
  }, [latestState, elapsedTime])

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
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="base"
          key={'states loaded'}
          p={2}
          my={4}
          borderColor={`green.400`}
          mx="auto"
        >
          {replay.game_teams.reduce(
            (acc, team) =>
              acc +
              team.game_entities.reduce(
                (entAcc, ent) => entAcc + ent.game_entity_states.length,
                0
              ),
            0
          )}{' '}
          Entity States Loaded
        </Box>
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="base"
          key={'time'}
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
              aria-label={'Restart'}
              icon={<RepeatClockIcon />}
              colorScheme="blue"
              onClick={() => {
                setIsRunning(false)
                setElapsedTime(0)
              }}
            />
            <IconButton
              aria-label={'Rewind'}
              variant={'outline'}
              icon={<ArrowLeftIcon boxSize={3} />}
              colorScheme="blue"
              onClick={() => setElapsedTime(Math.max(0, elapsedTime - 30))}
            />
            {isRunning ? (
              <Button
                colorScheme="blue"
                variant={'outline'}
                onClick={() => setIsRunning(false)}
              >
                Pause
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                variant={'solid'}
                onClick={() => setIsRunning(true)}
              >
                {elapsedTime === 0 ? 'Start' : 'Play'}
              </Button>
            )}
            <IconButton
              aria-label={'Fast Forward'}
              icon={<ArrowRightIcon boxSize={3} />}
              colorScheme="blue"
              variant={'outline'}
              onClick={() =>
                setElapsedTime(Math.min(15 * 60, elapsedTime + 30))
              }
            />
          </Flex>
        </Box>
        {replay.game_teams
          .filter(
            ({ team_desc }: { team_desc: string }) => team_desc !== 'Neutral'
          )
          .sort((firstTeam, secondTeam) => secondTeam.score - firstTeam.score)
          .map((team) => {
            const teamData = teamScores.find(
              (tScore) => tScore.team === team.team_desc
            )
            return (
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
                          entity_type === 'player'
                      )
                      .sort((firstEntity, secondEntity) => {
                        const firstEntityScore = activeStates.find(
                          (state) => state?.playerId === firstEntity.ipl_id
                        )?.score
                        const secondEntityScore = activeStates.find(
                          (state) => state?.playerId === secondEntity.ipl_id
                        )?.score
                        return secondEntityScore - firstEntityScore
                      })
                      .map((entity) => {
                        const state = activeStates.find(
                          (state) => state?.playerId === entity.ipl_id
                        )
                        return (
                          <FlippablePlayerState
                            team={team}
                            entity={entity}
                            state={state}
                            key={entity.id}
                          />
                        )
                      })}
                  </FlipMove>
                </Accordion>
              </Box>
            )
          })}
      </Box>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const gameId = context.params.gid
  const data = await getReplayData(gameId)

  return {
    props: {
      replay: data,
    },
  }
}
