import ReplayViewContainer from "../../components/ReplayViewContainer";
import { GameMetaData, getGameMetaData } from "../../lib/game";
import { useHasMounted } from "../../lib/helper";

interface ReplayProps {
  game: GameMetaData;
}

export default function Replay({ game }: ReplayProps) {
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;
  return <ReplayViewContainer game={game} />;
}

export async function getServerSideProps(context: any) {
  const tdfId = context.params.tid;
  const data = await getGameMetaData(tdfId);

  if (data) {
    return {
      props: {
        game: data,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/replay/build?tid=${tdfId}`,
        permanent: false,
      },
    };
  }
}
