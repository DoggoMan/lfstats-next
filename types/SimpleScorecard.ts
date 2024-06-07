import { GameMetaData } from "./GameMetaData";
import { MVPData } from "./MVPData";
import { Player } from "./Player";

export interface SimpleScorecardTDF {
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

export interface SimpleScorecard {
  id: number;
  player: Player;
  game?: GameMetaData;
  position: string;
  score: number;
  mvp: number;
  mvp_details: MVPData;
  shot_opponent: number;
  times_zapped: number;
  medic_hits: number;
  accuracy: number;
  shot_team: number;
  hit_diff: number;
}
