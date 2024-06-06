import { gql } from "@apollo/client";
import { DateTime } from "luxon";
import client from "./apollo-client";

export async function getSocialSimpleScorecardByDate(
  startDate: string,
  endDate: string,
  centers: Array<number>
) {
  const start = DateTime.fromISO(startDate).toSQL();
  const end = DateTime.fromISO(`${endDate} 23:59:59`).toSQL();
  const { data } = await client.query({
    query: gql`
      query SocialSimpleScorecards(
        $start: timestamptz!
        $end: timestamptz!
        $centers: [bigint!]
      ) {
        scorecards(
          where: {
            type: { _eq: "social" }
            game_datetime: { _gte: $start, _lte: $end }
            center_id: { _in: $centers }
          }
        ) {
          id
          player_id
          player {
            id
            ipl_id
            player_name
          }
          game {
            id
            tdf_id: tdf_key
            mission_start: game_datetime
            mission_length: game_length
          }
          position
          score
          mvp: mvp_points
          medic_hits
          accuracy
          shot_team
        }
      }
    `,
    variables: { start, end, centers },
  });

  return data.scorecards;
}

export async function getSimpleScorecardByEventId(eventId: number) {
  const { data } = await client.query({
    query: gql`
      query getSimpleScorecardByEventId {
        scorecards(where: { event_id: { _eq: $eventId } }) {
          player_id
          player {
            player_name
          }
          game {
            center_id
            duration
            game_datetime
            game_length
            game_name
          }
          position
          score
          mvp_points
          mvp_details
          hit_diff
          shot_opponent
          times_zapped
          medic_hits
          accuracy
          shot_team
        }
      }
    `,
    variables: { eventId },
  });
  return data.scorecards;
}
