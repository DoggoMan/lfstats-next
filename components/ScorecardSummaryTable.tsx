import { Heading, Text } from "@chakra-ui/react";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { FullScorecard } from "types/FullScorecard";
import ChakraNextLink from "./ChakraNextLink";
import MVPModal from "./MVPModal";
import { ColDef, GridOptions } from "ag-grid-community";
import { GameData } from "types/GameData";

interface Props {
  games: GameData[];
}

export default function ScorecardSummaryTable({ games }: Props) {
  const [rowData, setRowData] = useState<FullScorecard[]>(
    games
      .map((item) => item.scorecards)
      .flat()
      .sort((a, b) => b.mvp - a.mvp)
  );
  const [colDefs, setColDefs] = useState<ColDef<FullScorecard>[]>([
    {
      field: "player.player_name",
      filter: true,
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
      filter: true,
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
      filter: true,
      flex: 2,
      cellRenderer: (props: { value: string; data: FullScorecard }) => {
        return <Text color={props.data.team}>{props.value}</Text>;
      },
    },
    { field: "score", flex: 1 },
    {
      field: "mvp",
      headerName: "MVP",
      cellRenderer: (props: { value: number; data: FullScorecard }) => {
        return (
          <MVPModal mvp={props.value} mvpDetails={props.data.mvp_details} />
        );
      },
      flex: 1,
      sort: "desc",
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

  const gridOptions: GridOptions = {
    sortingOrder: ["desc", "asc", null],
  };

  return (
    <div className="ag-theme-quartz">
      <AgGridReact
        gridOptions={gridOptions}
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={false}
        domLayout="autoHeight"
      />
    </div>
  );
}
