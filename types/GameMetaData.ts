import { CenterMetaData } from "./CenterMetaData";

export interface GameMetaData {
  id: number;
  tdf_id: string;
  mission_start: string;
  mission_length: number;
  name?: string;
  chomper_version?: string;
  center?: CenterMetaData;
}
