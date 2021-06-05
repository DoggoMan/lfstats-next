import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import LFNav from "../components/LFNav";
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/solid";
import { PositionIcon } from "../components/PositionIcon";
import { StatDisplay } from "../components/StatDisplay";
import { millisToMinutesAndSeconds } from "../lib/helper";

export default function Home({ game }: any) {
  return (
    <div>
      <Head>
        <title>LFStats Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LFNav />
      <div className="w-full px-4 pt-16">
        {game.game_teams
          .filter(
            ({ team_desc }: { team_desc: string }) => team_desc !== "Neutral"
          )
          .map((team: any) => (
            <div
              className="border border-blue-700 w-full max-w-2xl p-2 mx-auto bg-white rounded-2xl"
              key={team.id}
            >
              {team.game_entities
                .filter(
                  ({ entity_type }: { entity_type: string }) =>
                    entity_type === "player"
                )
                .sort(
                  (firstEntity: any, secondEntity: any) =>
                    secondEntity.game_entity_states[0].score -
                    firstEntity.game_entity_states[0].score
                )
                .map((entity: any) => (
                  <Disclosure key={entity.id}>
                    {({ open }) => {
                      let state = entity.game_entity_states[0];
                      return (
                        <div className="border-l border-gray-500 my-4">
                          <Disclosure.Button className="w-full px-4 text-lg font-medium text-left text-blue-500 rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <div className="flex">
                              <div className="flex-none w-1/12">
                                <PositionIcon position={entity.position} />
                              </div>
                              <div className="flex w-10/12">
                                <div className="w-full md:w-4/6">
                                  <p className="text-xl font-bold text-black">
                                    {entity.entity_desc}
                                  </p>
                                </div>
                                <div className="invisible w-0 md:visible md:w-1/6">
                                  <Stat name="Score" value={state.score} />
                                </div>
                                <div className="invisible w-0 md:visible md:w-1/6">
                                  <Stat name="MVP" value={"20.22"} />
                                </div>
                              </div>
                              <div className="flex-none w-1/12">
                                <PlusIcon
                                  className={`${
                                    open
                                      ? "transition duration-200 transform rotate-45"
                                      : "transition duration-75"
                                  } w-12 h-12 text-blue-500`}
                                />
                              </div>
                            </div>
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-200 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="px-4 pt-4 pb-2">
                              <div className="flex flex-wrap">
                                <Stat
                                  name="Accuracy"
                                  value={
                                    (state.accuracy * 100).toFixed(2) + "%"
                                  }
                                />
                                <Stat
                                  name="Hit Diff"
                                  value={state.hit_diff.toFixed(2)}
                                />
                                <Stat
                                  name="Medic Hits"
                                  value={state.medic_hits}
                                />
                                <Stat
                                  name="Own Medic Hits"
                                  value={state.own_medic_hits}
                                  size="xl"
                                />
                                <Stat name="Shots Left" value={state.shots} />
                                <Stat name="Lives Left" value={state.lives} />
                                <Stat
                                  name="SP Earned"
                                  value={state.sp_earned}
                                />
                                <Stat name="SP Spent" value={state.sp_spent} />
                                <Stat
                                  name="Penalties"
                                  value={state.penalties}
                                />
                                <Disclosure>
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button className="w-full px-4 py-2 text-lg font-medium text-left text-blue-500 rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                        <div className="flex items-center">
                                          <div className="flex-1">
                                            Hit Stats
                                          </div>
                                          <div className="flex-row-reverse">
                                            <PlusIcon
                                              className={`${
                                                open
                                                  ? "transition duration-200 transform rotate-45"
                                                  : "transition duration-75"
                                              } w-5 h-5 text-blue-500`}
                                            />
                                          </div>
                                        </div>
                                      </Disclosure.Button>
                                      <Disclosure.Panel className="flex flex-wrap border-b">
                                        <Stat
                                          name="Shots Fired"
                                          value={state.shots_fired}
                                        />
                                        <Stat
                                          name="Shots Hit"
                                          value={state.shots_hit}
                                        />
                                        <Stat
                                          name="Shot Opponent"
                                          value={state.shot_opponent}
                                        />
                                        <Stat
                                          name="Deac Opponent"
                                          value={state.deac_opponent}
                                        />
                                        <Stat
                                          name="Shot 3-Hit"
                                          value={state.shot_3hit}
                                        />
                                        <Stat
                                          name="Deac 3-Hit"
                                          value={state.deac_3hit}
                                        />
                                        <Stat
                                          name="Times Hit"
                                          value={state.self_hit}
                                        />
                                        <Stat
                                          name="Times Deac-ed"
                                          value={state.self_deac}
                                        />
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>

                                <Stat
                                  name="Ammo Resupplies"
                                  value={state.self_resupply_shots}
                                />
                                <Stat
                                  name="Lives Resupplies"
                                  value={state.self_resupply_lives}
                                />
                                <Stat
                                  name="Ammo Boosts"
                                  value={state.ammo_boost_received}
                                />
                                <Stat
                                  name="Life Boosts"
                                  value={state.life_boost_received}
                                />
                                <Stat
                                  name="Players Resupplied (Shots)"
                                  value={state.resupply_shots}
                                />
                                <Stat
                                  name="Ammo Boosts Activated"
                                  value={state.ammo_boosts}
                                />
                                <Stat
                                  name="Players Boosted (Shots)"
                                  value={state.ammo_boosted_players}
                                />
                                <Stat
                                  name="Players Resupplied (Lives)"
                                  value={state.resupply_lives}
                                />
                                <Stat
                                  name="Life Boosts Activated"
                                  value={state.life_boosts}
                                />
                                <Stat
                                  name="Players Boosted (Lives)"
                                  value={state.life_boosted_players}
                                />
                                <Stat
                                  name="Rapid Fires"
                                  value={state.rapid_fires}
                                />
                                <Stat
                                  name="Accuracy (Rapid)"
                                  value={
                                    (state.accuracy_during_rapid * 100).toFixed(
                                      2
                                    ) + "%"
                                  }
                                />
                                <Stat
                                  name="Hit Diff (Rapid)"
                                  value={state.hit_diff_during_rapid.toFixed(2)}
                                />
                                <Stat
                                  name="Shots Fired (Rapid)"
                                  value={state.shots_fired_during_rapid}
                                />
                                <Stat
                                  name="Shots Hit (Rapid)"
                                  value={state.shots_hit_during_rapid}
                                />
                                <Stat
                                  name="Shot Opponent (Rapid)"
                                  value={state.shot_opponent_during_rapid}
                                />
                                <Stat
                                  name="Deac Opponent (Rapid)"
                                  value={state.deac_opponent_during_rapid}
                                />
                                <Stat
                                  name="Shot 3-Hit (Rapid)"
                                  value={state.shot_3hit_during_rapid}
                                />
                                <Stat
                                  name="Deac 3-Hit (Rapid)"
                                  value={state.deac_3hit_during_rapid}
                                />
                                <Stat
                                  name="Shot Team (Rapid)"
                                  value={state.shot_team_during_rapid}
                                />
                                <Stat
                                  name="Deac Team (Rapid)"
                                  value={state.deac_team_during_rapid}
                                />
                                <Stat
                                  name="Medic Hits (Rapid)"
                                  value={state.medic_hits_during_rapid}
                                />
                                <Stat
                                  name="Times Hit (Rapid)"
                                  value={state.self_hit_during_rapid}
                                />
                                <Stat
                                  name="Times Deac-ed (Rapid)"
                                  value={state.self_deac_during_rapid}
                                />
                                <Stat
                                  name="Times Missiled (Rapid)"
                                  value={state.self_missile_during_rapid}
                                />
                                <Stat
                                  name="Times Missiled"
                                  value={state.self_missile}
                                />
                                <Stat
                                  name="Missile Opponent"
                                  value={state.missile_opponent}
                                />
                                <Stat
                                  name="Missiles Left"
                                  value={state.missiles_left}
                                />
                                <Stat
                                  name="Missile Team"
                                  value={state.missile_team}
                                />
                                <Stat
                                  name="Nuke Cancels"
                                  value={state.cancel_opponent_nuke}
                                />
                                <Stat
                                  name="Team Nuke Cancels"
                                  value={state.cancel_team_nuke}
                                />
                                <Stat
                                  name="Team Resupply Nuke Cancels"
                                  value={state.cancel_team_nuke_by_resupply}
                                />
                                <Stat
                                  name="Nukes Activated"
                                  value={state.nukes_activated}
                                />
                                <Stat
                                  name="Nukes Detonated"
                                  value={state.nukes_detonated}
                                />
                                <Stat
                                  name="Nuke Medic hits"
                                  value={state.nuke_medic_hits}
                                />
                                <Stat
                                  name="Own Nuke Canceled (Opponent)"
                                  value={state.own_nuke_canceled_by_opponent}
                                />
                                <Stat
                                  name="Own Nuke Canceled (Team)"
                                  value={state.own_nuke_canceled_by_team}
                                />
                                <Stat
                                  name="Own Nuke Canceled (Nuke)"
                                  value={state.own_nuke_canceled_by_nuke}
                                />
                                <Stat
                                  name="Own Nuke Canceled (Resupply)"
                                  value={state.own_nuke_canceled_by_resupply}
                                />
                                <Stat
                                  name="Own Nuke Canceled (Game End)"
                                  value={state.own_nuke_canceled_by_game_end}
                                />
                                <Stat
                                  name="Own Nuke Canceled (Penalty)"
                                  value={state.own_nuke_canceled_by_penalty}
                                />
                                <Stat
                                  name="Bases Destroyed"
                                  value={state.destroy_base}
                                />
                                <Stat
                                  name="Shot Base"
                                  value={state.shot_base}
                                />
                                <Stat
                                  name="Miss Base"
                                  value={state.miss_base}
                                />
                                <Stat
                                  name="Missile Base"
                                  value={state.missile_base}
                                />
                                <Stat
                                  name="Uptime"
                                  value={millisToMinutesAndSeconds(
                                    state.uptime
                                  )}
                                />
                                <Stat
                                  name="Downtime Opponent"
                                  value={millisToMinutesAndSeconds(
                                    state.opp_deac_downtime
                                  )}
                                />
                                <Stat
                                  name="Downtime Nuke"
                                  value={millisToMinutesAndSeconds(
                                    state.nuke_downtime
                                  )}
                                />
                                <Stat
                                  name="Downtime Resupply"
                                  value={millisToMinutesAndSeconds(
                                    state.resupply_downtime
                                  )}
                                />
                                <Stat
                                  name="Downtime Team"
                                  value={millisToMinutesAndSeconds(
                                    state.team_deac_downtime
                                  )}
                                />
                                <Stat
                                  name="Downtime - Penalty"
                                  value={millisToMinutesAndSeconds(
                                    state.penalty_downtime
                                  )}
                                />
                              </div>
                            </Disclosure.Panel>
                          </Transition>
                        </div>
                      );
                    }}
                  </Disclosure>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Game {
        game: game_by_pk(id: "1") {
          center {
            name
          }
          game_teams {
            color_desc
            color_enum
            team_desc
            team_index
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
