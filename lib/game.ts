import { gql } from "@apollo/client";
import client from "./apollo-client";

export interface GameEntityState {
  accuracy: number;
  accuracy_during_rapid: number;
  ammo_boost_received: number;
  ammo_boosts: number;
  ammo_boosted_players: number;
  assists: number;
  assists_during_rapid: number;
  cancel_opponent_nuke: number;
  cancel_team_nuke: number;
  current_hp: number;
  cancel_team_nuke_by_resupply: number;
  deac_3hit: number;
  deac_3hit_during_rapid: number;
  deac_opponent_during_rapid: number;
  deac_opponent: number;
  deac_team: number;
  destroy_base: number;
  deac_team_during_rapid: number;
  entity_id: number;
  hit_diff: number;
  hit_diff_during_rapid: number;
  id: string;
  is_active: boolean;
  is_eliminated: boolean;
  is_final: boolean;
  is_nuking: boolean;
  is_rapid: boolean;
  last_deac_time: number | null;
  last_deac_type: string | null;
  life_boost_received: number;
  life_boosted_players: number;
  life_boosts: number;
  lives: number;
  medic_hits: number;
  medic_hits_during_rapid: number;
  miss_base: number;
  missile_base: number;
  missile_opponent: number;
  missile_team: number;
  missiles_left: number;
  nuke_downtime: number;
  nuke_medic_hits: number;
  nukes_activated: number;
  nukes_detonated: number;
  opp_deac_downtime: number;
  own_medic_hits: number;
  own_nuke_canceled_by_game_end: number;
  own_nuke_canceled_by_nuke: number;
  own_nuke_canceled_by_opponent: number;
  own_nuke_canceled_by_penalty: number;
  own_nuke_canceled_by_resupply: number;
  own_nuke_canceled_by_team: number;
  penalties: number;
  penalty_downtime: number;
  rapid_fires: number;
  resupply_downtime: number;
  resupply_lives: number;
  resupply_shots: number;
  score: number;
  self_deac: number;
  self_deac_during_rapid: number;
  self_hit: number;
  self_hit_during_rapid: number;
  self_missile: number;
  self_missile_during_rapid: number;
  self_resupply_lives: number;
  self_resupply_shots: number;
  shot_3hit: number;
  shot_3hit_during_rapid: number;
  shot_base: number;
  shot_opponent: number;
  shot_opponent_during_rapid: number;
  shot_team: number;
  shot_team_during_rapid: number;
  shots: number;
  shots_fired: number;
  shots_fired_during_rapid: number;
  shots_hit: number;
  shots_hit_during_rapid: number;
  sp_earned: number;
  sp_spent: number;
  state_time: number;
  team_deac_downtime: number;
  times_missiled: number;
  uptime: number;
  mvp: number;
  mvp_details: JSON;
}

export interface GameEntity {
  battlesuit: string;
  category: number;
  end_code: string;
  end_time: number;
  entity_level: number;
  entity_type: string;
  entity_desc: string;
  id: number;
  ipl_id: string;
  player_id: number;
  position: string;
  start_time: number;
  score: number;
  player: {
    current_alias: string;
    ipl_id: string;
  };
  game_entity_states?: GameEntityState[];
  game_entity_state_final?: GameEntityState;
}

export interface GameTeam {
  color_desc: string;
  color_enum: number;
  ui_color: string;
  team_desc: string;
  team_index: number;
  score: number;
  game_entities: GameEntity[];
}

export interface GameMetaData {
  id: number;
  tdf_id: string;
  mission_start: string;
  mission_length: number;
  center: { name: string };
}

export interface GameActionActor {
  name: string;
  player_id: number;
  team: {
    ui_color: string;
  };
}

export interface GameAction {
  action_text: string;
  action_time: number;
  action_type: string;
  actor: GameActionActor | null;
  target: GameActionActor | null;
}

export interface GameData extends GameMetaData {
  game_teams: GameTeam[];
}

export async function getRecentGames(): Promise<GameMetaData[]> {
  const { data } = await client.query({
    query: gql`
      query RecentGames {
        game(order_by: { mission_start: desc }, limit: 10) {
          id
          tdf_id
          mission_start
          mission_length
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

export async function getGameData(id: number): Promise<GameData> {
  const { data } = await client.query({
    query: gql`
      query Game($id: bigint!) {
        game: game_by_pk(id: $id) {
          id
          tdf_id
          mission_start
          mission_length
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
