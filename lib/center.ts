import { gql } from "@apollo/client";
import { CenterMetaData } from "../types/CenterMetaData";
import client from "./apollo-client";

export async function getCenterMetaData(id: number): Promise<CenterMetaData> {
  const { data } = await client.query({
    query: gql`
      query CenterMetaData($id: bigint!) {
        center: center_by_pk(id: $id) {
          id
          name
          region_code
          short_name
          site_code
          games_aggregate(
            where: { game_tags: { tag: { tag_name: { _eq: "Social" } } } }
          ) {
            aggregate {
              max {
                mission_start
              }
            }
          }
        }
      }
    `,
    variables: { id },
  });

  let { games_aggregate, ...center } = data.center;
  center.last_social = games_aggregate.aggregate.max.mission_start;
  return center;
}

export async function getCenters(): Promise<CenterMetaData> {
  const { data } = await client.query({
    query: gql`
      query CenterMetaData {
        center(
          order_by: {
            games_aggregate: { max: { mission_start: desc_nulls_last } }
          }
          limit: 5
        ) {
          id
          name
          region_code
          short_name
          site_code
          games_aggregate(
            where: { game_tags: { tag: { tag_name: { _eq: "Social" } } } }
          ) {
            aggregate {
              max {
                mission_start
              }
            }
          }
        }
      }
    `,
  });

  return data.center.map(
    ({ games_aggregate, ...args }: { games_aggregate: any }) => ({
      last_social: games_aggregate.aggregate.max.mission_start,
      ...args,
    })
  );
}
