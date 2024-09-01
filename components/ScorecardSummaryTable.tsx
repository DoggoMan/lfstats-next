import { useQuery } from "@apollo/client";
import { Spinner, Text } from "@chakra-ui/react";
import { gql } from "__generated__/gql";
import { ColDef, GridOptions } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { FullScorecard } from "types/FullScorecard";
import ChakraNextLink from "./ChakraNextLink";
import MVPModal from "./MVPModal";

interface Props {
  eventId: number;
}

const GET_EVENT_DATA = gql(`
    query EventData($id: bigint!) {
      event: events_by_pk(id: $id) {
        id
        name
        type
        is_comp
        center {
          id
          name
          short_name
        }
        games_aggregate {
          aggregate {
            max {
              game_datetime
            }
          }
        }
        games {
          id
          tdf_id: tdf_key
          mission_start: game_datetime
          mission_length: duration
          name: game_name
          winner
          scorecards {
            id
            player {
              id
              player_name
              ipl_id
            }
            game {
              id
              tdf_id: tdf_key
              mission_start: game_datetime
              mission_length: duration
              name: game_name
              winner
            }
            team
            position
            survived
            shots_hit
            shots_fired
            times_zapped
            times_missiled
            missile_hits
            nukes_activated
            nukes_detonated
            nukes_canceled
            medic_hits
            own_medic_hits
            medic_nukes
            scout_rapid
            life_boost
            ammo_boost
            lives_left
            score
            max_score
            shots_left
            penalty_count
            shot_3hit
            elim_other_team
            team_elim
            own_nuke_cancels
            shot_opponent
            shot_team
            missiled_opponent
            missiled_team
            resupplies
            rank
            bases_destroyed
            accuracy
            hit_diff
            mvp: mvp_points
            mvp_details
            sp_earned
            sp_spent
            type
            is_sub
            uptime
            resupply_downtime
            other_downtime
            shots_fired_during_rapid
            shots_hit_during_rapid
            shot_opponent_during_rapid
            shot_team_during_rapid
            times_team_missiled
          }
        }
      }
    }
  `);

export default function ScorecardSummaryTable({ eventId }: Props) {
  const { data, loading, error } = useQuery(GET_EVENT_DATA, {
    variables: { id: eventId },
  });

  const [rowData, setRowData] = useState<FullScorecard[]>();
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

  useEffect(() => {
    if (!loading && data && data.event) {
      setRowData(
        data.event.games
          .map((item) => item.scorecards)
          .flat()
          .sort((a, b) => b.mvp - a.mvp)
      );
    }
  }, [loading, data]);

  if (loading) return <Spinner />;
  if (error) return "Error...";
  if (data) {
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
}
