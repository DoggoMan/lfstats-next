import { EventMetaData } from "./EventMetaData";
import { GameData } from "./GameData";

export interface EventData extends EventMetaData {
  games?: GameData[];
}
