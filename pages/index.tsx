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
import { DateTime } from "luxon";
import { getCenters } from "../lib/center";
import { CenterMetaData } from "../types/CenterMetaData";

interface Props {
  centers: CenterMetaData[];
}

export default function Homepage({ centers }: Props) {
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
                <Th>Last Played</Th>
              </Tr>
            </Thead>
            <Tbody>
              {centers.slice(0, 10).map((center) => (
                <Tr key={center.id}>
                  <Td>{center.name}</Td>
                  <Td>
                    <ChakraNextLink
                      href={`/socials/${center.id}`}
                      color="blue.400"
                    >
                      {center.last_social &&
                        DateTime.fromISO(center.last_social, {
                          zone: "utc",
                        }).toLocaleString(DateTime.DATE_SHORT)}
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
  const centerData = await getCenters();

  return {
    props: {
      centers: centerData,
    },
  };
}
