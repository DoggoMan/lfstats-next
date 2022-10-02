export interface GameActionActor {
  name: string;
  player_id: number;
  team: {
    ui_color: string;
  };
}
