import { Alert, AlertIcon, Button } from "@chakra-ui/react";
import ChakraNextLink from "./ChakraNextLink";
import useSWR from "swr";

interface ChompAlertProps {
  tdfId: string;
  gameChomperVersion?: string;
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

const ChompAlert = ({ tdfId, gameChomperVersion }: ChompAlertProps) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_CHOMPER_VERSION_URI}?tdfId=${tdfId}`,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        Chomper version check failed
      </Alert>
    );
  if (!data) {
    return <></>;
  } else {
    if (gameChomperVersion != data?.chomperVersion)
      return (
        <Alert status="warning" flexDirection="column" alignItems="center">
          <AlertIcon />
          This game was chomped with chomper version {gameChomperVersion}.
          Current version is {data.chomperVersion}. Refresh the page if you see
          this message after chomping.
          <ChakraNextLink
            href={`/replay/build?tid=${encodeURIComponent(tdfId)}&force=true`}
          >
            <Button size="xs" colorScheme="green">
              Chomp Now
            </Button>
          </ChakraNextLink>
        </Alert>
      );
    else return <></>;
  }
};

export default ChompAlert;
