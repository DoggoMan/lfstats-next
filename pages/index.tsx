import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Heading,
  Link,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { EventMetaData, getRecentEvents } from "../lib/event";

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
        <TableContainer>
          <Table variant="simple" size="sm">
            <TableCaption>Recent Events Played</TableCaption>
            <Thead>
              <Tr>
                <Th>Center</Th>
                <Th>Event</Th>
                <Th>Last Played</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.map((event) => (
                <Tr key={event.id}>
                  <Td>{event.center.name}</Td>
                  <Td>
                    <NextLink href={`/event/${event.id}`} passHref>
                      <Link color="brand">{event.name}</Link>
                    </NextLink>
                  </Td>
                  <Td>
                    {DateTime.fromISO(event.max_gamedatetime, {
                      zone: "utc",
                    }).toLocaleString(DateTime.DATETIME_SHORT)}
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
