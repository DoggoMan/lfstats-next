import { getGameData, GameData } from "../../lib/game";
import GameView from "../../components/GameView";

interface Props {
  game: GameData;
}

const Game = ({ game }: Props) => <GameView game={game} />;

export async function getServerSideProps(context: any) {
  const gameId = context.params.gid;
  const data = await getGameData(gameId);

  return {
    props: {
      game: data,
    },
  };
}

export default Game;
