import { gql } from "@apollo/client";
import client from "./apollo-client";
import { CenterMetaData } from "./center";

export interface EventMetaData {
  id: number;
  name: string;
  type: string;
  is_comp: boolean;
  center: CenterMetaData;
  max_gamedatetime: string;
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
