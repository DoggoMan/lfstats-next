import { GameEntity } from "./GameEntity";

export interface GameTeam {
  color_desc: string;
  color_enum: number;
  ui_color: string;
  team_desc: string;
  team_index: number;
  score: number;
  game_entities: GameEntity[];
}
