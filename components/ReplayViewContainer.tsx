import { useQuery } from "@apollo/client";
import { Box, Spinner, Stack, Text } from "@chakra-ui/react";
import { GameMetaData } from "../types/GameMetaData";
import { GET_REPLAY } from "../lib/replay";
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
            emptyColor="blue.200"
            color="blue.500"
            size="lg"
          />
          <Text>Fetching Replay Data...</Text>
        </Stack>
      </Box>
    );

  if (error) return <div>{error.message}</div>;

  return <ReplayView replay={data.game[0]} />;
}
