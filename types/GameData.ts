import { GameTeam } from "./GameTeam";
import { GameMetaData } from "./GameMetaData";
import { SimpleScorecard } from "./SimpleScorecard";

export interface GameDataTDF extends GameMetaData {
  game_teams: GameTeam[];
}

export interface GameData extends GameMetaData {
  scorecards: SimpleScorecard[];
}
