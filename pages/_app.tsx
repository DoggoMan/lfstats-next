import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";

const theme = extendTheme({
  colors: {
    brand: "#1474ab",
  },
});

function LFStats({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default LFStats;
