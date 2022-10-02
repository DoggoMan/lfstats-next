import { GameActionActor } from "./GameActionActor";

export interface GameAction {
  action_text: string;
  action_time: number;
  action_type: string;
  actor: GameActionActor | null;
  target: GameActionActor | null;
}
