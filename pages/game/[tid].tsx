import { getGameData } from "../../lib/game";
import { GameData } from "../../types/GameData";
import GameView from "../../components/GameView";

interface Props {
  game: GameData;
}

const Game = ({ game }: Props) => <GameView game={game} />;

export async function getServerSideProps(context: any) {
  const tdfId = context.params.tid;
  const data = await getGameData(tdfId);

  return {
    props: {
      game: data,
    },
  };
}

export default Game;
