import Head from "next/head";
import {
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import ChakraNextLink from "../components/ChakraNextLink";
import { getRecentEvents } from "../lib/event";
import { EventMetaData } from "../types/EventMetaData";

interface Props {
  events: EventMetaData[];
}

export default function Homepage({ events }: Props) {
  return (
    <div>
      <Head>
        <title>LFStats Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="base"
        p={2}
        my={4}
        borderColor={`blue.400`}
        mx="auto"
      >
        <TableContainer>
          <Table variant="simple" size="sm">
            <TableCaption>Recent Socials</TableCaption>
            <Thead>
              <Tr>
                <Th>Center</Th>
                <Th>Event</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.map((event) => (
                <Tr key={event.id}>
                  <Td>{event.center.name}</Td>
                  <Td>
                    <ChakraNextLink
                      href={`/socials/${event.id}`}
                      color="blue.400"
                    >
                      {event.name}
                    </ChakraNextLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  const eventData = await getRecentEvents();

  return {
    props: {
      events: eventData,
    },
  };
}
