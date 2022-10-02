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
