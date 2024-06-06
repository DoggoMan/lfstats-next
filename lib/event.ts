import { gql } from "@apollo/client";
import client from "./apollo-client";
import { EventMetaData } from "../types/EventMetaData";
import { EventData } from "../types/EventData";

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

export async function getEventData(id: number): Promise<EventData> {
  const { data } = await client.query({
    query: gql`
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
            scorecards {
              id
              player {
                id
                player_name
                ipl_id
              }
              position
              score
              mvp: mvp_points
              mvp_details
              shot_opponent
              times_zapped
              medic_hits
              accuracy
              shot_team
              hit_diff
            }
          }
        }
      }
    `,
    variables: { id },
  });
  return data.event;
}
