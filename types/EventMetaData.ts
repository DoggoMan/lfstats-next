import { CenterMetaData } from "./CenterMetaData";

export interface EventMetaData {
  id: number;
  name: string;
  type: string;
  is_comp: boolean;
  center: CenterMetaData;
  max_gamedatetime?: string;
}
