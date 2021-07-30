import Head from "next/head";
import useSWR from "swr";
import { CircularProgress } from "@chakra-ui/react";
import Router from "next/router";
import router from "next/router";

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
  const { data, error } = useSWR(`/api/chomper/${tdfId}`, fetcher, {
    shouldRetryOnError: false,
  });

  if (error) return <div>Oh no, it exploded. Sorry.</div>;

  if (!data) {
    return (
      <>
        <div>
          Looks like we haven&apos;t built that game yet. Give me a second...
        </div>
        <CircularProgress isIndeterminate color="green.300" />
      </>
    );
  } else if (data) {
    console.log(`/replay/${tdfId}`);
    router.push(`/replay/${tdfId}`);
    return <div>Build complete, redirecting...</div>;
  }
}

export async function getServerSideProps(context: any) {
  const tdfId = context.query.tid;

  return {
    props: {
      tdfId: tdfId,
    },
  };
}
