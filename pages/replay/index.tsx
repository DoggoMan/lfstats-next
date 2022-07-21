import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
import NextLink from "next/link";
import { GameMetaData, getRecentGames } from "../../lib/game";

interface Props {
  games: GameMetaData[];
}

export default function ReplayList({ games }: Props) {
  return (
    <UnorderedList>
      {games.map((game) => (
        <ListItem key={game.id}>
          <NextLink href={`/game/${game.id}`} passHref>
            <Link color="brand">
              {game.center.name} - {game.mission_start}
            </Link>
          </NextLink>
          {" - "}
          <NextLink href={`/replay/${game.tdf_id}`} passHref>
            <Link color="brand">Replay</Link>
          </NextLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export async function getServerSideProps() {
  const data = await getRecentGames();

  return {
    props: {
      games: data,
    },
  };
}
