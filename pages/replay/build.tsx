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
  return res.json();
};

export default function Build({ tdfId }: Props) {
  const { data, error } = useSWR(`/api/chomper/${tdfId}`, fetcher);

  if (!data) {
    return (
      <>
        <div>
          Looks like we haven&apos;t built that game yet. Give me a second...
        </div>
        <CircularProgress isIndeterminate color="green.300" />
      </>
    );
  }
  if (error) {
    return <div>Oh no, it exploded. Sorry.</div>;
  }
  if (data) {
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
