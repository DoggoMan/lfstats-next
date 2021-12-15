import type { AppProps } from "next/app";
import NextLink from "next/link";
import {
  Box,
  Center,
  ChakraProvider,
  extendTheme,
  Heading,
  IconButton,
  Link,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import NextNProgress from "nextjs-progressbar";

const theme = extendTheme({
  colors: {
    brand: "#1474ab",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box bgColor={"brand"}>
        <Center h="56px">
          <NextLink href={"/"}>
            <IconButton
              aria-label="Home"
              icon={<IoHome />}
              variant="link"
              color="white"
              size="lg"
            />
          </NextLink>
          <Spacer />
        </Center>
      </Box>
      <NextNProgress color="orange" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
