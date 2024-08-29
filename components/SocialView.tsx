import { Divider, Heading, Spinner, Text } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { EventData } from "../types/EventData";
import MVPModal from "./MVPModal";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { ColDef, GridOptions } from "ag-grid-community";
import { FullScorecard } from "types/FullScorecard";
import ChakraNextLink from "./ChakraNextLink";
import { EventMetaData } from "types/EventMetaData";
import ScorecardSummaryTable from "components/ScorecardSummaryTable";

interface Props {
  event: EventMetaData;
}

interface EventDataQuery {
  event: EventData;
}

const GET_EVENT_DATA = gql`
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
`;

export default function SocialView({ event }: Props) {
  const { data, loading, error } = useQuery<EventDataQuery>(GET_EVENT_DATA, {
    variables: { id: event.id },
  });

  if (loading)
    return (
      <>
        <Heading>
          {event.center.name} - {event.name}
        </Heading>
        <Spinner />
      </>
    );

  if (error)
    return (
      <>
        <Heading>
          {event.center.name} - {event.name}
        </Heading>
        Error...
      </>
    );

  if (data) {
    return (
      <>
        <Heading>
          {event.center.name} - {event.name}
        </Heading>
        <Divider />
        <Heading size="lg">Overall</Heading>
        <ScorecardSummaryTable games={data.event.games} />
      </>
    );
  }
}
