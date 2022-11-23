import { GameEntityState } from "./GameEntityState";

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
  game_entity_state_final: GameEntityState;
}
