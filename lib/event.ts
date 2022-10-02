import { gql } from "@apollo/client";
import client from "./apollo-client";
import { EventMetaData } from "../types/EventMetaData";

export async function getEventMetaData(id: number): Promise<EventMetaData> {
  const { data } = await client.query({
    query: gql`
      query EventMetaData($id: bigint!) {
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
        }
      }
    `,
    variables: { id },
  });
  return data.event;
}

export async function getRecentEvents(): Promise<EventMetaData[]> {
  const { data } = await client.query({
    query: gql`
      query getRecentEvents {
        events(
          order_by: {
            games_aggregate: { max: { game_datetime: desc_nulls_last } }
          }
          limit: 10
        ) {
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
        }
      }
    `,
  });

  return data.events.map(
    ({ games_aggregate, ...args }: { games_aggregate: any }) => ({
      max_gamedatetime: games_aggregate.aggregate.max.game_datetime,
      ...args,
    })
  );
}
