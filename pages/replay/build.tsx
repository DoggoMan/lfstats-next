import useSWR from "swr";
import NextLink from "next/link";
import { Box, Button, CircularProgress, Link, Text } from "@chakra-ui/react";
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
    `https://e8uvzp1gb7.execute-api.us-east-1.amazonaws.com/chomper-next?tdfId=${tdfId}`,
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
        <NextLink href={`/replay/${encodeURIComponent(tdfId)}`} passHref>
          <Link>
            <Button colorScheme="green">Continue</Button>
          </Link>
        </NextLink>
      </Box>
    );
  }
}

export async function getServerSideProps(context: any) {
  const tdfId = context.query.tid;
  const replayExists = await ifReplayExists(tdfId);

  if (replayExists) {
    return {
      redirect: {
        destination: `/replay/${tdfId}`,
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        tdfId: tdfId,
      },
    };
  }
}
