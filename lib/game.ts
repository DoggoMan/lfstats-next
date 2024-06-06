import { gql } from "@apollo/client";
import client from "./apollo-client";
import { GameDataTDF } from "../types/GameData";
import { GameMetaData } from "../types/GameMetaData";

export async function getRecentGames(): Promise<GameMetaData[]> {
  const { data } = await client.query({
    query: gql`
      query RecentGames {
        game(order_by: { mission_start: desc }, limit: 10) {
          id
          tdf_id
          mission_start
          mission_length
          chomper_version
          center {
            name
          }
        }
      }
    `,
  });

  return data.game;
}

export async function getGameMetaData(tdfId: string): Promise<GameMetaData> {
  const { data } = await client.query({
    query: gql`
      query GameMetaData($tdfId: String!) {
        game(where: { tdf_id: { _eq: $tdfId } }) {
          id
          tdf_id
          mission_start
          mission_length
          chomper_version
          center {
            name
          }
        }
      }
    `,
    variables: { tdfId },
  });
  return data.game[0];
}

export async function getGameData(tdfId: string): Promise<GameDataTDF> {
  const { data } = await client.query({
    query: gql`
      query GameData($tdfId: String!) {
        game(where: { tdf_id: { _eq: $tdfId } }) {
          id
          tdf_id
          mission_start
          mission_length
          chomper_version
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
              game_entity_state_final: v_game_entity_state_final {
                accuracy
                accuracy_during_rapid
                ammo_boost_received
                ammo_boosts
                ammo_boosted_players
                assists
                assists_during_rapid
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
                mvp
                mvp_details
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
    variables: { tdfId },
  });

  return data.game[0];
}
