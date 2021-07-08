import Head from "next/head";
import NextLink from "next/link";
import { Box, Heading, Link, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Homepage() {
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
            <ListItem>
              <NextLink href={"/game/1"}>
                <Link>View Example Game</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href={"/replay/1"}>
                <Link>View Example Replay</Link>
              </NextLink>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </div>
  );
}
