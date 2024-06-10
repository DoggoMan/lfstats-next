import {
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { EventData } from "../types/EventData";
import MVPModal from "./MVPModal";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { ColDef } from "ag-grid-community";
import { FullScorecard } from "../types/FullScorecard";
import ChakraNextLink from "./ChakraNextLink";

interface Props {
  event: EventData;
}

const SocialView = ({ event }: Props) => {
  let scorecards = event.games
    .map((item) => item.scorecards)
    .flat()
    .sort((a, b) => b.mvp - a.mvp);

  const [rowData, setRowData] = useState<FullScorecard[]>(scorecards);
  const [colDefs, setColDefs] = useState<ColDef<FullScorecard>[]>([
    {
      field: "player.player_name",
      headerName: "Player Name",
      flex: 2,
      cellRenderer: (props: { value: number; data: FullScorecard }) => {
        return (
          <ChakraNextLink
            href={`/players/${props.data.player.id}`}
            color={props.data.team}
          >
            {props.value}
          </ChakraNextLink>
        );
      },
    },
    {
      field: "game.name",
      flex: 2,
      cellRenderer: (props: { value: string; data: FullScorecard }) => {
        return (
          <ChakraNextLink
            href={`/games/${props.data.game.id}`}
            color={props.data.game.winner}
          >
            {props.value}
          </ChakraNextLink>
        );
      },
    },
    {
      field: "position",
      flex: 2,
      cellRenderer: (props: { value: string; data: FullScorecard }) => {
        return <Text color={props.data.team}>{props.value}</Text>;
      },
    },
    { field: "score", flex: 1 },
    {
      field: "mvp",
      headerName: "MVP",
      valueFormatter: (p) => p.value.toFixed(2),
      flex: 1,
    },
    {
      field: "hit_diff",
      headerName: "Hit Diff",
      valueFormatter: (p) => p.value.toFixed(2),
      flex: 1,
    },
    { field: "medic_hits", headerName: "Medic Hits", flex: 1 },
    {
      field: "accuracy",
      valueFormatter: (p) => (p.value * 100).toFixed(2) + " %",
      flex: 1,
    },
    { field: "shot_team", headerName: "Shot Team", flex: 1 },
  ]);

  return (
    <>
      <Heading>
        {event.center.name} - {event.name}
      </Heading>
      <div className="ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={false}
          domLayout="autoHeight"
        />
      </div>
    </>
  );
};

export default SocialView;
