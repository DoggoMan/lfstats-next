export enum DeacType {
  Resupply = "resupply",
  Nuke = "nuke",
  Opponent = "opponent",
  Team = "team",
  Penalty = "penalty",
}

export enum EntityType {
  Commander = "Commander",
  Heavy = "Heavy Weapons",
  Scout = "Scout",
  Ammo = "Ammo Carrier",
  Medic = "Medic",
}

export interface Center {
  id: number;
  name: string;
  region_code: number;
  site_code: number;
}

export interface Game {
  mission_type: string;
  mission_desc: string;
  mission_start: number;
  mission_length: number;
  mission_max_length: number;
  penalty: number;
  center: Center;
}
