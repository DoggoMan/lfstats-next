import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import { millisToMinutesAndSeconds } from "../lib/helper";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Stat,
  StatLabel,
  StatNumber,
  Spacer,
  Text,
  Heading,
  StatGroup,
  StatHelpText,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { StatDisplay } from "../components/StatDisplay";
import { PositionIcon } from "../components/PositionIcon";

export default function GameView({ game }: any) {
  return (
    <div>
      <Head>
        <title>LFStats Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box justifyContent="center" paddingTop="70" px={4}>
        {game.game_teams
          .filter(
            ({ team_desc }: { team_desc: string }) => team_desc !== "Neutral"
          )
          .sort(
            (firstTeam: any, secondTeam: any) =>
              secondTeam.score - firstTeam.score
          )
          .map((team: any) => (
            <Box
              maxW="2xl"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="base"
              key={team.id}
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
                <Heading color={`${team.ui_color}.500`}>{team.score}</Heading>
              </Flex>

              <Accordion allowMultiple allowToggle>
                {team.game_entities
                  .filter(
                    ({ entity_type }: { entity_type: string }) =>
                      entity_type === "player"
                  )
                  .sort(
                    (firstEntity: any, secondEntity: any) =>
                      secondEntity.score - firstEntity.score
                  )
                  .map((entity: any) => {
                    let state = entity.game_entity_states[0];
                    return (
                      <AccordionItem key={entity.id}>
                        <h2>
                          <AccordionButton>
                            <Flex
                              color={
                                state.lives > 0
                                  ? `${team.ui_color}.600`
                                  : `gray.500`
                              }
                            >
                              <Box px={1}>
                                <PositionIcon position={entity.position} />
                              </Box>
                              <Box px={1}>
                                <Heading size="sm" isTruncated>
                                  {entity.entity_desc}
                                </Heading>
                              </Box>
                            </Flex>
                            <Spacer />
                            <Box
                              px={1}
                              display={{
                                base: "none",
                                sm: "contents",
                              }}
                            >
                              <StatGroup>
                                <StatDisplay value={state.score} name="Score" />
                                <StatDisplay value="N/A" name="MVP" />
                              </StatGroup>
                            </Box>
                            <Box
                              px={1}
                              display={{
                                base: "contents",
                                sm: "none",
                              }}
                            >
                              {state.score}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <SimpleGrid minChildWidth="120px">
                            <Box
                              display={{
                                base: "contents",
                                sm: "none",
                              }}
                            >
                              <StatDisplay value={state.score} name="Score" />
                              <StatDisplay value="N/A" name="MVP" />
                            </Box>
                            <StatDisplay
                              value={(state.accuracy * 100).toFixed(2) + "%"}
                              name="Accuracy"
                            />
                            <StatDisplay
                              name="Hit Diff"
                              value={state.hit_diff.toFixed(2)}
                            />
                            <StatDisplay
                              name="Medic Hits"
                              value={state.medic_hits}
                            />
                            <StatDisplay name="Assists" value={state.assists} />
                            {state.cancel_opponent_nuke > 0 && (
                              <StatDisplay
                                name="Nuke Cancels"
                                value={state.cancel_opponent_nuke}
                              />
                            )}
                            {state.cancel_team_nuke > 0 && (
                              <StatDisplay
                                name="Team Nuke Cancels"
                                value={state.cancel_team_nuke}
                              />
                            )}
                            {state.cancel_team_nuke_by_resupply > 0 && (
                              <StatDisplay
                                name="Team Resupply Nuke Cancels"
                                value={state.cancel_team_nuke_by_resupply}
                              />
                            )}
                            {state.own_medic_hits > 0 && (
                              <StatDisplay
                                name="Own Medic Hits"
                                value={state.own_medic_hits}
                                size="xl"
                              />
                            )}
                            <StatDisplay
                              name="Shots Left"
                              value={state.shots}
                            />
                            <StatDisplay
                              name="Lives Left"
                              value={state.lives}
                            />
                            {state.self_missile > 0 && (
                              <StatDisplay
                                name="Times Missiled"
                                value={state.self_missile}
                              />
                            )}
                            {entity.position !== "Heavy Weapons" && (
                              <>
                                <StatDisplay
                                  name="SP Earned"
                                  value={state.sp_earned}
                                />
                                <StatDisplay
                                  name="SP Spent"
                                  value={state.sp_spent}
                                />
                              </>
                            )}
                            {state.penalties > 0 && (
                              <StatDisplay
                                name="Penalties"
                                value={state.penalties}
                              />
                            )}
                          </SimpleGrid>
                          <Accordion allowMultiple allowToggle>
                            <AccordionItem>
                              <h1>
                                <AccordionButton>
                                  <Box>
                                    <Heading size="xs">Hit Stats</Heading>
                                  </Box>
                                  <Spacer />
                                  <AccordionIcon />
                                </AccordionButton>
                              </h1>
                              <AccordionPanel>
                                <SimpleGrid minChildWidth="120px">
                                  <StatDisplay
                                    name="Shots Fired"
                                    value={state.shots_fired}
                                  />
                                  <StatDisplay
                                    name="Shots Hit"
                                    value={state.shots_hit}
                                  />
                                  <StatDisplay
                                    name="Shot Opponent"
                                    value={state.shot_opponent}
                                  />
                                  <StatDisplay
                                    name="Deac Opponent"
                                    value={state.deac_opponent}
                                  />
                                  <StatDisplay
                                    name="Shot 3-Hit"
                                    value={state.shot_3hit}
                                  />
                                  <StatDisplay
                                    name="Deac 3-Hit"
                                    value={state.deac_3hit}
                                  />
                                  <StatDisplay
                                    name="Times Hit"
                                    value={state.self_hit}
                                  />
                                  <StatDisplay
                                    name="Times Deac-ed"
                                    value={state.self_deac}
                                  />
                                </SimpleGrid>
                              </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                              <h1>
                                <AccordionButton>
                                  <Box>
                                    <Heading size="xs">Resupply Stats</Heading>
                                  </Box>
                                  <Spacer />
                                  <AccordionIcon />
                                </AccordionButton>
                              </h1>
                              <AccordionPanel>
                                <SimpleGrid minChildWidth="120px">
                                  {entity.position === "Ammo Carrier" && (
                                    <>
                                      <StatDisplay
                                        name="Players Resupplied (Shots)"
                                        value={state.resupply_shots}
                                      />
                                      <StatDisplay
                                        name="Ammo Boosts Activated"
                                        value={state.ammo_boosts}
                                      />
                                      <StatDisplay
                                        name="Players Boosted (Shots)"
                                        value={state.ammo_boosted_players}
                                      />
                                    </>
                                  )}
                                  {entity.position === "Medic" && (
                                    <>
                                      <StatDisplay
                                        name="Players Resupplied (Lives)"
                                        value={state.resupply_lives}
                                      />
                                      <StatDisplay
                                        name="Life Boosts Activated"
                                        value={state.life_boosts}
                                      />
                                      <StatDisplay
                                        name="Players Boosted (Lives)"
                                        value={state.life_boosted_players}
                                      />
                                    </>
                                  )}
                                  {entity.position !== "Ammo Carrier" && (
                                    <>
                                      <StatDisplay
                                        name="Ammo Resupplies"
                                        value={state.self_resupply_shots}
                                      />
                                      <StatDisplay
                                        name="Ammo Boosts"
                                        value={state.ammo_boost_received}
                                      />
                                    </>
                                  )}
                                  {entity.position !== "Medic" && (
                                    <>
                                      <StatDisplay
                                        name="Lives Resupplies"
                                        value={state.self_resupply_lives}
                                      />
                                      <StatDisplay
                                        name="Life Boosts"
                                        value={state.life_boost_received}
                                      />
                                    </>
                                  )}
                                </SimpleGrid>
                              </AccordionPanel>
                            </AccordionItem>
                            {entity.position === "Scout" && (
                              <AccordionItem>
                                <h1>
                                  <AccordionButton>
                                    <Box>
                                      <Heading size="xs">Rapid Fire</Heading>
                                    </Box>
                                    <Spacer />
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h1>
                                <AccordionPanel>
                                  <SimpleGrid minChildWidth="120px">
                                    <StatDisplay
                                      name="Rapid Fires"
                                      value={state.rapid_fires}
                                    />
                                    <StatDisplay
                                      name="Accuracy"
                                      value={
                                        (
                                          state.accuracy_during_rapid * 100
                                        ).toFixed(2) + "%"
                                      }
                                    />
                                    <StatDisplay
                                      name="Hit Diff"
                                      value={state.hit_diff_during_rapid.toFixed(
                                        2
                                      )}
                                    />
                                    <StatDisplay
                                      name="Assists"
                                      value={state.assists_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Shots Fired"
                                      value={state.shots_fired_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Shots Hit"
                                      value={state.shots_hit_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Shot Opponent"
                                      value={state.shot_opponent_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Deac Opponent"
                                      value={state.deac_opponent_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Shot 3-Hit"
                                      value={state.shot_3hit_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Deac 3-Hit"
                                      value={state.deac_3hit_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Shot Team"
                                      value={state.shot_team_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Deac Team"
                                      value={state.deac_team_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Medic Hits"
                                      value={state.medic_hits_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Times Hit"
                                      value={state.self_hit_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Times Deac-ed"
                                      value={state.self_deac_during_rapid}
                                    />
                                    <StatDisplay
                                      name="Times Missiled"
                                      value={state.self_missile_during_rapid}
                                    />
                                  </SimpleGrid>
                                </AccordionPanel>
                              </AccordionItem>
                            )}
                            {(entity.position === "Heavy Weapons" ||
                              entity.position === "Commander") && (
                              <AccordionItem>
                                <h1>
                                  <AccordionButton>
                                    <Box>
                                      <Heading size="xs">Missile Stats</Heading>
                                    </Box>
                                    <Spacer />
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h1>
                                <AccordionPanel>
                                  <SimpleGrid minChildWidth="120px">
                                    <StatDisplay
                                      name="Missile Opponent"
                                      value={state.missile_opponent}
                                    />
                                    <StatDisplay
                                      name="Missile Base"
                                      value={state.missile_base}
                                    />
                                    <StatDisplay
                                      name="Missile Team"
                                      value={state.missile_team}
                                    />

                                    <StatDisplay
                                      name="Missiles Left"
                                      value={state.missiles_left}
                                    />
                                  </SimpleGrid>
                                </AccordionPanel>
                              </AccordionItem>
                            )}
                            {entity.position === "Commander" && (
                              <AccordionItem>
                                <h1>
                                  <AccordionButton>
                                    <Box>
                                      <Heading size="xs">Nuke Stats</Heading>
                                    </Box>
                                    <Spacer />
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h1>
                                <AccordionPanel>
                                  <SimpleGrid minChildWidth="120px">
                                    <StatDisplay
                                      name="Nukes Activated"
                                      value={state.nukes_activated}
                                    />
                                    <StatDisplay
                                      name="Nukes Detonated"
                                      value={state.nukes_detonated}
                                    />
                                    <StatDisplay
                                      name="Nuke Medic hits"
                                      value={state.nuke_medic_hits}
                                    />
                                    {state.own_nuke_canceled_by_opponent >
                                      0 && (
                                      <StatDisplay
                                        name="Own Nuke Canceled (Opponent)"
                                        value={
                                          state.own_nuke_canceled_by_opponent
                                        }
                                      />
                                    )}
                                    {state.own_nuke_canceled_by_team > 0 && (
                                      <StatDisplay
                                        name="Own Nuke Canceled (Team)"
                                        value={state.own_nuke_canceled_by_team}
                                      />
                                    )}
                                    {state.own_nuke_canceled_by_nuke > 0 && (
                                      <StatDisplay
                                        name="Own Nuke Canceled (Nuke)"
                                        value={state.own_nuke_canceled_by_nuke}
                                      />
                                    )}
                                    {state.own_nuke_canceled_by_resupply >
                                      0 && (
                                      <StatDisplay
                                        name="Own Nuke Canceled (Resupply)"
                                        value={
                                          state.own_nuke_canceled_by_resupply
                                        }
                                      />
                                    )}
                                    {state.own_nuke_canceled_by_game_end >
                                      0 && (
                                      <StatDisplay
                                        name="Own Nuke Canceled (Game End)"
                                        value={
                                          state.own_nuke_canceled_by_game_end
                                        }
                                      />
                                    )}
                                    {state.own_nuke_canceled_by_penalty > 0 && (
                                      <StatDisplay
                                        name="Own Nuke Canceled (Penalty)"
                                        value={
                                          state.own_nuke_canceled_by_penalty
                                        }
                                      />
                                    )}
                                  </SimpleGrid>
                                </AccordionPanel>
                              </AccordionItem>
                            )}
                            <AccordionItem>
                              <h1>
                                <AccordionButton>
                                  <Box>
                                    <Heading size="xs">Bases</Heading>
                                  </Box>
                                  <Spacer />
                                  <AccordionIcon />
                                </AccordionButton>
                              </h1>
                              <AccordionPanel>
                                <SimpleGrid minChildWidth="120px">
                                  <StatDisplay
                                    name="Bases Destroyed"
                                    value={state.destroy_base}
                                  />
                                  <StatDisplay
                                    name="Bases Awarded"
                                    value={state.award_base}
                                  />
                                  <StatDisplay
                                    name="Shot Base"
                                    value={state.shot_base}
                                  />
                                  <StatDisplay
                                    name="Miss Base"
                                    value={state.miss_base}
                                  />
                                  <StatDisplay
                                    name="Missile Base"
                                    value={state.missile_base}
                                  />
                                </SimpleGrid>
                              </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                              <h1>
                                <AccordionButton>
                                  <Box>
                                    <Heading size="xs">Uptime</Heading>
                                  </Box>
                                  <Spacer />
                                  <AccordionIcon />
                                </AccordionButton>
                              </h1>
                              <AccordionPanel>
                                <SimpleGrid minChildWidth="120px">
                                  <StatDisplay
                                    name="Total Time"
                                    value={millisToMinutesAndSeconds(
                                      state.uptime +
                                        state.opp_deac_downtime +
                                        state.nuke_downtime +
                                        state.resupply_downtime +
                                        state.team_deac_downtime +
                                        state.penalty_downtime
                                    )}
                                  />
                                  <StatDisplay
                                    name="Uptime"
                                    value={millisToMinutesAndSeconds(
                                      state.uptime
                                    )}
                                  />
                                  <StatDisplay
                                    name="Downtime Opponent"
                                    value={millisToMinutesAndSeconds(
                                      state.opp_deac_downtime
                                    )}
                                  />
                                  <StatDisplay
                                    name="Downtime Nuke"
                                    value={millisToMinutesAndSeconds(
                                      state.nuke_downtime
                                    )}
                                  />
                                  <StatDisplay
                                    name="Downtime Resupply"
                                    value={millisToMinutesAndSeconds(
                                      state.resupply_downtime
                                    )}
                                  />
                                  <StatDisplay
                                    name="Downtime Team"
                                    value={millisToMinutesAndSeconds(
                                      state.team_deac_downtime
                                    )}
                                  />
                                  <StatDisplay
                                    name="Downtime - Penalty"
                                    value={millisToMinutesAndSeconds(
                                      state.penalty_downtime
                                    )}
                                  />
                                </SimpleGrid>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
              </Accordion>
            </Box>
          ))}
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Game {
        game: game_by_pk(id: "2") {
          center {
            name
          }
          game_teams {
            color_desc
            color_enum
            ui_color
            team_desc
            team_index
            score
            game_entities {
              battlesuit
              category
              eliminated
              end_code
              end_time
              entity_level
              entity_type
              entity_desc
              id
              ipl_id
              player_id
              position
              start_time
              score
              player {
                current_alias
                ipl_id
              }
              game_entity_states(where: { is_final: { _eq: true } }) {
                accuracy
                accuracy_during_rapid
                ammo_boost_received
                ammo_boosts
                ammo_boosted_players
                assists
                assists_during_rapid
                award_base
                cancel_opponent_nuke
                cancel_team_nuke
                current_hp
                cancel_team_nuke_by_resupply
                deac_3hit
                deac_3hit_during_rapid
                deac_opponent_during_rapid
                deac_opponent
                deac_team
                destroy_base
                deac_team_during_rapid
                entity_id
                hit_diff
                hit_diff_during_rapid
                id
                is_active
                is_eliminated
                is_final
                is_nuking
                is_rapid
                last_deac_time
                last_deac_type
                life_boost_received
                life_boosted_players
                life_boosts
                lives
                medic_hits
                medic_hits_during_rapid
                miss_base
                missile_base
                missile_opponent
                missile_team
                missiles_left
                nuke_downtime
                nuke_medic_hits
                nukes_activated
                nukes_detonated
                opp_deac_downtime
                own_medic_hits
                own_nuke_canceled_by_game_end
                own_nuke_canceled_by_nuke
                own_nuke_canceled_by_opponent
                own_nuke_canceled_by_penalty
                own_nuke_canceled_by_resupply
                own_nuke_canceled_by_team
                penalties
                penalty_downtime
                rapid_fires
                resupply_downtime
                resupply_lives
                resupply_shots
                score
                self_deac
                self_deac_during_rapid
                self_hit
                self_hit_during_rapid
                self_missile
                self_missile_during_rapid
                self_resupply_lives
                self_resupply_shots
                shot_3hit
                shot_3hit_during_rapid
                shot_base
                shot_opponent
                shot_opponent_during_rapid
                shot_team
                shot_team_during_rapid
                shots
                shots_fired
                shots_fired_during_rapid
                shots_hit
                shots_hit_during_rapid
                sp_earned
                sp_spent
                state_time
                team_deac_downtime
                times_missiled
                uptime
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      game: data.game,
    },
  };
}
