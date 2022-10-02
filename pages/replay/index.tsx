import {
  Box,
  Link,
  ListItem,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DateTime } from "luxon";
import NextLink from "next/link";
import ChakraNextLink from "../../components/ChakraNextLink";
import { getRecentGames } from "../../lib/game";
import { GameMetaData } from "../../types/GameMetaData";

interface Props {
  games: GameMetaData[];
}

const defaultColumns: ColumnDef<GameMetaData>[] = [
  {
    header: "Center",
    accessorFn: (row) => row.center?.name,
  },
  {
    header: "Game Start",
    accessorFn: (row) => row.mission_start,
    cell: (props) => (
      <ChakraNextLink href={`/game/${props.row.original.id}`}>
        {DateTime.fromISO(props.getValue() as string).toLocaleString(
          DateTime.DATETIME_SHORT
        )}
      </ChakraNextLink>
    ),
  },
  {
    header: "Replay",
    accessorFn: (row) => row.tdf_id,
    cell: (props) => (
      <ChakraNextLink href={`/replay/${props.row.original.tdf_id}`}>
        {props.getValue() as string}
      </ChakraNextLink>
    ),
  },
];

export default function ReplayList({ games }: Props) {
  const table = useReactTable({
    data: games,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box
      maxW="2xl"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="base"
      p={2}
      my={4}
      borderColor={`blue.400`}
      mx="auto"
    >
      <Table size="sm">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <Tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Tfoot>
      </Table>
    </Box>
  );
}

export async function getServerSideProps() {
  const data = await getRecentGames();

  return {
    props: {
      games: data,
    },
  };
}
