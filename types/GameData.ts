import { GameTeam } from "./GameTeam";
import { GameMetaData } from "./GameMetaData";

export interface GameData extends GameMetaData {
  game_teams: GameTeam[];
}
