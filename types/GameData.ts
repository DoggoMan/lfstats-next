import { GameTeam } from "./GameTeam";
import { GameMetaData } from "./GameMetaData";
import { FullScorecard } from "./FullScorecard";

export interface GameDataTDF extends GameMetaData {
  game_teams: GameTeam[];
}

export interface GameData extends GameMetaData {
  scorecards: FullScorecard[];
}
