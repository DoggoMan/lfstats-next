import { gql } from "@apollo/client";
import client from "./apollo-client";

export interface GameData {
  id: number;
  center: { name: string };
  game_teams: {
    color_desc: string;
    color_enum: number;
    ui_color: string;
    team_desc: string;
    team_index: number;
    score: number;
    game_entities: {
      battlesuit: string;
      category: number;
      end_code: any;
      end_time: any;
      entity_level: any;
      entity_type: any;
      entity_desc: any;
      id: any;
      ipl_id: any;
      player_id: any;
      position: any;
      start_time: any;
      score: any;
      player: {
        current_alias: string;
        ipl_id: any;
      };
      game_entity_states(where: { is_final: { _eq: true } }): {
        accuracy: any;
        accuracy_during_rapid: any;
        ammo_boost_received: any;
        ammo_boosts: any;
        ammo_boosted_players: any;
        assists: any;
        assists_during_rapid: any;
        cancel_opponent_nuke: any;
        cancel_team_nuke: any;
        current_hp: any;
        cancel_team_nuke_by_resupply: any;
        deac_3hit: any;
        deac_3hit_during_rapid: any;
        deac_opponent_during_rapid: any;
        deac_opponent: any;
        deac_team: any;
        destroy_base: any;
        deac_team_during_rapid: any;
        entity_id: any;
        hit_diff: any;
        hit_diff_during_rapid: any;
        id: any;
        is_active: any;
        is_eliminated: any;
        is_final: any;
        is_nuking: any;
        is_rapid: any;
        last_deac_time: any;
        last_deac_type: any;
        life_boost_received: any;
        life_boosted_players: any;
        life_boosts: any;
        lives: any;
        medic_hits: any;
        medic_hits_during_rapid: any;
        miss_base: any;
        missile_base: any;
        missile_opponent: any;
        missile_team: any;
        missiles_left: any;
        nuke_downtime: any;
        nuke_medic_hits: any;
        nukes_activated: any;
        nukes_detonated: any;
        opp_deac_downtime: any;
        own_medic_hits: any;
        own_nuke_canceled_by_game_end: any;
        own_nuke_canceled_by_nuke: any;
        own_nuke_canceled_by_opponent: any;
        own_nuke_canceled_by_penalty: any;
        own_nuke_canceled_by_resupply: any;
        own_nuke_canceled_by_team: any;
        penalties: any;
        penalty_downtime: any;
        rapid_fires: any;
        resupply_downtime: any;
        resupply_lives: any;
        resupply_shots: any;
        score: any;
        self_deac: any;
        self_deac_during_rapid: any;
        self_hit: any;
        self_hit_during_rapid: any;
        self_missile: any;
        self_missile_during_rapid: any;
        self_resupply_lives: any;
        self_resupply_shots: any;
        shot_3hit: any;
        shot_3hit_during_rapid: any;
        shot_base: any;
        shot_opponent: any;
        shot_opponent_during_rapid: any;
        shot_team: any;
        shot_team_during_rapid: any;
        shots: any;
        shots_fired: any;
        shots_fired_during_rapid: any;
        shots_hit: any;
        shots_hit_during_rapid: any;
        sp_earned: any;
        sp_spent: any;
        state_time: any;
        team_deac_downtime: any;
        times_missiled: any;
        uptime: any;
      }[];
    }[];
  }[];
}

export async function getGameData(id: number): Promise<GameData> {
  const { data } = await client.query({
    query: gql`
      query Game($id: bigint!) {
        game: game_by_pk(id: $id) {
          id
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
              game_entity_states(where: { is_final: { _eq: true } }) {
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
    variables: { id },
  });

  return data.game;
}
