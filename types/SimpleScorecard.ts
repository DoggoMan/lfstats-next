import { GameMetaData } from "./GameMetaData";
import { Player } from "./Player";

export interface SimpleScorecard {
  id: number;
  player_id: number;
  player: Player;
  game: GameMetaData;
  position: string;
  score: number;
  mvp: number;
  medic_hits: number;
  accuracy: number;
  shot_team: number;
}
