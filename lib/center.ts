import { gql } from "@apollo/client";
import { CenterMetaData } from "../types/CenterMetaData";
import client from "./apollo-client";

export async function getCenterMetaData(id: number): Promise<CenterMetaData> {
  const { data } = await client.query({
    query: gql`
      query CenterMetaData($id: bigint!) {
        center: centers_by_pk(id: $id) {
          id
          name
          short_name
          games_aggregate(where: { type: { _eq: "social" } }) {
            aggregate {
              max {
                game_datetime
              }
            }
          }
        }
      }
    `,
    variables: { id },
  });

  let { games_aggregate, ...center } = data.center;
  center.last_social = games_aggregate.aggregate.max.game_datetime;
  return center;
}

export async function getCenters(): Promise<CenterMetaData> {
  const { data } = await client.query({
    query: gql`
      query CenterMetaData {
        centers(
          order_by: {
            games_aggregate: { max: { game_datetime: desc_nulls_last } }
          }
        ) {
          id
          name
          short_name
          games_aggregate(where: { type: { _eq: "social" } }) {
            aggregate {
              max {
                game_datetime
              }
            }
          }
        }
      }
    `,
  });

  return data.centers.map(
    ({ games_aggregate, ...args }: { games_aggregate: any }) => ({
      last_social: games_aggregate.aggregate.max.game_datetime,
      ...args,
    })
  );
}
