import Head from "next/head";
import NextLink from "next/link";
import { Box, Heading, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { getRecentGames, GameMetaData } from "../lib/game";

interface Props {
  games: GameMetaData[];
}

export default function Homepage({ games }: Props) {
  return (
    <div>
      <Head>
        <title>LFStats Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box justifyContent="center" paddingTop="70" px={4}>
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="base"
          p={2}
          my={4}
          borderColor={`cyan.400`}
          mx="auto"
        >
          <Heading paddingBottom="30" color={`cyan.500`}>
            LFStats Next
          </Heading>
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
        </Box>
      </Box>
    </div>
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
