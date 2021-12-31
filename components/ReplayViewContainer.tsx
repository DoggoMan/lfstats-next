import { useQuery } from "@apollo/client";
import { Box, Spinner, Stack, Text } from "@chakra-ui/react";
import { GameMetaData } from "../lib/game";
import { getReplayData, GET_REPLAY, ReplayData } from "../lib/replay";
import ReplayView from "./ReplayView";

interface ReplayViewContainerProps {
  game: GameMetaData;
}

export default function ReplayViewContainer({
  game,
}: ReplayViewContainerProps) {
  const { data, loading, error } = useQuery(GET_REPLAY, {
    variables: { tdfId: game.tdf_id },
  });

  if (loading)
    return (
      <Box justifyContent="center" px={4} maxW="2xl" mx="auto">
        <Stack direction="row" spacing={4}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
          <Text>Fetching Replay Data...</Text>
        </Stack>
      </Box>
    );

  if (data) return <ReplayView replay={data.game[0]} />;

  return <div>{error}</div>;
}
