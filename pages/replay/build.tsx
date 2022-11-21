import useSWR from "swr";
import { Box, Button, CircularProgress, Text } from "@chakra-ui/react";
import ChakraNextLink from "../../components/ChakraNextLink";
import { ifReplayExists } from "../../lib/replay";

interface Props {
  tdfId: string;
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return res.json();
};

export default function Build({ tdfId }: Props) {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_CHOMPER_URI}?tdfId=${tdfId}`,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );

  if (error) return <div>Oh no, it exploded. Sorry.</div>;

  if (!data) {
    return (
      <Box justifyContent="center" px={4} maxW="2xl" mx="auto">
        <Text>
          Looks like we haven&apos;t built that game yet. Give me a second...
        </Text>
        <CircularProgress isIndeterminate color="green.300" />
      </Box>
    );
  } else if (data) {
    return (
      <Box justifyContent="center" px={4} maxW="2xl" mx="auto">
        <div>Build complete!</div>
        <ChakraNextLink href={`/game/${encodeURIComponent(tdfId)}`}>
          <Button colorScheme="green">Game</Button>
        </ChakraNextLink>
        <ChakraNextLink href={`/replay/${encodeURIComponent(tdfId)}`}>
          <Button colorScheme="green">Replay</Button>
        </ChakraNextLink>
      </Box>
    );
  }
}

export async function getServerSideProps(context: any) {
  const tdfId = context.query.tid;
  const force = context.query.force || false;
  if (force !== "true") {
    const replayExists = await ifReplayExists(tdfId);
    if (replayExists) {
      return {
        redirect: {
          destination: `/replay/${tdfId}`,
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      tdfId: tdfId,
    },
  };
}
