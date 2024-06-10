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
    `,
    variables: { id },
  });
  return data.event;
}
