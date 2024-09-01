/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  deac_type: { input: any; output: any; }
  float8: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "center" */
export type Center = {
  __typename?: 'center';
  /** An array relationship */
  games: Array<Game>;
  /** An aggregate relationship */
  games_aggregate: Game_Aggregate;
  id: Scalars['bigint']['output'];
  name?: Maybe<Scalars['String']['output']>;
  region_code: Scalars['String']['output'];
  short_name?: Maybe<Scalars['String']['output']>;
  site_code: Scalars['String']['output'];
};


/** columns and relationships of "center" */
export type CenterGamesArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


/** columns and relationships of "center" */
export type CenterGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};

/** aggregated selection of "center" */
export type Center_Aggregate = {
  __typename?: 'center_aggregate';
  aggregate?: Maybe<Center_Aggregate_Fields>;
  nodes: Array<Center>;
};

/** aggregate fields of "center" */
export type Center_Aggregate_Fields = {
  __typename?: 'center_aggregate_fields';
  avg?: Maybe<Center_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Center_Max_Fields>;
  min?: Maybe<Center_Min_Fields>;
  stddev?: Maybe<Center_Stddev_Fields>;
  stddev_pop?: Maybe<Center_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Center_Stddev_Samp_Fields>;
  sum?: Maybe<Center_Sum_Fields>;
  var_pop?: Maybe<Center_Var_Pop_Fields>;
  var_samp?: Maybe<Center_Var_Samp_Fields>;
  variance?: Maybe<Center_Variance_Fields>;
};


/** aggregate fields of "center" */
export type Center_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Center_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Center_Avg_Fields = {
  __typename?: 'center_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "center". All fields are combined with a logical 'AND'. */
export type Center_Bool_Exp = {
  _and?: InputMaybe<Array<Center_Bool_Exp>>;
  _not?: InputMaybe<Center_Bool_Exp>;
  _or?: InputMaybe<Array<Center_Bool_Exp>>;
  games?: InputMaybe<Game_Bool_Exp>;
  games_aggregate?: InputMaybe<Game_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  region_code?: InputMaybe<String_Comparison_Exp>;
  short_name?: InputMaybe<String_Comparison_Exp>;
  site_code?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Center_Max_Fields = {
  __typename?: 'center_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region_code?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  site_code?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Center_Min_Fields = {
  __typename?: 'center_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region_code?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  site_code?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "center". */
export type Center_Order_By = {
  games_aggregate?: InputMaybe<Game_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  region_code?: InputMaybe<Order_By>;
  short_name?: InputMaybe<Order_By>;
  site_code?: InputMaybe<Order_By>;
};

/** select columns of table "center" */
export enum Center_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RegionCode = 'region_code',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  SiteCode = 'site_code'
}

/** aggregate stddev on columns */
export type Center_Stddev_Fields = {
  __typename?: 'center_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Center_Stddev_Pop_Fields = {
  __typename?: 'center_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Center_Stddev_Samp_Fields = {
  __typename?: 'center_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "center" */
export type Center_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Center_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Center_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region_code?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
  site_code?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Center_Sum_Fields = {
  __typename?: 'center_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Center_Var_Pop_Fields = {
  __typename?: 'center_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Center_Var_Samp_Fields = {
  __typename?: 'center_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Center_Variance_Fields = {
  __typename?: 'center_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "centers" */
export type Centers = {
  __typename?: 'centers';
  created?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  events: Array<Events>;
  /** An aggregate relationship */
  events_aggregate: Events_Aggregate;
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['bigint']['output'];
  ipl_id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  scorecards: Array<Scorecards>;
  short_name: Scalars['String']['output'];
};


/** columns and relationships of "centers" */
export type CentersEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


/** columns and relationships of "centers" */
export type CentersEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


/** columns and relationships of "centers" */
export type CentersGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "centers" */
export type CentersGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "centers" */
export type CentersScorecardsArgs = {
  distinct_on?: InputMaybe<Array<Scorecards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scorecards_Order_By>>;
  where?: InputMaybe<Scorecards_Bool_Exp>;
};

/** aggregated selection of "centers" */
export type Centers_Aggregate = {
  __typename?: 'centers_aggregate';
  aggregate?: Maybe<Centers_Aggregate_Fields>;
  nodes: Array<Centers>;
};

/** aggregate fields of "centers" */
export type Centers_Aggregate_Fields = {
  __typename?: 'centers_aggregate_fields';
  avg?: Maybe<Centers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Centers_Max_Fields>;
  min?: Maybe<Centers_Min_Fields>;
  stddev?: Maybe<Centers_Stddev_Fields>;
  stddev_pop?: Maybe<Centers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Centers_Stddev_Samp_Fields>;
  sum?: Maybe<Centers_Sum_Fields>;
  var_pop?: Maybe<Centers_Var_Pop_Fields>;
  var_samp?: Maybe<Centers_Var_Samp_Fields>;
  variance?: Maybe<Centers_Variance_Fields>;
};


/** aggregate fields of "centers" */
export type Centers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Centers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Centers_Avg_Fields = {
  __typename?: 'centers_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "centers". All fields are combined with a logical 'AND'. */
export type Centers_Bool_Exp = {
  _and?: InputMaybe<Array<Centers_Bool_Exp>>;
  _not?: InputMaybe<Centers_Bool_Exp>;
  _or?: InputMaybe<Array<Centers_Bool_Exp>>;
  created?: InputMaybe<Timestamptz_Comparison_Exp>;
  events?: InputMaybe<Events_Bool_Exp>;
  events_aggregate?: InputMaybe<Events_Aggregate_Bool_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  games_aggregate?: InputMaybe<Games_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  ipl_id?: InputMaybe<String_Comparison_Exp>;
  modified?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  scorecards?: InputMaybe<Scorecards_Bool_Exp>;
  short_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Centers_Max_Fields = {
  __typename?: 'centers_max_fields';
  created?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Centers_Min_Fields = {
  __typename?: 'centers_min_fields';
  created?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "centers". */
export type Centers_Order_By = {
  created?: InputMaybe<Order_By>;
  events_aggregate?: InputMaybe<Events_Aggregate_Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  scorecards_aggregate?: InputMaybe<Scorecards_Aggregate_Order_By>;
  short_name?: InputMaybe<Order_By>;
};

/** select columns of table "centers" */
export enum Centers_Select_Column {
  /** column name */
  Created = 'created',
  /** column name */
  Id = 'id',
  /** column name */
  IplId = 'ipl_id',
  /** column name */
  Modified = 'modified',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'short_name'
}

/** aggregate stddev on columns */
export type Centers_Stddev_Fields = {
  __typename?: 'centers_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Centers_Stddev_Pop_Fields = {
  __typename?: 'centers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Centers_Stddev_Samp_Fields = {
  __typename?: 'centers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "centers" */
export type Centers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Centers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Centers_Stream_Cursor_Value_Input = {
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ipl_id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Centers_Sum_Fields = {
  __typename?: 'centers_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Centers_Var_Pop_Fields = {
  __typename?: 'centers_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Centers_Var_Samp_Fields = {
  __typename?: 'centers_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Centers_Variance_Fields = {
  __typename?: 'centers_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "deac_type". All fields are combined with logical 'AND'. */
export type Deac_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['deac_type']['input']>;
  _gt?: InputMaybe<Scalars['deac_type']['input']>;
  _gte?: InputMaybe<Scalars['deac_type']['input']>;
  _in?: InputMaybe<Array<Scalars['deac_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['deac_type']['input']>;
  _lte?: InputMaybe<Scalars['deac_type']['input']>;
  _neq?: InputMaybe<Scalars['deac_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['deac_type']['input']>>;
};

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
  /** An object relationship */
  center: Centers;
  center_id: Scalars['bigint']['output'];
  challonge_id?: Maybe<Scalars['bigint']['output']>;
  challonge_link?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enable_allstar: Scalars['Boolean']['output'];
  enable_leaderboards: Scalars['Boolean']['output'];
  enable_player_stats: Scalars['Boolean']['output'];
  enable_top_players: Scalars['Boolean']['output'];
  /** An array relationship */
  event_game_results: Array<Game_Results>;
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  id: Scalars['bigint']['output'];
  is_comp: Scalars['Boolean']['output'];
  modified?: Maybe<Scalars['timestamp']['output']>;
  name: Scalars['String']['output'];
  penalty_default_type?: Maybe<Scalars['String']['output']>;
  penalty_mvp_value?: Maybe<Scalars['float8']['output']>;
  penalty_point_value?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  scorecards: Array<Scorecards>;
  scoring?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


/** columns and relationships of "events" */
export type EventsEvent_Game_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Game_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Results_Order_By>>;
  where?: InputMaybe<Game_Results_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


/** columns and relationships of "events" */
export type EventsScorecardsArgs = {
  distinct_on?: InputMaybe<Array<Scorecards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scorecards_Order_By>>;
  where?: InputMaybe<Scorecards_Bool_Exp>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

export type Events_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Events_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Events_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Events_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Events_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Events_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Events_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Events_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Events_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Events_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Events_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Events_Aggregate_Bool_Exp_Var_Samp>;
};

export type Events_Aggregate_Bool_Exp_Avg = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Bool_And = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Corr = {
  arguments: Events_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Events_Select_Column_Events_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Events_Select_Column_Events_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Events_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Events_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Events_Select_Column_Events_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Events_Select_Column_Events_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Events_Aggregate_Bool_Exp_Max = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Min = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Sum = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Events_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Events_Select_Column_Events_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  avg?: Maybe<Events_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
  stddev?: Maybe<Events_Stddev_Fields>;
  stddev_pop?: Maybe<Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Events_Stddev_Samp_Fields>;
  sum?: Maybe<Events_Sum_Fields>;
  var_pop?: Maybe<Events_Var_Pop_Fields>;
  var_samp?: Maybe<Events_Var_Samp_Fields>;
  variance?: Maybe<Events_Variance_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "events" */
export type Events_Aggregate_Order_By = {
  avg?: InputMaybe<Events_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Events_Max_Order_By>;
  min?: InputMaybe<Events_Min_Order_By>;
  stddev?: InputMaybe<Events_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Events_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Events_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Events_Sum_Order_By>;
  var_pop?: InputMaybe<Events_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Events_Var_Samp_Order_By>;
  variance?: InputMaybe<Events_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Events_Avg_Fields = {
  __typename?: 'events_avg_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  challonge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  penalty_mvp_value?: Maybe<Scalars['Float']['output']>;
  penalty_point_value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "events" */
export type Events_Avg_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  center?: InputMaybe<Centers_Bool_Exp>;
  center_id?: InputMaybe<Bigint_Comparison_Exp>;
  challonge_id?: InputMaybe<Bigint_Comparison_Exp>;
  challonge_link?: InputMaybe<String_Comparison_Exp>;
  created?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  enable_allstar?: InputMaybe<Boolean_Comparison_Exp>;
  enable_leaderboards?: InputMaybe<Boolean_Comparison_Exp>;
  enable_player_stats?: InputMaybe<Boolean_Comparison_Exp>;
  enable_top_players?: InputMaybe<Boolean_Comparison_Exp>;
  event_game_results?: InputMaybe<Game_Results_Bool_Exp>;
  games?: InputMaybe<Games_Bool_Exp>;
  games_aggregate?: InputMaybe<Games_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_comp?: InputMaybe<Boolean_Comparison_Exp>;
  modified?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  penalty_default_type?: InputMaybe<String_Comparison_Exp>;
  penalty_mvp_value?: InputMaybe<Float8_Comparison_Exp>;
  penalty_point_value?: InputMaybe<Int_Comparison_Exp>;
  scorecards?: InputMaybe<Scorecards_Bool_Exp>;
  scoring?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  challonge_id?: Maybe<Scalars['bigint']['output']>;
  challonge_link?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  modified?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  penalty_default_type?: Maybe<Scalars['String']['output']>;
  penalty_mvp_value?: Maybe<Scalars['float8']['output']>;
  penalty_point_value?: Maybe<Scalars['Int']['output']>;
  scoring?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "events" */
export type Events_Max_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  challonge_link?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  penalty_default_type?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
  scoring?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  challonge_id?: Maybe<Scalars['bigint']['output']>;
  challonge_link?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  modified?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  penalty_default_type?: Maybe<Scalars['String']['output']>;
  penalty_mvp_value?: Maybe<Scalars['float8']['output']>;
  penalty_point_value?: Maybe<Scalars['Int']['output']>;
  scoring?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "events" */
export type Events_Min_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  challonge_link?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  penalty_default_type?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
  scoring?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  center?: InputMaybe<Centers_Order_By>;
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  challonge_link?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enable_allstar?: InputMaybe<Order_By>;
  enable_leaderboards?: InputMaybe<Order_By>;
  enable_player_stats?: InputMaybe<Order_By>;
  enable_top_players?: InputMaybe<Order_By>;
  event_game_results_aggregate?: InputMaybe<Game_Results_Aggregate_Order_By>;
  games_aggregate?: InputMaybe<Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_comp?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  penalty_default_type?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
  scorecards_aggregate?: InputMaybe<Scorecards_Aggregate_Order_By>;
  scoring?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  CenterId = 'center_id',
  /** column name */
  ChallongeId = 'challonge_id',
  /** column name */
  ChallongeLink = 'challonge_link',
  /** column name */
  Created = 'created',
  /** column name */
  Description = 'description',
  /** column name */
  EnableAllstar = 'enable_allstar',
  /** column name */
  EnableLeaderboards = 'enable_leaderboards',
  /** column name */
  EnablePlayerStats = 'enable_player_stats',
  /** column name */
  EnableTopPlayers = 'enable_top_players',
  /** column name */
  Id = 'id',
  /** column name */
  IsComp = 'is_comp',
  /** column name */
  Modified = 'modified',
  /** column name */
  Name = 'name',
  /** column name */
  PenaltyDefaultType = 'penalty_default_type',
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value',
  /** column name */
  PenaltyPointValue = 'penalty_point_value',
  /** column name */
  Scoring = 'scoring',
  /** column name */
  Type = 'type'
}

/** select "events_aggregate_bool_exp_avg_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** select "events_aggregate_bool_exp_bool_and_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  EnableAllstar = 'enable_allstar',
  /** column name */
  EnableLeaderboards = 'enable_leaderboards',
  /** column name */
  EnablePlayerStats = 'enable_player_stats',
  /** column name */
  EnableTopPlayers = 'enable_top_players',
  /** column name */
  IsComp = 'is_comp'
}

/** select "events_aggregate_bool_exp_bool_or_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  EnableAllstar = 'enable_allstar',
  /** column name */
  EnableLeaderboards = 'enable_leaderboards',
  /** column name */
  EnablePlayerStats = 'enable_player_stats',
  /** column name */
  EnableTopPlayers = 'enable_top_players',
  /** column name */
  IsComp = 'is_comp'
}

/** select "events_aggregate_bool_exp_corr_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** select "events_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** select "events_aggregate_bool_exp_max_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** select "events_aggregate_bool_exp_min_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** select "events_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** select "events_aggregate_bool_exp_sum_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** select "events_aggregate_bool_exp_var_samp_arguments_columns" columns of table "events" */
export enum Events_Select_Column_Events_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  PenaltyMvpValue = 'penalty_mvp_value'
}

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
  __typename?: 'events_stddev_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  challonge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  penalty_mvp_value?: Maybe<Scalars['Float']['output']>;
  penalty_point_value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "events" */
export type Events_Stddev_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
  __typename?: 'events_stddev_pop_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  challonge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  penalty_mvp_value?: Maybe<Scalars['Float']['output']>;
  penalty_point_value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "events" */
export type Events_Stddev_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
  __typename?: 'events_stddev_samp_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  challonge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  penalty_mvp_value?: Maybe<Scalars['Float']['output']>;
  penalty_point_value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "events" */
export type Events_Stddev_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  center_id?: InputMaybe<Scalars['bigint']['input']>;
  challonge_id?: InputMaybe<Scalars['bigint']['input']>;
  challonge_link?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enable_allstar?: InputMaybe<Scalars['Boolean']['input']>;
  enable_leaderboards?: InputMaybe<Scalars['Boolean']['input']>;
  enable_player_stats?: InputMaybe<Scalars['Boolean']['input']>;
  enable_top_players?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_comp?: InputMaybe<Scalars['Boolean']['input']>;
  modified?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  penalty_default_type?: InputMaybe<Scalars['String']['input']>;
  penalty_mvp_value?: InputMaybe<Scalars['float8']['input']>;
  penalty_point_value?: InputMaybe<Scalars['Int']['input']>;
  scoring?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Events_Sum_Fields = {
  __typename?: 'events_sum_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  challonge_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  penalty_mvp_value?: Maybe<Scalars['float8']['output']>;
  penalty_point_value?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "events" */
export type Events_Sum_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
  __typename?: 'events_var_pop_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  challonge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  penalty_mvp_value?: Maybe<Scalars['Float']['output']>;
  penalty_point_value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "events" */
export type Events_Var_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
  __typename?: 'events_var_samp_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  challonge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  penalty_mvp_value?: Maybe<Scalars['Float']['output']>;
  penalty_point_value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "events" */
export type Events_Var_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Events_Variance_Fields = {
  __typename?: 'events_variance_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  challonge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  penalty_mvp_value?: Maybe<Scalars['Float']['output']>;
  penalty_point_value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "events" */
export type Events_Variance_Order_By = {
  center_id?: InputMaybe<Order_By>;
  challonge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  penalty_mvp_value?: InputMaybe<Order_By>;
  penalty_point_value?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "game" */
export type Game = {
  __typename?: 'game';
  /** An object relationship */
  center: Center;
  center_id: Scalars['bigint']['output'];
  chomper_version?: Maybe<Scalars['String']['output']>;
  file_version?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  game_actions: Array<Game_Action>;
  /** An aggregate relationship */
  game_actions_aggregate: Game_Action_Aggregate;
  /** An array relationship */
  game_tags: Array<Game_Tag>;
  /** An aggregate relationship */
  game_tags_aggregate: Game_Tag_Aggregate;
  /** An array relationship */
  game_teams: Array<Game_Team>;
  /** An aggregate relationship */
  game_teams_aggregate: Game_Team_Aggregate;
  id: Scalars['bigint']['output'];
  mission_desc?: Maybe<Scalars['String']['output']>;
  mission_length?: Maybe<Scalars['Int']['output']>;
  mission_max_length?: Maybe<Scalars['Int']['output']>;
  mission_start?: Maybe<Scalars['timestamp']['output']>;
  mission_type?: Maybe<Scalars['String']['output']>;
  penalty?: Maybe<Scalars['Int']['output']>;
  program_version?: Maybe<Scalars['String']['output']>;
  tdf_id: Scalars['String']['output'];
};


/** columns and relationships of "game" */
export type GameGame_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_TagsArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_TeamsArgs = {
  distinct_on?: InputMaybe<Array<Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Team_Order_By>>;
  where?: InputMaybe<Game_Team_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_Teams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Team_Order_By>>;
  where?: InputMaybe<Game_Team_Bool_Exp>;
};

/** columns and relationships of "game_action" */
export type Game_Action = {
  __typename?: 'game_action';
  action_text?: Maybe<Scalars['String']['output']>;
  action_time?: Maybe<Scalars['Int']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  actor_game_entity_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  game?: Maybe<Game>;
  /** An object relationship */
  gameEntityByTargetGameEntityId?: Maybe<Game_Entity>;
  /** An object relationship */
  game_entity?: Maybe<Game_Entity>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  target_game_entity_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "game_action" */
export type Game_Action_Aggregate = {
  __typename?: 'game_action_aggregate';
  aggregate?: Maybe<Game_Action_Aggregate_Fields>;
  nodes: Array<Game_Action>;
};

export type Game_Action_Aggregate_Bool_Exp = {
  count?: InputMaybe<Game_Action_Aggregate_Bool_Exp_Count>;
};

export type Game_Action_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Action_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Action_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game_action" */
export type Game_Action_Aggregate_Fields = {
  __typename?: 'game_action_aggregate_fields';
  avg?: Maybe<Game_Action_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Action_Max_Fields>;
  min?: Maybe<Game_Action_Min_Fields>;
  stddev?: Maybe<Game_Action_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Action_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Action_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Action_Sum_Fields>;
  var_pop?: Maybe<Game_Action_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Action_Var_Samp_Fields>;
  variance?: Maybe<Game_Action_Variance_Fields>;
};


/** aggregate fields of "game_action" */
export type Game_Action_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Action_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_action" */
export type Game_Action_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Action_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Action_Max_Order_By>;
  min?: InputMaybe<Game_Action_Min_Order_By>;
  stddev?: InputMaybe<Game_Action_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Action_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Action_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Action_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Action_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Action_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Action_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Game_Action_Avg_Fields = {
  __typename?: 'game_action_avg_fields';
  action_time?: Maybe<Scalars['Float']['output']>;
  actor_game_entity_id?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  target_game_entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game_action" */
export type Game_Action_Avg_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_action". All fields are combined with a logical 'AND'. */
export type Game_Action_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Action_Bool_Exp>>;
  _not?: InputMaybe<Game_Action_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Action_Bool_Exp>>;
  action_text?: InputMaybe<String_Comparison_Exp>;
  action_time?: InputMaybe<Int_Comparison_Exp>;
  action_type?: InputMaybe<String_Comparison_Exp>;
  actor_game_entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  game?: InputMaybe<Game_Bool_Exp>;
  gameEntityByTargetGameEntityId?: InputMaybe<Game_Entity_Bool_Exp>;
  game_entity?: InputMaybe<Game_Entity_Bool_Exp>;
  game_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  target_game_entity_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Game_Action_Max_Fields = {
  __typename?: 'game_action_max_fields';
  action_text?: Maybe<Scalars['String']['output']>;
  action_time?: Maybe<Scalars['Int']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  actor_game_entity_id?: Maybe<Scalars['bigint']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  target_game_entity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "game_action" */
export type Game_Action_Max_Order_By = {
  action_text?: InputMaybe<Order_By>;
  action_time?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Action_Min_Fields = {
  __typename?: 'game_action_min_fields';
  action_text?: Maybe<Scalars['String']['output']>;
  action_time?: Maybe<Scalars['Int']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  actor_game_entity_id?: Maybe<Scalars['bigint']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  target_game_entity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "game_action" */
export type Game_Action_Min_Order_By = {
  action_text?: InputMaybe<Order_By>;
  action_time?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game_action". */
export type Game_Action_Order_By = {
  action_text?: InputMaybe<Order_By>;
  action_time?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game?: InputMaybe<Game_Order_By>;
  gameEntityByTargetGameEntityId?: InputMaybe<Game_Entity_Order_By>;
  game_entity?: InputMaybe<Game_Entity_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** select columns of table "game_action" */
export enum Game_Action_Select_Column {
  /** column name */
  ActionText = 'action_text',
  /** column name */
  ActionTime = 'action_time',
  /** column name */
  ActionType = 'action_type',
  /** column name */
  ActorGameEntityId = 'actor_game_entity_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  TargetGameEntityId = 'target_game_entity_id'
}

/** aggregate stddev on columns */
export type Game_Action_Stddev_Fields = {
  __typename?: 'game_action_stddev_fields';
  action_time?: Maybe<Scalars['Float']['output']>;
  actor_game_entity_id?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  target_game_entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game_action" */
export type Game_Action_Stddev_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Action_Stddev_Pop_Fields = {
  __typename?: 'game_action_stddev_pop_fields';
  action_time?: Maybe<Scalars['Float']['output']>;
  actor_game_entity_id?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  target_game_entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game_action" */
export type Game_Action_Stddev_Pop_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Action_Stddev_Samp_Fields = {
  __typename?: 'game_action_stddev_samp_fields';
  action_time?: Maybe<Scalars['Float']['output']>;
  actor_game_entity_id?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  target_game_entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game_action" */
export type Game_Action_Stddev_Samp_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game_action" */
export type Game_Action_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Action_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Action_Stream_Cursor_Value_Input = {
  action_text?: InputMaybe<Scalars['String']['input']>;
  action_time?: InputMaybe<Scalars['Int']['input']>;
  action_type?: InputMaybe<Scalars['String']['input']>;
  actor_game_entity_id?: InputMaybe<Scalars['bigint']['input']>;
  game_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  target_game_entity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Game_Action_Sum_Fields = {
  __typename?: 'game_action_sum_fields';
  action_time?: Maybe<Scalars['Int']['output']>;
  actor_game_entity_id?: Maybe<Scalars['bigint']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  target_game_entity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "game_action" */
export type Game_Action_Sum_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Game_Action_Var_Pop_Fields = {
  __typename?: 'game_action_var_pop_fields';
  action_time?: Maybe<Scalars['Float']['output']>;
  actor_game_entity_id?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  target_game_entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game_action" */
export type Game_Action_Var_Pop_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Action_Var_Samp_Fields = {
  __typename?: 'game_action_var_samp_fields';
  action_time?: Maybe<Scalars['Float']['output']>;
  actor_game_entity_id?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  target_game_entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game_action" */
export type Game_Action_Var_Samp_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Action_Variance_Fields = {
  __typename?: 'game_action_variance_fields';
  action_time?: Maybe<Scalars['Float']['output']>;
  actor_game_entity_id?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  target_game_entity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game_action" */
export type Game_Action_Variance_Order_By = {
  action_time?: InputMaybe<Order_By>;
  actor_game_entity_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target_game_entity_id?: InputMaybe<Order_By>;
};

/** aggregated selection of "game" */
export type Game_Aggregate = {
  __typename?: 'game_aggregate';
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

export type Game_Aggregate_Bool_Exp = {
  count?: InputMaybe<Game_Aggregate_Bool_Exp_Count>;
};

export type Game_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game" */
export type Game_Aggregate_Fields = {
  __typename?: 'game_aggregate_fields';
  avg?: Maybe<Game_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
  stddev?: Maybe<Game_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Sum_Fields>;
  var_pop?: Maybe<Game_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Var_Samp_Fields>;
  variance?: Maybe<Game_Variance_Fields>;
};


/** aggregate fields of "game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game" */
export type Game_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Max_Order_By>;
  min?: InputMaybe<Game_Min_Order_By>;
  stddev?: InputMaybe<Game_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Game_Avg_Fields = {
  __typename?: 'game_avg_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mission_length?: Maybe<Scalars['Float']['output']>;
  mission_max_length?: Maybe<Scalars['Float']['output']>;
  penalty?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game" */
export type Game_Avg_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Bool_Exp>>;
  _not?: InputMaybe<Game_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Bool_Exp>>;
  center?: InputMaybe<Center_Bool_Exp>;
  center_id?: InputMaybe<Bigint_Comparison_Exp>;
  chomper_version?: InputMaybe<String_Comparison_Exp>;
  file_version?: InputMaybe<String_Comparison_Exp>;
  game_actions?: InputMaybe<Game_Action_Bool_Exp>;
  game_actions_aggregate?: InputMaybe<Game_Action_Aggregate_Bool_Exp>;
  game_tags?: InputMaybe<Game_Tag_Bool_Exp>;
  game_tags_aggregate?: InputMaybe<Game_Tag_Aggregate_Bool_Exp>;
  game_teams?: InputMaybe<Game_Team_Bool_Exp>;
  game_teams_aggregate?: InputMaybe<Game_Team_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  mission_desc?: InputMaybe<String_Comparison_Exp>;
  mission_length?: InputMaybe<Int_Comparison_Exp>;
  mission_max_length?: InputMaybe<Int_Comparison_Exp>;
  mission_start?: InputMaybe<Timestamp_Comparison_Exp>;
  mission_type?: InputMaybe<String_Comparison_Exp>;
  penalty?: InputMaybe<Int_Comparison_Exp>;
  program_version?: InputMaybe<String_Comparison_Exp>;
  tdf_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "game_entity" */
export type Game_Entity = {
  __typename?: 'game_entity';
  battlesuit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  end_code?: Maybe<Scalars['String']['output']>;
  end_time: Scalars['Int']['output'];
  entity_desc: Scalars['String']['output'];
  entity_level?: Maybe<Scalars['Int']['output']>;
  entity_type: Scalars['String']['output'];
  /** An array relationship */
  gameActionsByTargetGameEntityId: Array<Game_Action>;
  /** An aggregate relationship */
  gameActionsByTargetGameEntityId_aggregate: Game_Action_Aggregate;
  /** An array relationship */
  game_actions: Array<Game_Action>;
  /** An aggregate relationship */
  game_actions_aggregate: Game_Action_Aggregate;
  /** An array relationship */
  game_entity_states: Array<Game_Entity_State>;
  /** An aggregate relationship */
  game_entity_states_aggregate: Game_Entity_State_Aggregate;
  /** An object relationship */
  game_team: Game_Team;
  game_team_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  ipl_id: Scalars['String']['output'];
  /** An object relationship */
  player?: Maybe<Player>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  v_game_entity_state_final?: Maybe<V_Game_Entity_State_Final>;
  /** An array relationship */
  v_game_entity_states: Array<V_Game_Entity_States>;
};


/** columns and relationships of "game_entity" */
export type Game_EntityGameActionsByTargetGameEntityIdArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


/** columns and relationships of "game_entity" */
export type Game_EntityGameActionsByTargetGameEntityId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


/** columns and relationships of "game_entity" */
export type Game_EntityGame_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


/** columns and relationships of "game_entity" */
export type Game_EntityGame_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


/** columns and relationships of "game_entity" */
export type Game_EntityGame_Entity_StatesArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_State_Order_By>>;
  where?: InputMaybe<Game_Entity_State_Bool_Exp>;
};


/** columns and relationships of "game_entity" */
export type Game_EntityGame_Entity_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_State_Order_By>>;
  where?: InputMaybe<Game_Entity_State_Bool_Exp>;
};


/** columns and relationships of "game_entity" */
export type Game_EntityV_Game_Entity_StatesArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_States_Order_By>>;
  where?: InputMaybe<V_Game_Entity_States_Bool_Exp>;
};

/** aggregated selection of "game_entity" */
export type Game_Entity_Aggregate = {
  __typename?: 'game_entity_aggregate';
  aggregate?: Maybe<Game_Entity_Aggregate_Fields>;
  nodes: Array<Game_Entity>;
};

export type Game_Entity_Aggregate_Bool_Exp = {
  count?: InputMaybe<Game_Entity_Aggregate_Bool_Exp_Count>;
};

export type Game_Entity_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Entity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game_entity" */
export type Game_Entity_Aggregate_Fields = {
  __typename?: 'game_entity_aggregate_fields';
  avg?: Maybe<Game_Entity_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Entity_Max_Fields>;
  min?: Maybe<Game_Entity_Min_Fields>;
  stddev?: Maybe<Game_Entity_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Entity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Entity_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Entity_Sum_Fields>;
  var_pop?: Maybe<Game_Entity_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Entity_Var_Samp_Fields>;
  variance?: Maybe<Game_Entity_Variance_Fields>;
};


/** aggregate fields of "game_entity" */
export type Game_Entity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Entity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_entity" */
export type Game_Entity_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Entity_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Entity_Max_Order_By>;
  min?: InputMaybe<Game_Entity_Min_Order_By>;
  stddev?: InputMaybe<Game_Entity_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Entity_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Entity_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Entity_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Entity_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Entity_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Entity_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Game_Entity_Avg_Fields = {
  __typename?: 'game_entity_avg_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game_entity" */
export type Game_Entity_Avg_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_entity". All fields are combined with a logical 'AND'. */
export type Game_Entity_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Entity_Bool_Exp>>;
  _not?: InputMaybe<Game_Entity_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Entity_Bool_Exp>>;
  battlesuit?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Int_Comparison_Exp>;
  end_code?: InputMaybe<String_Comparison_Exp>;
  end_time?: InputMaybe<Int_Comparison_Exp>;
  entity_desc?: InputMaybe<String_Comparison_Exp>;
  entity_level?: InputMaybe<Int_Comparison_Exp>;
  entity_type?: InputMaybe<String_Comparison_Exp>;
  gameActionsByTargetGameEntityId?: InputMaybe<Game_Action_Bool_Exp>;
  gameActionsByTargetGameEntityId_aggregate?: InputMaybe<Game_Action_Aggregate_Bool_Exp>;
  game_actions?: InputMaybe<Game_Action_Bool_Exp>;
  game_actions_aggregate?: InputMaybe<Game_Action_Aggregate_Bool_Exp>;
  game_entity_states?: InputMaybe<Game_Entity_State_Bool_Exp>;
  game_entity_states_aggregate?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp>;
  game_team?: InputMaybe<Game_Team_Bool_Exp>;
  game_team_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  ipl_id?: InputMaybe<String_Comparison_Exp>;
  player?: InputMaybe<Player_Bool_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  start_time?: InputMaybe<Int_Comparison_Exp>;
  v_game_entity_state_final?: InputMaybe<V_Game_Entity_State_Final_Bool_Exp>;
  v_game_entity_states?: InputMaybe<V_Game_Entity_States_Bool_Exp>;
};

/** aggregate max on columns */
export type Game_Entity_Max_Fields = {
  __typename?: 'game_entity_max_fields';
  battlesuit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  end_code?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Int']['output']>;
  entity_desc?: Maybe<Scalars['String']['output']>;
  entity_level?: Maybe<Scalars['Int']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  game_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "game_entity" */
export type Game_Entity_Max_Order_By = {
  battlesuit?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  end_code?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_desc?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Entity_Min_Fields = {
  __typename?: 'game_entity_min_fields';
  battlesuit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  end_code?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Int']['output']>;
  entity_desc?: Maybe<Scalars['String']['output']>;
  entity_level?: Maybe<Scalars['Int']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  game_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "game_entity" */
export type Game_Entity_Min_Order_By = {
  battlesuit?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  end_code?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_desc?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game_entity". */
export type Game_Entity_Order_By = {
  battlesuit?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  end_code?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_desc?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  gameActionsByTargetGameEntityId_aggregate?: InputMaybe<Game_Action_Aggregate_Order_By>;
  game_actions_aggregate?: InputMaybe<Game_Action_Aggregate_Order_By>;
  game_entity_states_aggregate?: InputMaybe<Game_Entity_State_Aggregate_Order_By>;
  game_team?: InputMaybe<Game_Team_Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  player?: InputMaybe<Player_Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  v_game_entity_state_final?: InputMaybe<V_Game_Entity_State_Final_Order_By>;
  v_game_entity_states_aggregate?: InputMaybe<V_Game_Entity_States_Aggregate_Order_By>;
};

/** select columns of table "game_entity" */
export enum Game_Entity_Select_Column {
  /** column name */
  Battlesuit = 'battlesuit',
  /** column name */
  Category = 'category',
  /** column name */
  EndCode = 'end_code',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  EntityDesc = 'entity_desc',
  /** column name */
  EntityLevel = 'entity_level',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  GameTeamId = 'game_team_id',
  /** column name */
  Id = 'id',
  /** column name */
  IplId = 'ipl_id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Position = 'position',
  /** column name */
  StartTime = 'start_time'
}

/** columns and relationships of "game_entity_state" */
export type Game_Entity_State = {
  __typename?: 'game_entity_state';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id: Scalars['bigint']['output'];
  /** An object relationship */
  game_entity: Game_Entity;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  id: Scalars['uuid']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_eliminated?: Maybe<Scalars['Boolean']['output']>;
  is_final?: Maybe<Scalars['Boolean']['output']>;
  is_nuking?: Maybe<Scalars['Boolean']['output']>;
  is_rapid?: Maybe<Scalars['Boolean']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  last_deac_type?: Maybe<Scalars['deac_type']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  /** A computed field, executes function "game_entity_state_mvp_details" */
  mvp_details?: Maybe<Scalars['json']['output']>;
  /** An array relationship */
  mvps: Array<Mvp>;
  /** An aggregate relationship */
  mvps_aggregate: Mvp_Aggregate;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  self_team_missile?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time: Scalars['Int']['output'];
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "game_entity_state" */
export type Game_Entity_StateMvp_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "game_entity_state" */
export type Game_Entity_StateMvpsArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};


/** columns and relationships of "game_entity_state" */
export type Game_Entity_StateMvps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};

/** aggregated selection of "game_entity_state" */
export type Game_Entity_State_Aggregate = {
  __typename?: 'game_entity_state_aggregate';
  aggregate?: Maybe<Game_Entity_State_Aggregate_Fields>;
  nodes: Array<Game_Entity_State>;
};

export type Game_Entity_State_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Game_Entity_State_Aggregate_Bool_Exp_Var_Samp>;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Avg = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Bool_And = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Corr = {
  arguments: Game_Entity_State_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Game_Entity_State_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Max = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Min = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Sum = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Entity_State_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Entity_State_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "game_entity_state" */
export type Game_Entity_State_Aggregate_Fields = {
  __typename?: 'game_entity_state_aggregate_fields';
  avg?: Maybe<Game_Entity_State_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Entity_State_Max_Fields>;
  min?: Maybe<Game_Entity_State_Min_Fields>;
  stddev?: Maybe<Game_Entity_State_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Entity_State_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Entity_State_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Entity_State_Sum_Fields>;
  var_pop?: Maybe<Game_Entity_State_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Entity_State_Var_Samp_Fields>;
  variance?: Maybe<Game_Entity_State_Variance_Fields>;
};


/** aggregate fields of "game_entity_state" */
export type Game_Entity_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_entity_state" */
export type Game_Entity_State_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Entity_State_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Entity_State_Max_Order_By>;
  min?: InputMaybe<Game_Entity_State_Min_Order_By>;
  stddev?: InputMaybe<Game_Entity_State_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Entity_State_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Entity_State_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Entity_State_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Entity_State_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Entity_State_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Entity_State_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Game_Entity_State_Avg_Fields = {
  __typename?: 'game_entity_state_avg_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  self_team_missile?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game_entity_state" */
export type Game_Entity_State_Avg_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_entity_state". All fields are combined with a logical 'AND'. */
export type Game_Entity_State_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Entity_State_Bool_Exp>>;
  _not?: InputMaybe<Game_Entity_State_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Entity_State_Bool_Exp>>;
  accuracy?: InputMaybe<Float8_Comparison_Exp>;
  accuracy_during_rapid?: InputMaybe<Float8_Comparison_Exp>;
  ammo_boost_received?: InputMaybe<Smallint_Comparison_Exp>;
  ammo_boosted_players?: InputMaybe<Smallint_Comparison_Exp>;
  ammo_boosts?: InputMaybe<Smallint_Comparison_Exp>;
  assists?: InputMaybe<Smallint_Comparison_Exp>;
  assists_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  award_base?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_opponent_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_team_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_team_nuke_by_resupply?: InputMaybe<Smallint_Comparison_Exp>;
  current_hp?: InputMaybe<Smallint_Comparison_Exp>;
  deac_3hit?: InputMaybe<Smallint_Comparison_Exp>;
  deac_3hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  deac_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  deac_opponent_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  deac_team?: InputMaybe<Smallint_Comparison_Exp>;
  deac_team_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  destroy_base?: InputMaybe<Smallint_Comparison_Exp>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  game_entity?: InputMaybe<Game_Entity_Bool_Exp>;
  hit_diff?: InputMaybe<Float8_Comparison_Exp>;
  hit_diff_during_rapid?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  is_final?: InputMaybe<Boolean_Comparison_Exp>;
  is_nuking?: InputMaybe<Boolean_Comparison_Exp>;
  is_rapid?: InputMaybe<Boolean_Comparison_Exp>;
  last_deac_time?: InputMaybe<Int_Comparison_Exp>;
  last_deac_type?: InputMaybe<Deac_Type_Comparison_Exp>;
  life_boost_received?: InputMaybe<Smallint_Comparison_Exp>;
  life_boosted_players?: InputMaybe<Smallint_Comparison_Exp>;
  life_boosts?: InputMaybe<Smallint_Comparison_Exp>;
  lives?: InputMaybe<Smallint_Comparison_Exp>;
  medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  medic_hits_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  miss_base?: InputMaybe<Smallint_Comparison_Exp>;
  missile_base?: InputMaybe<Smallint_Comparison_Exp>;
  missile_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  missile_team?: InputMaybe<Smallint_Comparison_Exp>;
  missiles_left?: InputMaybe<Smallint_Comparison_Exp>;
  mvp?: InputMaybe<Float8_Comparison_Exp>;
  mvp_details?: InputMaybe<Json_Comparison_Exp>;
  mvps?: InputMaybe<Mvp_Bool_Exp>;
  mvps_aggregate?: InputMaybe<Mvp_Aggregate_Bool_Exp>;
  nuke_downtime?: InputMaybe<Int_Comparison_Exp>;
  nuke_medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  nukes_activated?: InputMaybe<Smallint_Comparison_Exp>;
  nukes_detonated?: InputMaybe<Smallint_Comparison_Exp>;
  opp_deac_downtime?: InputMaybe<Int_Comparison_Exp>;
  own_medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_game_end?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_penalty?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_resupply?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_team?: InputMaybe<Smallint_Comparison_Exp>;
  penalties?: InputMaybe<Smallint_Comparison_Exp>;
  penalty_downtime?: InputMaybe<Int_Comparison_Exp>;
  rapid_fires?: InputMaybe<Smallint_Comparison_Exp>;
  resupply_downtime?: InputMaybe<Int_Comparison_Exp>;
  resupply_lives?: InputMaybe<Smallint_Comparison_Exp>;
  resupply_shots?: InputMaybe<Smallint_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  self_deac?: InputMaybe<Smallint_Comparison_Exp>;
  self_deac_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_hit?: InputMaybe<Smallint_Comparison_Exp>;
  self_hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_missile?: InputMaybe<Smallint_Comparison_Exp>;
  self_missile_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_resupply_lives?: InputMaybe<Smallint_Comparison_Exp>;
  self_resupply_shots?: InputMaybe<Smallint_Comparison_Exp>;
  self_team_missile?: InputMaybe<Smallint_Comparison_Exp>;
  shot_3hit?: InputMaybe<Smallint_Comparison_Exp>;
  shot_3hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shot_base?: InputMaybe<Smallint_Comparison_Exp>;
  shot_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  shot_opponent_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shot_team?: InputMaybe<Smallint_Comparison_Exp>;
  shot_team_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shots?: InputMaybe<Smallint_Comparison_Exp>;
  shots_fired?: InputMaybe<Smallint_Comparison_Exp>;
  shots_fired_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shots_hit?: InputMaybe<Smallint_Comparison_Exp>;
  shots_hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  sp_earned?: InputMaybe<Smallint_Comparison_Exp>;
  sp_spent?: InputMaybe<Smallint_Comparison_Exp>;
  state_time?: InputMaybe<Int_Comparison_Exp>;
  team_deac_downtime?: InputMaybe<Int_Comparison_Exp>;
  times_missiled?: InputMaybe<Smallint_Comparison_Exp>;
  uptime?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Game_Entity_State_Max_Fields = {
  __typename?: 'game_entity_state_max_fields';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  last_deac_type?: Maybe<Scalars['deac_type']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  self_team_missile?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "game_entity_state" */
export type Game_Entity_State_Max_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  last_deac_type?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Entity_State_Min_Fields = {
  __typename?: 'game_entity_state_min_fields';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  last_deac_type?: Maybe<Scalars['deac_type']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  self_team_missile?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "game_entity_state" */
export type Game_Entity_State_Min_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  last_deac_type?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game_entity_state". */
export type Game_Entity_State_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  game_entity?: InputMaybe<Game_Entity_Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_eliminated?: InputMaybe<Order_By>;
  is_final?: InputMaybe<Order_By>;
  is_nuking?: InputMaybe<Order_By>;
  is_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  last_deac_type?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_details?: InputMaybe<Order_By>;
  mvps_aggregate?: InputMaybe<Mvp_Aggregate_Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** select columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  AmmoBoostReceived = 'ammo_boost_received',
  /** column name */
  AmmoBoostedPlayers = 'ammo_boosted_players',
  /** column name */
  AmmoBoosts = 'ammo_boosts',
  /** column name */
  Assists = 'assists',
  /** column name */
  AssistsDuringRapid = 'assists_during_rapid',
  /** column name */
  AwardBase = 'award_base',
  /** column name */
  CancelOpponentNuke = 'cancel_opponent_nuke',
  /** column name */
  CancelTeamNuke = 'cancel_team_nuke',
  /** column name */
  CancelTeamNukeByResupply = 'cancel_team_nuke_by_resupply',
  /** column name */
  CurrentHp = 'current_hp',
  /** column name */
  Deac_3hit = 'deac_3hit',
  /** column name */
  Deac_3hitDuringRapid = 'deac_3hit_during_rapid',
  /** column name */
  DeacOpponent = 'deac_opponent',
  /** column name */
  DeacOpponentDuringRapid = 'deac_opponent_during_rapid',
  /** column name */
  DeacTeam = 'deac_team',
  /** column name */
  DeacTeamDuringRapid = 'deac_team_during_rapid',
  /** column name */
  DestroyBase = 'destroy_base',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  IsFinal = 'is_final',
  /** column name */
  IsNuking = 'is_nuking',
  /** column name */
  IsRapid = 'is_rapid',
  /** column name */
  LastDeacTime = 'last_deac_time',
  /** column name */
  LastDeacType = 'last_deac_type',
  /** column name */
  LifeBoostReceived = 'life_boost_received',
  /** column name */
  LifeBoostedPlayers = 'life_boosted_players',
  /** column name */
  LifeBoosts = 'life_boosts',
  /** column name */
  Lives = 'lives',
  /** column name */
  MedicHits = 'medic_hits',
  /** column name */
  MedicHitsDuringRapid = 'medic_hits_during_rapid',
  /** column name */
  MissBase = 'miss_base',
  /** column name */
  MissileBase = 'missile_base',
  /** column name */
  MissileOpponent = 'missile_opponent',
  /** column name */
  MissileTeam = 'missile_team',
  /** column name */
  MissilesLeft = 'missiles_left',
  /** column name */
  NukeDowntime = 'nuke_downtime',
  /** column name */
  NukeMedicHits = 'nuke_medic_hits',
  /** column name */
  NukesActivated = 'nukes_activated',
  /** column name */
  NukesDetonated = 'nukes_detonated',
  /** column name */
  OppDeacDowntime = 'opp_deac_downtime',
  /** column name */
  OwnMedicHits = 'own_medic_hits',
  /** column name */
  OwnNukeCanceledByGameEnd = 'own_nuke_canceled_by_game_end',
  /** column name */
  OwnNukeCanceledByNuke = 'own_nuke_canceled_by_nuke',
  /** column name */
  OwnNukeCanceledByOpponent = 'own_nuke_canceled_by_opponent',
  /** column name */
  OwnNukeCanceledByPenalty = 'own_nuke_canceled_by_penalty',
  /** column name */
  OwnNukeCanceledByResupply = 'own_nuke_canceled_by_resupply',
  /** column name */
  OwnNukeCanceledByTeam = 'own_nuke_canceled_by_team',
  /** column name */
  Penalties = 'penalties',
  /** column name */
  PenaltyDowntime = 'penalty_downtime',
  /** column name */
  RapidFires = 'rapid_fires',
  /** column name */
  ResupplyDowntime = 'resupply_downtime',
  /** column name */
  ResupplyLives = 'resupply_lives',
  /** column name */
  ResupplyShots = 'resupply_shots',
  /** column name */
  Score = 'score',
  /** column name */
  SelfDeac = 'self_deac',
  /** column name */
  SelfDeacDuringRapid = 'self_deac_during_rapid',
  /** column name */
  SelfHit = 'self_hit',
  /** column name */
  SelfHitDuringRapid = 'self_hit_during_rapid',
  /** column name */
  SelfMissile = 'self_missile',
  /** column name */
  SelfMissileDuringRapid = 'self_missile_during_rapid',
  /** column name */
  SelfResupplyLives = 'self_resupply_lives',
  /** column name */
  SelfResupplyShots = 'self_resupply_shots',
  /** column name */
  SelfTeamMissile = 'self_team_missile',
  /** column name */
  Shot_3hit = 'shot_3hit',
  /** column name */
  Shot_3hitDuringRapid = 'shot_3hit_during_rapid',
  /** column name */
  ShotBase = 'shot_base',
  /** column name */
  ShotOpponent = 'shot_opponent',
  /** column name */
  ShotOpponentDuringRapid = 'shot_opponent_during_rapid',
  /** column name */
  ShotTeam = 'shot_team',
  /** column name */
  ShotTeamDuringRapid = 'shot_team_during_rapid',
  /** column name */
  Shots = 'shots',
  /** column name */
  ShotsFired = 'shots_fired',
  /** column name */
  ShotsFiredDuringRapid = 'shots_fired_during_rapid',
  /** column name */
  ShotsHit = 'shots_hit',
  /** column name */
  ShotsHitDuringRapid = 'shots_hit_during_rapid',
  /** column name */
  SpEarned = 'sp_earned',
  /** column name */
  SpSpent = 'sp_spent',
  /** column name */
  StateTime = 'state_time',
  /** column name */
  TeamDeacDowntime = 'team_deac_downtime',
  /** column name */
  TimesMissiled = 'times_missiled',
  /** column name */
  Uptime = 'uptime'
}

/** select "game_entity_state_aggregate_bool_exp_avg_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_bool_and_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  IsFinal = 'is_final',
  /** column name */
  IsNuking = 'is_nuking',
  /** column name */
  IsRapid = 'is_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_bool_or_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  IsFinal = 'is_final',
  /** column name */
  IsNuking = 'is_nuking',
  /** column name */
  IsRapid = 'is_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_corr_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_max_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_min_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_sum_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** select "game_entity_state_aggregate_bool_exp_var_samp_arguments_columns" columns of table "game_entity_state" */
export enum Game_Entity_State_Select_Column_Game_Entity_State_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid'
}

/** aggregate stddev on columns */
export type Game_Entity_State_Stddev_Fields = {
  __typename?: 'game_entity_state_stddev_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  self_team_missile?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game_entity_state" */
export type Game_Entity_State_Stddev_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Entity_State_Stddev_Pop_Fields = {
  __typename?: 'game_entity_state_stddev_pop_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  self_team_missile?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game_entity_state" */
export type Game_Entity_State_Stddev_Pop_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Entity_State_Stddev_Samp_Fields = {
  __typename?: 'game_entity_state_stddev_samp_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  self_team_missile?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game_entity_state" */
export type Game_Entity_State_Stddev_Samp_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game_entity_state" */
export type Game_Entity_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Entity_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Entity_State_Stream_Cursor_Value_Input = {
  accuracy?: InputMaybe<Scalars['float8']['input']>;
  accuracy_during_rapid?: InputMaybe<Scalars['float8']['input']>;
  ammo_boost_received?: InputMaybe<Scalars['smallint']['input']>;
  ammo_boosted_players?: InputMaybe<Scalars['smallint']['input']>;
  ammo_boosts?: InputMaybe<Scalars['smallint']['input']>;
  assists?: InputMaybe<Scalars['smallint']['input']>;
  assists_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  award_base?: InputMaybe<Scalars['smallint']['input']>;
  cancel_opponent_nuke?: InputMaybe<Scalars['smallint']['input']>;
  cancel_team_nuke?: InputMaybe<Scalars['smallint']['input']>;
  cancel_team_nuke_by_resupply?: InputMaybe<Scalars['smallint']['input']>;
  current_hp?: InputMaybe<Scalars['smallint']['input']>;
  deac_3hit?: InputMaybe<Scalars['smallint']['input']>;
  deac_3hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  deac_opponent?: InputMaybe<Scalars['smallint']['input']>;
  deac_opponent_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  deac_team?: InputMaybe<Scalars['smallint']['input']>;
  deac_team_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  destroy_base?: InputMaybe<Scalars['smallint']['input']>;
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  hit_diff?: InputMaybe<Scalars['float8']['input']>;
  hit_diff_during_rapid?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  is_final?: InputMaybe<Scalars['Boolean']['input']>;
  is_nuking?: InputMaybe<Scalars['Boolean']['input']>;
  is_rapid?: InputMaybe<Scalars['Boolean']['input']>;
  last_deac_time?: InputMaybe<Scalars['Int']['input']>;
  last_deac_type?: InputMaybe<Scalars['deac_type']['input']>;
  life_boost_received?: InputMaybe<Scalars['smallint']['input']>;
  life_boosted_players?: InputMaybe<Scalars['smallint']['input']>;
  life_boosts?: InputMaybe<Scalars['smallint']['input']>;
  lives?: InputMaybe<Scalars['smallint']['input']>;
  medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  medic_hits_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  miss_base?: InputMaybe<Scalars['smallint']['input']>;
  missile_base?: InputMaybe<Scalars['smallint']['input']>;
  missile_opponent?: InputMaybe<Scalars['smallint']['input']>;
  missile_team?: InputMaybe<Scalars['smallint']['input']>;
  missiles_left?: InputMaybe<Scalars['smallint']['input']>;
  nuke_downtime?: InputMaybe<Scalars['Int']['input']>;
  nuke_medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  nukes_activated?: InputMaybe<Scalars['smallint']['input']>;
  nukes_detonated?: InputMaybe<Scalars['smallint']['input']>;
  opp_deac_downtime?: InputMaybe<Scalars['Int']['input']>;
  own_medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_game_end?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_nuke?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_opponent?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_penalty?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_resupply?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_team?: InputMaybe<Scalars['smallint']['input']>;
  penalties?: InputMaybe<Scalars['smallint']['input']>;
  penalty_downtime?: InputMaybe<Scalars['Int']['input']>;
  rapid_fires?: InputMaybe<Scalars['smallint']['input']>;
  resupply_downtime?: InputMaybe<Scalars['Int']['input']>;
  resupply_lives?: InputMaybe<Scalars['smallint']['input']>;
  resupply_shots?: InputMaybe<Scalars['smallint']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  self_deac?: InputMaybe<Scalars['smallint']['input']>;
  self_deac_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_hit?: InputMaybe<Scalars['smallint']['input']>;
  self_hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_missile?: InputMaybe<Scalars['smallint']['input']>;
  self_missile_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_resupply_lives?: InputMaybe<Scalars['smallint']['input']>;
  self_resupply_shots?: InputMaybe<Scalars['smallint']['input']>;
  self_team_missile?: InputMaybe<Scalars['smallint']['input']>;
  shot_3hit?: InputMaybe<Scalars['smallint']['input']>;
  shot_3hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shot_base?: InputMaybe<Scalars['smallint']['input']>;
  shot_opponent?: InputMaybe<Scalars['smallint']['input']>;
  shot_opponent_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shot_team?: InputMaybe<Scalars['smallint']['input']>;
  shot_team_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shots?: InputMaybe<Scalars['smallint']['input']>;
  shots_fired?: InputMaybe<Scalars['smallint']['input']>;
  shots_fired_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shots_hit?: InputMaybe<Scalars['smallint']['input']>;
  shots_hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  sp_earned?: InputMaybe<Scalars['smallint']['input']>;
  sp_spent?: InputMaybe<Scalars['smallint']['input']>;
  state_time?: InputMaybe<Scalars['Int']['input']>;
  team_deac_downtime?: InputMaybe<Scalars['Int']['input']>;
  times_missiled?: InputMaybe<Scalars['smallint']['input']>;
  uptime?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Game_Entity_State_Sum_Fields = {
  __typename?: 'game_entity_state_sum_fields';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  self_team_missile?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "game_entity_state" */
export type Game_Entity_State_Sum_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Game_Entity_State_Var_Pop_Fields = {
  __typename?: 'game_entity_state_var_pop_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  self_team_missile?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game_entity_state" */
export type Game_Entity_State_Var_Pop_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Entity_State_Var_Samp_Fields = {
  __typename?: 'game_entity_state_var_samp_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  self_team_missile?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game_entity_state" */
export type Game_Entity_State_Var_Samp_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Entity_State_Variance_Fields = {
  __typename?: 'game_entity_state_variance_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "game_entity_state_mvp" */
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  self_team_missile?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game_entity_state" */
export type Game_Entity_State_Variance_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  self_team_missile?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate stddev on columns */
export type Game_Entity_Stddev_Fields = {
  __typename?: 'game_entity_stddev_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game_entity" */
export type Game_Entity_Stddev_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Entity_Stddev_Pop_Fields = {
  __typename?: 'game_entity_stddev_pop_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game_entity" */
export type Game_Entity_Stddev_Pop_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Entity_Stddev_Samp_Fields = {
  __typename?: 'game_entity_stddev_samp_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game_entity" */
export type Game_Entity_Stddev_Samp_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game_entity" */
export type Game_Entity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Entity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Entity_Stream_Cursor_Value_Input = {
  battlesuit?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['Int']['input']>;
  end_code?: InputMaybe<Scalars['String']['input']>;
  end_time?: InputMaybe<Scalars['Int']['input']>;
  entity_desc?: InputMaybe<Scalars['String']['input']>;
  entity_level?: InputMaybe<Scalars['Int']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  game_team_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ipl_id?: InputMaybe<Scalars['String']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Game_Entity_Sum_Fields = {
  __typename?: 'game_entity_sum_fields';
  category?: Maybe<Scalars['Int']['output']>;
  end_time?: Maybe<Scalars['Int']['output']>;
  entity_level?: Maybe<Scalars['Int']['output']>;
  game_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "game_entity" */
export type Game_Entity_Sum_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Game_Entity_Var_Pop_Fields = {
  __typename?: 'game_entity_var_pop_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game_entity" */
export type Game_Entity_Var_Pop_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Entity_Var_Samp_Fields = {
  __typename?: 'game_entity_var_samp_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game_entity" */
export type Game_Entity_Var_Samp_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Entity_Variance_Fields = {
  __typename?: 'game_entity_variance_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game_entity" */
export type Game_Entity_Variance_Order_By = {
  category?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  __typename?: 'game_max_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  chomper_version?: Maybe<Scalars['String']['output']>;
  file_version?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  mission_desc?: Maybe<Scalars['String']['output']>;
  mission_length?: Maybe<Scalars['Int']['output']>;
  mission_max_length?: Maybe<Scalars['Int']['output']>;
  mission_start?: Maybe<Scalars['timestamp']['output']>;
  mission_type?: Maybe<Scalars['String']['output']>;
  penalty?: Maybe<Scalars['Int']['output']>;
  program_version?: Maybe<Scalars['String']['output']>;
  tdf_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "game" */
export type Game_Max_Order_By = {
  center_id?: InputMaybe<Order_By>;
  chomper_version?: InputMaybe<Order_By>;
  file_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_desc?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  mission_start?: InputMaybe<Order_By>;
  mission_type?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
  program_version?: InputMaybe<Order_By>;
  tdf_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  __typename?: 'game_min_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  chomper_version?: Maybe<Scalars['String']['output']>;
  file_version?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  mission_desc?: Maybe<Scalars['String']['output']>;
  mission_length?: Maybe<Scalars['Int']['output']>;
  mission_max_length?: Maybe<Scalars['Int']['output']>;
  mission_start?: Maybe<Scalars['timestamp']['output']>;
  mission_type?: Maybe<Scalars['String']['output']>;
  penalty?: Maybe<Scalars['Int']['output']>;
  program_version?: Maybe<Scalars['String']['output']>;
  tdf_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "game" */
export type Game_Min_Order_By = {
  center_id?: InputMaybe<Order_By>;
  chomper_version?: InputMaybe<Order_By>;
  file_version?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_desc?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  mission_start?: InputMaybe<Order_By>;
  mission_type?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
  program_version?: InputMaybe<Order_By>;
  tdf_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game". */
export type Game_Order_By = {
  center?: InputMaybe<Center_Order_By>;
  center_id?: InputMaybe<Order_By>;
  chomper_version?: InputMaybe<Order_By>;
  file_version?: InputMaybe<Order_By>;
  game_actions_aggregate?: InputMaybe<Game_Action_Aggregate_Order_By>;
  game_tags_aggregate?: InputMaybe<Game_Tag_Aggregate_Order_By>;
  game_teams_aggregate?: InputMaybe<Game_Team_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  mission_desc?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  mission_start?: InputMaybe<Order_By>;
  mission_type?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
  program_version?: InputMaybe<Order_By>;
  tdf_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "game_results" */
export type Game_Results = {
  __typename?: 'game_results';
  center_id?: Maybe<Scalars['bigint']['output']>;
  event_id?: Maybe<Scalars['bigint']['output']>;
  game_datetime?: Maybe<Scalars['timestamptz']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  game_results_players?: Maybe<Players>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  player_name?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  scorecard_id?: Maybe<Scalars['bigint']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  won?: Maybe<Scalars['Int']['output']>;
};

/** order by aggregate values of table "game_results" */
export type Game_Results_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Results_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Results_Max_Order_By>;
  min?: InputMaybe<Game_Results_Min_Order_By>;
  stddev?: InputMaybe<Game_Results_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Results_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Results_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Results_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Results_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Results_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Results_Variance_Order_By>;
};

/** order by avg() on columns of table "game_results" */
export type Game_Results_Avg_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_results". All fields are combined with a logical 'AND'. */
export type Game_Results_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Results_Bool_Exp>>;
  _not?: InputMaybe<Game_Results_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Results_Bool_Exp>>;
  center_id?: InputMaybe<Bigint_Comparison_Exp>;
  event_id?: InputMaybe<Bigint_Comparison_Exp>;
  game_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  game_id?: InputMaybe<Bigint_Comparison_Exp>;
  game_results_players?: InputMaybe<Players_Bool_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
  player_name?: InputMaybe<String_Comparison_Exp>;
  result?: InputMaybe<String_Comparison_Exp>;
  scorecard_id?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  won?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "game_results" */
export type Game_Results_Max_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "game_results" */
export type Game_Results_Min_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game_results". */
export type Game_Results_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  game_results_players?: InputMaybe<Players_Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  result?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** select columns of table "game_results" */
export enum Game_Results_Select_Column {
  /** column name */
  CenterId = 'center_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  GameDatetime = 'game_datetime',
  /** column name */
  GameId = 'game_id',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  PlayerName = 'player_name',
  /** column name */
  Result = 'result',
  /** column name */
  ScorecardId = 'scorecard_id',
  /** column name */
  Type = 'type',
  /** column name */
  Won = 'won'
}

/** order by stddev() on columns of table "game_results" */
export type Game_Results_Stddev_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "game_results" */
export type Game_Results_Stddev_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "game_results" */
export type Game_Results_Stddev_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game_results" */
export type Game_Results_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Results_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Results_Stream_Cursor_Value_Input = {
  center_id?: InputMaybe<Scalars['bigint']['input']>;
  event_id?: InputMaybe<Scalars['bigint']['input']>;
  game_datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  game_id?: InputMaybe<Scalars['bigint']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
  player_name?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  scorecard_id?: InputMaybe<Scalars['bigint']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  won?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "game_results" */
export type Game_Results_Sum_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "game_results" */
export type Game_Results_Var_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "game_results" */
export type Game_Results_Var_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "game_results" */
export type Game_Results_Variance_Order_By = {
  center_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  scorecard_id?: InputMaybe<Order_By>;
  won?: InputMaybe<Order_By>;
};

/** select columns of table "game" */
export enum Game_Select_Column {
  /** column name */
  CenterId = 'center_id',
  /** column name */
  ChomperVersion = 'chomper_version',
  /** column name */
  FileVersion = 'file_version',
  /** column name */
  Id = 'id',
  /** column name */
  MissionDesc = 'mission_desc',
  /** column name */
  MissionLength = 'mission_length',
  /** column name */
  MissionMaxLength = 'mission_max_length',
  /** column name */
  MissionStart = 'mission_start',
  /** column name */
  MissionType = 'mission_type',
  /** column name */
  Penalty = 'penalty',
  /** column name */
  ProgramVersion = 'program_version',
  /** column name */
  TdfId = 'tdf_id'
}

/** aggregate stddev on columns */
export type Game_Stddev_Fields = {
  __typename?: 'game_stddev_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mission_length?: Maybe<Scalars['Float']['output']>;
  mission_max_length?: Maybe<Scalars['Float']['output']>;
  penalty?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game" */
export type Game_Stddev_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Stddev_Pop_Fields = {
  __typename?: 'game_stddev_pop_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mission_length?: Maybe<Scalars['Float']['output']>;
  mission_max_length?: Maybe<Scalars['Float']['output']>;
  penalty?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game" */
export type Game_Stddev_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Stddev_Samp_Fields = {
  __typename?: 'game_stddev_samp_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mission_length?: Maybe<Scalars['Float']['output']>;
  mission_max_length?: Maybe<Scalars['Float']['output']>;
  penalty?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game" */
export type Game_Stddev_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game" */
export type Game_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Stream_Cursor_Value_Input = {
  center_id?: InputMaybe<Scalars['bigint']['input']>;
  chomper_version?: InputMaybe<Scalars['String']['input']>;
  file_version?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  mission_desc?: InputMaybe<Scalars['String']['input']>;
  mission_length?: InputMaybe<Scalars['Int']['input']>;
  mission_max_length?: InputMaybe<Scalars['Int']['input']>;
  mission_start?: InputMaybe<Scalars['timestamp']['input']>;
  mission_type?: InputMaybe<Scalars['String']['input']>;
  penalty?: InputMaybe<Scalars['Int']['input']>;
  program_version?: InputMaybe<Scalars['String']['input']>;
  tdf_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Game_Sum_Fields = {
  __typename?: 'game_sum_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  mission_length?: Maybe<Scalars['Int']['output']>;
  mission_max_length?: Maybe<Scalars['Int']['output']>;
  penalty?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "game" */
export type Game_Sum_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** columns and relationships of "game_tag" */
export type Game_Tag = {
  __typename?: 'game_tag';
  /** An object relationship */
  game?: Maybe<Game>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  tag?: Maybe<Tag>;
  tag_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "game_tag" */
export type Game_Tag_Aggregate = {
  __typename?: 'game_tag_aggregate';
  aggregate?: Maybe<Game_Tag_Aggregate_Fields>;
  nodes: Array<Game_Tag>;
};

export type Game_Tag_Aggregate_Bool_Exp = {
  count?: InputMaybe<Game_Tag_Aggregate_Bool_Exp_Count>;
};

export type Game_Tag_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Tag_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game_tag" */
export type Game_Tag_Aggregate_Fields = {
  __typename?: 'game_tag_aggregate_fields';
  avg?: Maybe<Game_Tag_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Tag_Max_Fields>;
  min?: Maybe<Game_Tag_Min_Fields>;
  stddev?: Maybe<Game_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Tag_Sum_Fields>;
  var_pop?: Maybe<Game_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Tag_Var_Samp_Fields>;
  variance?: Maybe<Game_Tag_Variance_Fields>;
};


/** aggregate fields of "game_tag" */
export type Game_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_tag" */
export type Game_Tag_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Tag_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Tag_Max_Order_By>;
  min?: InputMaybe<Game_Tag_Min_Order_By>;
  stddev?: InputMaybe<Game_Tag_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Tag_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Tag_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Tag_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Tag_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Tag_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Game_Tag_Avg_Fields = {
  __typename?: 'game_tag_avg_fields';
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game_tag" */
export type Game_Tag_Avg_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_tag". All fields are combined with a logical 'AND'. */
export type Game_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Tag_Bool_Exp>>;
  _not?: InputMaybe<Game_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Tag_Bool_Exp>>;
  game?: InputMaybe<Game_Bool_Exp>;
  game_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  tag?: InputMaybe<Tag_Bool_Exp>;
  tag_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Game_Tag_Max_Fields = {
  __typename?: 'game_tag_max_fields';
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tag_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "game_tag" */
export type Game_Tag_Max_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Tag_Min_Fields = {
  __typename?: 'game_tag_min_fields';
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tag_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "game_tag" */
export type Game_Tag_Min_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game_tag". */
export type Game_Tag_Order_By = {
  game?: InputMaybe<Game_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tag_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** select columns of table "game_tag" */
export enum Game_Tag_Select_Column {
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id'
}

/** aggregate stddev on columns */
export type Game_Tag_Stddev_Fields = {
  __typename?: 'game_tag_stddev_fields';
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game_tag" */
export type Game_Tag_Stddev_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Tag_Stddev_Pop_Fields = {
  __typename?: 'game_tag_stddev_pop_fields';
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game_tag" */
export type Game_Tag_Stddev_Pop_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Tag_Stddev_Samp_Fields = {
  __typename?: 'game_tag_stddev_samp_fields';
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game_tag" */
export type Game_Tag_Stddev_Samp_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game_tag" */
export type Game_Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Tag_Stream_Cursor_Value_Input = {
  game_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  tag_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Game_Tag_Sum_Fields = {
  __typename?: 'game_tag_sum_fields';
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tag_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "game_tag" */
export type Game_Tag_Sum_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Game_Tag_Var_Pop_Fields = {
  __typename?: 'game_tag_var_pop_fields';
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game_tag" */
export type Game_Tag_Var_Pop_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Tag_Var_Samp_Fields = {
  __typename?: 'game_tag_var_samp_fields';
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game_tag" */
export type Game_Tag_Var_Samp_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Tag_Variance_Fields = {
  __typename?: 'game_tag_variance_fields';
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game_tag" */
export type Game_Tag_Variance_Order_By = {
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "game_team" */
export type Game_Team = {
  __typename?: 'game_team';
  color_desc: Scalars['String']['output'];
  color_enum: Scalars['Int']['output'];
  elim_bonus: Scalars['Int']['output'];
  /** An object relationship */
  game: Game;
  /** An array relationship */
  game_entities: Array<Game_Entity>;
  /** An aggregate relationship */
  game_entities_aggregate: Game_Entity_Aggregate;
  game_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  is_eliminated: Scalars['Boolean']['output'];
  opp_eliminated: Scalars['Boolean']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  team_desc?: Maybe<Scalars['String']['output']>;
  team_index: Scalars['Int']['output'];
  ui_color?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "game_team" */
export type Game_TeamGame_EntitiesArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


/** columns and relationships of "game_team" */
export type Game_TeamGame_Entities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};

/** aggregated selection of "game_team" */
export type Game_Team_Aggregate = {
  __typename?: 'game_team_aggregate';
  aggregate?: Maybe<Game_Team_Aggregate_Fields>;
  nodes: Array<Game_Team>;
};

export type Game_Team_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Game_Team_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Game_Team_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Game_Team_Aggregate_Bool_Exp_Count>;
};

export type Game_Team_Aggregate_Bool_Exp_Bool_And = {
  arguments: Game_Team_Select_Column_Game_Team_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Team_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Game_Team_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Game_Team_Select_Column_Game_Team_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Team_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Game_Team_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Team_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "game_team" */
export type Game_Team_Aggregate_Fields = {
  __typename?: 'game_team_aggregate_fields';
  avg?: Maybe<Game_Team_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Team_Max_Fields>;
  min?: Maybe<Game_Team_Min_Fields>;
  stddev?: Maybe<Game_Team_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Team_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Team_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Team_Sum_Fields>;
  var_pop?: Maybe<Game_Team_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Team_Var_Samp_Fields>;
  variance?: Maybe<Game_Team_Variance_Fields>;
};


/** aggregate fields of "game_team" */
export type Game_Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_team" */
export type Game_Team_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Team_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Team_Max_Order_By>;
  min?: InputMaybe<Game_Team_Min_Order_By>;
  stddev?: InputMaybe<Game_Team_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Team_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Team_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Team_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Team_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Team_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Team_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Game_Team_Avg_Fields = {
  __typename?: 'game_team_avg_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game_team" */
export type Game_Team_Avg_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_team". All fields are combined with a logical 'AND'. */
export type Game_Team_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Team_Bool_Exp>>;
  _not?: InputMaybe<Game_Team_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Team_Bool_Exp>>;
  color_desc?: InputMaybe<String_Comparison_Exp>;
  color_enum?: InputMaybe<Int_Comparison_Exp>;
  elim_bonus?: InputMaybe<Int_Comparison_Exp>;
  game?: InputMaybe<Game_Bool_Exp>;
  game_entities?: InputMaybe<Game_Entity_Bool_Exp>;
  game_entities_aggregate?: InputMaybe<Game_Entity_Aggregate_Bool_Exp>;
  game_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  opp_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  team_desc?: InputMaybe<String_Comparison_Exp>;
  team_index?: InputMaybe<Int_Comparison_Exp>;
  ui_color?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Game_Team_Max_Fields = {
  __typename?: 'game_team_max_fields';
  color_desc?: Maybe<Scalars['String']['output']>;
  color_enum?: Maybe<Scalars['Int']['output']>;
  elim_bonus?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_desc?: Maybe<Scalars['String']['output']>;
  team_index?: Maybe<Scalars['Int']['output']>;
  ui_color?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "game_team" */
export type Game_Team_Max_Order_By = {
  color_desc?: InputMaybe<Order_By>;
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_desc?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  ui_color?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Team_Min_Fields = {
  __typename?: 'game_team_min_fields';
  color_desc?: Maybe<Scalars['String']['output']>;
  color_enum?: Maybe<Scalars['Int']['output']>;
  elim_bonus?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_desc?: Maybe<Scalars['String']['output']>;
  team_index?: Maybe<Scalars['Int']['output']>;
  ui_color?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "game_team" */
export type Game_Team_Min_Order_By = {
  color_desc?: InputMaybe<Order_By>;
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_desc?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  ui_color?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "game_team". */
export type Game_Team_Order_By = {
  color_desc?: InputMaybe<Order_By>;
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game?: InputMaybe<Game_Order_By>;
  game_entities_aggregate?: InputMaybe<Game_Entity_Aggregate_Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_eliminated?: InputMaybe<Order_By>;
  opp_eliminated?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  team_desc?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  ui_color?: InputMaybe<Order_By>;
};

/** select columns of table "game_team" */
export enum Game_Team_Select_Column {
  /** column name */
  ColorDesc = 'color_desc',
  /** column name */
  ColorEnum = 'color_enum',
  /** column name */
  ElimBonus = 'elim_bonus',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  OppEliminated = 'opp_eliminated',
  /** column name */
  TeamDesc = 'team_desc',
  /** column name */
  TeamIndex = 'team_index',
  /** column name */
  UiColor = 'ui_color'
}

/** select "game_team_aggregate_bool_exp_bool_and_arguments_columns" columns of table "game_team" */
export enum Game_Team_Select_Column_Game_Team_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  OppEliminated = 'opp_eliminated'
}

/** select "game_team_aggregate_bool_exp_bool_or_arguments_columns" columns of table "game_team" */
export enum Game_Team_Select_Column_Game_Team_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  OppEliminated = 'opp_eliminated'
}

/** aggregate stddev on columns */
export type Game_Team_Stddev_Fields = {
  __typename?: 'game_team_stddev_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game_team" */
export type Game_Team_Stddev_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Team_Stddev_Pop_Fields = {
  __typename?: 'game_team_stddev_pop_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game_team" */
export type Game_Team_Stddev_Pop_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Team_Stddev_Samp_Fields = {
  __typename?: 'game_team_stddev_samp_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game_team" */
export type Game_Team_Stddev_Samp_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game_team" */
export type Game_Team_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Team_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Team_Stream_Cursor_Value_Input = {
  color_desc?: InputMaybe<Scalars['String']['input']>;
  color_enum?: InputMaybe<Scalars['Int']['input']>;
  elim_bonus?: InputMaybe<Scalars['Int']['input']>;
  game_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  opp_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  team_desc?: InputMaybe<Scalars['String']['input']>;
  team_index?: InputMaybe<Scalars['Int']['input']>;
  ui_color?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Game_Team_Sum_Fields = {
  __typename?: 'game_team_sum_fields';
  color_enum?: Maybe<Scalars['Int']['output']>;
  elim_bonus?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "game_team" */
export type Game_Team_Sum_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Game_Team_Var_Pop_Fields = {
  __typename?: 'game_team_var_pop_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game_team" */
export type Game_Team_Var_Pop_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Team_Var_Samp_Fields = {
  __typename?: 'game_team_var_samp_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game_team" */
export type Game_Team_Var_Samp_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Team_Variance_Fields = {
  __typename?: 'game_team_variance_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game_team" */
export type Game_Team_Variance_Order_By = {
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Game_Var_Pop_Fields = {
  __typename?: 'game_var_pop_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mission_length?: Maybe<Scalars['Float']['output']>;
  mission_max_length?: Maybe<Scalars['Float']['output']>;
  penalty?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game" */
export type Game_Var_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Var_Samp_Fields = {
  __typename?: 'game_var_samp_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mission_length?: Maybe<Scalars['Float']['output']>;
  mission_max_length?: Maybe<Scalars['Float']['output']>;
  penalty?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game" */
export type Game_Var_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Variance_Fields = {
  __typename?: 'game_variance_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mission_length?: Maybe<Scalars['Float']['output']>;
  mission_max_length?: Maybe<Scalars['Float']['output']>;
  penalty?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game" */
export type Game_Variance_Order_By = {
  center_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mission_length?: InputMaybe<Order_By>;
  mission_max_length?: InputMaybe<Order_By>;
  penalty?: InputMaybe<Order_By>;
};

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  /** An object relationship */
  center: Centers;
  center_id: Scalars['bigint']['output'];
  created?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  event?: Maybe<Events>;
  event_id?: Maybe<Scalars['bigint']['output']>;
  game_datetime: Scalars['timestamptz']['output'];
  game_description: Scalars['String']['output'];
  game_length?: Maybe<Scalars['Int']['output']>;
  game_name: Scalars['String']['output'];
  green_adj: Scalars['Int']['output'];
  green_eliminated: Scalars['smallint']['output'];
  green_score?: Maybe<Scalars['Int']['output']>;
  green_team_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  league_game?: Maybe<Scalars['smallint']['output']>;
  league_match?: Maybe<Scalars['smallint']['output']>;
  league_round?: Maybe<Scalars['smallint']['output']>;
  match_id?: Maybe<Scalars['bigint']['output']>;
  modified?: Maybe<Scalars['timestamp']['output']>;
  pdf_id?: Maybe<Scalars['numeric']['output']>;
  red_adj: Scalars['Int']['output'];
  red_eliminated: Scalars['smallint']['output'];
  red_score?: Maybe<Scalars['Int']['output']>;
  red_team_id?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  scorecards: Array<Scorecards>;
  tdf_key?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  winner?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "games" */
export type GamesScorecardsArgs = {
  distinct_on?: InputMaybe<Array<Scorecards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scorecards_Order_By>>;
  where?: InputMaybe<Scorecards_Bool_Exp>;
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

export type Games_Aggregate_Bool_Exp = {
  count?: InputMaybe<Games_Aggregate_Bool_Exp_Count>;
};

export type Games_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Games_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  avg?: Maybe<Games_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};


/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "games" */
export type Games_Aggregate_Order_By = {
  avg?: InputMaybe<Games_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Games_Max_Order_By>;
  min?: InputMaybe<Games_Min_Order_By>;
  stddev?: InputMaybe<Games_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Games_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Games_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Games_Sum_Order_By>;
  var_pop?: InputMaybe<Games_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Games_Var_Samp_Order_By>;
  variance?: InputMaybe<Games_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: 'games_avg_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Float']['output']>;
  game_length?: Maybe<Scalars['Float']['output']>;
  green_adj?: Maybe<Scalars['Float']['output']>;
  green_eliminated?: Maybe<Scalars['Float']['output']>;
  green_score?: Maybe<Scalars['Float']['output']>;
  green_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  league_game?: Maybe<Scalars['Float']['output']>;
  league_match?: Maybe<Scalars['Float']['output']>;
  league_round?: Maybe<Scalars['Float']['output']>;
  match_id?: Maybe<Scalars['Float']['output']>;
  pdf_id?: Maybe<Scalars['Float']['output']>;
  red_adj?: Maybe<Scalars['Float']['output']>;
  red_eliminated?: Maybe<Scalars['Float']['output']>;
  red_score?: Maybe<Scalars['Float']['output']>;
  red_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "games" */
export type Games_Avg_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: InputMaybe<Array<Games_Bool_Exp>>;
  _not?: InputMaybe<Games_Bool_Exp>;
  _or?: InputMaybe<Array<Games_Bool_Exp>>;
  center?: InputMaybe<Centers_Bool_Exp>;
  center_id?: InputMaybe<Bigint_Comparison_Exp>;
  created?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Bigint_Comparison_Exp>;
  game_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  game_description?: InputMaybe<String_Comparison_Exp>;
  game_length?: InputMaybe<Int_Comparison_Exp>;
  game_name?: InputMaybe<String_Comparison_Exp>;
  green_adj?: InputMaybe<Int_Comparison_Exp>;
  green_eliminated?: InputMaybe<Smallint_Comparison_Exp>;
  green_score?: InputMaybe<Int_Comparison_Exp>;
  green_team_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  league_game?: InputMaybe<Smallint_Comparison_Exp>;
  league_match?: InputMaybe<Smallint_Comparison_Exp>;
  league_round?: InputMaybe<Smallint_Comparison_Exp>;
  match_id?: InputMaybe<Bigint_Comparison_Exp>;
  modified?: InputMaybe<Timestamp_Comparison_Exp>;
  pdf_id?: InputMaybe<Numeric_Comparison_Exp>;
  red_adj?: InputMaybe<Int_Comparison_Exp>;
  red_eliminated?: InputMaybe<Smallint_Comparison_Exp>;
  red_score?: InputMaybe<Int_Comparison_Exp>;
  red_team_id?: InputMaybe<Bigint_Comparison_Exp>;
  scorecards?: InputMaybe<Scorecards_Bool_Exp>;
  tdf_key?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  winner?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  event_id?: Maybe<Scalars['bigint']['output']>;
  game_datetime?: Maybe<Scalars['timestamptz']['output']>;
  game_description?: Maybe<Scalars['String']['output']>;
  game_length?: Maybe<Scalars['Int']['output']>;
  game_name?: Maybe<Scalars['String']['output']>;
  green_adj?: Maybe<Scalars['Int']['output']>;
  green_eliminated?: Maybe<Scalars['smallint']['output']>;
  green_score?: Maybe<Scalars['Int']['output']>;
  green_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  league_game?: Maybe<Scalars['smallint']['output']>;
  league_match?: Maybe<Scalars['smallint']['output']>;
  league_round?: Maybe<Scalars['smallint']['output']>;
  match_id?: Maybe<Scalars['bigint']['output']>;
  modified?: Maybe<Scalars['timestamp']['output']>;
  pdf_id?: Maybe<Scalars['numeric']['output']>;
  red_adj?: Maybe<Scalars['Int']['output']>;
  red_eliminated?: Maybe<Scalars['smallint']['output']>;
  red_score?: Maybe<Scalars['Int']['output']>;
  red_team_id?: Maybe<Scalars['bigint']['output']>;
  tdf_key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  winner?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "games" */
export type Games_Max_Order_By = {
  center_id?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_description?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  game_name?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
  tdf_key?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  created?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  event_id?: Maybe<Scalars['bigint']['output']>;
  game_datetime?: Maybe<Scalars['timestamptz']['output']>;
  game_description?: Maybe<Scalars['String']['output']>;
  game_length?: Maybe<Scalars['Int']['output']>;
  game_name?: Maybe<Scalars['String']['output']>;
  green_adj?: Maybe<Scalars['Int']['output']>;
  green_eliminated?: Maybe<Scalars['smallint']['output']>;
  green_score?: Maybe<Scalars['Int']['output']>;
  green_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  league_game?: Maybe<Scalars['smallint']['output']>;
  league_match?: Maybe<Scalars['smallint']['output']>;
  league_round?: Maybe<Scalars['smallint']['output']>;
  match_id?: Maybe<Scalars['bigint']['output']>;
  modified?: Maybe<Scalars['timestamp']['output']>;
  pdf_id?: Maybe<Scalars['numeric']['output']>;
  red_adj?: Maybe<Scalars['Int']['output']>;
  red_eliminated?: Maybe<Scalars['smallint']['output']>;
  red_score?: Maybe<Scalars['Int']['output']>;
  red_team_id?: Maybe<Scalars['bigint']['output']>;
  tdf_key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  winner?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "games" */
export type Games_Min_Order_By = {
  center_id?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_description?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  game_name?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
  tdf_key?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "games". */
export type Games_Order_By = {
  center?: InputMaybe<Centers_Order_By>;
  center_id?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_description?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  game_name?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
  scorecards_aggregate?: InputMaybe<Scorecards_Aggregate_Order_By>;
  tdf_key?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  winner?: InputMaybe<Order_By>;
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  CenterId = 'center_id',
  /** column name */
  Created = 'created',
  /** column name */
  Duration = 'duration',
  /** column name */
  EventId = 'event_id',
  /** column name */
  GameDatetime = 'game_datetime',
  /** column name */
  GameDescription = 'game_description',
  /** column name */
  GameLength = 'game_length',
  /** column name */
  GameName = 'game_name',
  /** column name */
  GreenAdj = 'green_adj',
  /** column name */
  GreenEliminated = 'green_eliminated',
  /** column name */
  GreenScore = 'green_score',
  /** column name */
  GreenTeamId = 'green_team_id',
  /** column name */
  Id = 'id',
  /** column name */
  LeagueGame = 'league_game',
  /** column name */
  LeagueMatch = 'league_match',
  /** column name */
  LeagueRound = 'league_round',
  /** column name */
  MatchId = 'match_id',
  /** column name */
  Modified = 'modified',
  /** column name */
  PdfId = 'pdf_id',
  /** column name */
  RedAdj = 'red_adj',
  /** column name */
  RedEliminated = 'red_eliminated',
  /** column name */
  RedScore = 'red_score',
  /** column name */
  RedTeamId = 'red_team_id',
  /** column name */
  TdfKey = 'tdf_key',
  /** column name */
  Type = 'type',
  /** column name */
  Winner = 'winner'
}

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: 'games_stddev_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Float']['output']>;
  game_length?: Maybe<Scalars['Float']['output']>;
  green_adj?: Maybe<Scalars['Float']['output']>;
  green_eliminated?: Maybe<Scalars['Float']['output']>;
  green_score?: Maybe<Scalars['Float']['output']>;
  green_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  league_game?: Maybe<Scalars['Float']['output']>;
  league_match?: Maybe<Scalars['Float']['output']>;
  league_round?: Maybe<Scalars['Float']['output']>;
  match_id?: Maybe<Scalars['Float']['output']>;
  pdf_id?: Maybe<Scalars['Float']['output']>;
  red_adj?: Maybe<Scalars['Float']['output']>;
  red_eliminated?: Maybe<Scalars['Float']['output']>;
  red_score?: Maybe<Scalars['Float']['output']>;
  red_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "games" */
export type Games_Stddev_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: 'games_stddev_pop_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Float']['output']>;
  game_length?: Maybe<Scalars['Float']['output']>;
  green_adj?: Maybe<Scalars['Float']['output']>;
  green_eliminated?: Maybe<Scalars['Float']['output']>;
  green_score?: Maybe<Scalars['Float']['output']>;
  green_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  league_game?: Maybe<Scalars['Float']['output']>;
  league_match?: Maybe<Scalars['Float']['output']>;
  league_round?: Maybe<Scalars['Float']['output']>;
  match_id?: Maybe<Scalars['Float']['output']>;
  pdf_id?: Maybe<Scalars['Float']['output']>;
  red_adj?: Maybe<Scalars['Float']['output']>;
  red_eliminated?: Maybe<Scalars['Float']['output']>;
  red_score?: Maybe<Scalars['Float']['output']>;
  red_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "games" */
export type Games_Stddev_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: 'games_stddev_samp_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Float']['output']>;
  game_length?: Maybe<Scalars['Float']['output']>;
  green_adj?: Maybe<Scalars['Float']['output']>;
  green_eliminated?: Maybe<Scalars['Float']['output']>;
  green_score?: Maybe<Scalars['Float']['output']>;
  green_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  league_game?: Maybe<Scalars['Float']['output']>;
  league_match?: Maybe<Scalars['Float']['output']>;
  league_round?: Maybe<Scalars['Float']['output']>;
  match_id?: Maybe<Scalars['Float']['output']>;
  pdf_id?: Maybe<Scalars['Float']['output']>;
  red_adj?: Maybe<Scalars['Float']['output']>;
  red_eliminated?: Maybe<Scalars['Float']['output']>;
  red_score?: Maybe<Scalars['Float']['output']>;
  red_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "games" */
export type Games_Stddev_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "games" */
export type Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Games_Stream_Cursor_Value_Input = {
  center_id?: InputMaybe<Scalars['bigint']['input']>;
  created?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['bigint']['input']>;
  game_datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  game_description?: InputMaybe<Scalars['String']['input']>;
  game_length?: InputMaybe<Scalars['Int']['input']>;
  game_name?: InputMaybe<Scalars['String']['input']>;
  green_adj?: InputMaybe<Scalars['Int']['input']>;
  green_eliminated?: InputMaybe<Scalars['smallint']['input']>;
  green_score?: InputMaybe<Scalars['Int']['input']>;
  green_team_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  league_game?: InputMaybe<Scalars['smallint']['input']>;
  league_match?: InputMaybe<Scalars['smallint']['input']>;
  league_round?: InputMaybe<Scalars['smallint']['input']>;
  match_id?: InputMaybe<Scalars['bigint']['input']>;
  modified?: InputMaybe<Scalars['timestamp']['input']>;
  pdf_id?: InputMaybe<Scalars['numeric']['input']>;
  red_adj?: InputMaybe<Scalars['Int']['input']>;
  red_eliminated?: InputMaybe<Scalars['smallint']['input']>;
  red_score?: InputMaybe<Scalars['Int']['input']>;
  red_team_id?: InputMaybe<Scalars['bigint']['input']>;
  tdf_key?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  winner?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: 'games_sum_fields';
  center_id?: Maybe<Scalars['bigint']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  event_id?: Maybe<Scalars['bigint']['output']>;
  game_length?: Maybe<Scalars['Int']['output']>;
  green_adj?: Maybe<Scalars['Int']['output']>;
  green_eliminated?: Maybe<Scalars['smallint']['output']>;
  green_score?: Maybe<Scalars['Int']['output']>;
  green_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  league_game?: Maybe<Scalars['smallint']['output']>;
  league_match?: Maybe<Scalars['smallint']['output']>;
  league_round?: Maybe<Scalars['smallint']['output']>;
  match_id?: Maybe<Scalars['bigint']['output']>;
  pdf_id?: Maybe<Scalars['numeric']['output']>;
  red_adj?: Maybe<Scalars['Int']['output']>;
  red_eliminated?: Maybe<Scalars['smallint']['output']>;
  red_score?: Maybe<Scalars['Int']['output']>;
  red_team_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "games" */
export type Games_Sum_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: 'games_var_pop_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Float']['output']>;
  game_length?: Maybe<Scalars['Float']['output']>;
  green_adj?: Maybe<Scalars['Float']['output']>;
  green_eliminated?: Maybe<Scalars['Float']['output']>;
  green_score?: Maybe<Scalars['Float']['output']>;
  green_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  league_game?: Maybe<Scalars['Float']['output']>;
  league_match?: Maybe<Scalars['Float']['output']>;
  league_round?: Maybe<Scalars['Float']['output']>;
  match_id?: Maybe<Scalars['Float']['output']>;
  pdf_id?: Maybe<Scalars['Float']['output']>;
  red_adj?: Maybe<Scalars['Float']['output']>;
  red_eliminated?: Maybe<Scalars['Float']['output']>;
  red_score?: Maybe<Scalars['Float']['output']>;
  red_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "games" */
export type Games_Var_Pop_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: 'games_var_samp_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Float']['output']>;
  game_length?: Maybe<Scalars['Float']['output']>;
  green_adj?: Maybe<Scalars['Float']['output']>;
  green_eliminated?: Maybe<Scalars['Float']['output']>;
  green_score?: Maybe<Scalars['Float']['output']>;
  green_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  league_game?: Maybe<Scalars['Float']['output']>;
  league_match?: Maybe<Scalars['Float']['output']>;
  league_round?: Maybe<Scalars['Float']['output']>;
  match_id?: Maybe<Scalars['Float']['output']>;
  pdf_id?: Maybe<Scalars['Float']['output']>;
  red_adj?: Maybe<Scalars['Float']['output']>;
  red_eliminated?: Maybe<Scalars['Float']['output']>;
  red_score?: Maybe<Scalars['Float']['output']>;
  red_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "games" */
export type Games_Var_Samp_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: 'games_variance_fields';
  center_id?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Float']['output']>;
  game_length?: Maybe<Scalars['Float']['output']>;
  green_adj?: Maybe<Scalars['Float']['output']>;
  green_eliminated?: Maybe<Scalars['Float']['output']>;
  green_score?: Maybe<Scalars['Float']['output']>;
  green_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  league_game?: Maybe<Scalars['Float']['output']>;
  league_match?: Maybe<Scalars['Float']['output']>;
  league_round?: Maybe<Scalars['Float']['output']>;
  match_id?: Maybe<Scalars['Float']['output']>;
  pdf_id?: Maybe<Scalars['Float']['output']>;
  red_adj?: Maybe<Scalars['Float']['output']>;
  red_eliminated?: Maybe<Scalars['Float']['output']>;
  red_score?: Maybe<Scalars['Float']['output']>;
  red_team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "games" */
export type Games_Variance_Order_By = {
  center_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_length?: InputMaybe<Order_By>;
  green_adj?: InputMaybe<Order_By>;
  green_eliminated?: InputMaybe<Order_By>;
  green_score?: InputMaybe<Order_By>;
  green_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  league_game?: InputMaybe<Order_By>;
  league_match?: InputMaybe<Order_By>;
  league_round?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  red_adj?: InputMaybe<Order_By>;
  red_eliminated?: InputMaybe<Order_By>;
  red_score?: InputMaybe<Order_By>;
  red_team_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "mvp" */
export type Mvp = {
  __typename?: 'mvp';
  /** An object relationship */
  game_entity_state?: Maybe<Game_Entity_State>;
  game_entity_state_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['bigint']['output'];
  mvp?: Maybe<Scalars['float8']['output']>;
  mvp_details?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  mvp_model?: Maybe<Mvp_Model>;
  mvp_model_id?: Maybe<Scalars['bigint']['output']>;
};


/** columns and relationships of "mvp" */
export type MvpMvp_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mvp" */
export type Mvp_Aggregate = {
  __typename?: 'mvp_aggregate';
  aggregate?: Maybe<Mvp_Aggregate_Fields>;
  nodes: Array<Mvp>;
};

export type Mvp_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Mvp_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Mvp_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Mvp_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Mvp_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Mvp_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Mvp_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Mvp_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Mvp_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Mvp_Aggregate_Bool_Exp_Var_Samp>;
};

export type Mvp_Aggregate_Bool_Exp_Avg = {
  arguments: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Corr = {
  arguments: Mvp_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Mvp_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Mvp_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Mvp_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Mvp_Aggregate_Bool_Exp_Max = {
  arguments: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Min = {
  arguments: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Sum = {
  arguments: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Mvp_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mvp_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "mvp" */
export type Mvp_Aggregate_Fields = {
  __typename?: 'mvp_aggregate_fields';
  avg?: Maybe<Mvp_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mvp_Max_Fields>;
  min?: Maybe<Mvp_Min_Fields>;
  stddev?: Maybe<Mvp_Stddev_Fields>;
  stddev_pop?: Maybe<Mvp_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mvp_Stddev_Samp_Fields>;
  sum?: Maybe<Mvp_Sum_Fields>;
  var_pop?: Maybe<Mvp_Var_Pop_Fields>;
  var_samp?: Maybe<Mvp_Var_Samp_Fields>;
  variance?: Maybe<Mvp_Variance_Fields>;
};


/** aggregate fields of "mvp" */
export type Mvp_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mvp_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "mvp" */
export type Mvp_Aggregate_Order_By = {
  avg?: InputMaybe<Mvp_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Mvp_Max_Order_By>;
  min?: InputMaybe<Mvp_Min_Order_By>;
  stddev?: InputMaybe<Mvp_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Mvp_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Mvp_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Mvp_Sum_Order_By>;
  var_pop?: InputMaybe<Mvp_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Mvp_Var_Samp_Order_By>;
  variance?: InputMaybe<Mvp_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Mvp_Avg_Fields = {
  __typename?: 'mvp_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  mvp_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "mvp" */
export type Mvp_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mvp". All fields are combined with a logical 'AND'. */
export type Mvp_Bool_Exp = {
  _and?: InputMaybe<Array<Mvp_Bool_Exp>>;
  _not?: InputMaybe<Mvp_Bool_Exp>;
  _or?: InputMaybe<Array<Mvp_Bool_Exp>>;
  game_entity_state?: InputMaybe<Game_Entity_State_Bool_Exp>;
  game_entity_state_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  mvp?: InputMaybe<Float8_Comparison_Exp>;
  mvp_details?: InputMaybe<Jsonb_Comparison_Exp>;
  mvp_model?: InputMaybe<Mvp_Model_Bool_Exp>;
  mvp_model_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mvp_Max_Fields = {
  __typename?: 'mvp_max_fields';
  game_entity_state_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  mvp_model_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "mvp" */
export type Mvp_Max_Order_By = {
  game_entity_state_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Mvp_Min_Fields = {
  __typename?: 'mvp_min_fields';
  game_entity_state_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  mvp_model_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "mvp" */
export type Mvp_Min_Order_By = {
  game_entity_state_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "mvp_model" */
export type Mvp_Model = {
  __typename?: 'mvp_model';
  id: Scalars['bigint']['output'];
  model?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  mvps: Array<Mvp>;
  /** An aggregate relationship */
  mvps_aggregate: Mvp_Aggregate;
  name?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mvp_model" */
export type Mvp_ModelModelArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "mvp_model" */
export type Mvp_ModelMvpsArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};


/** columns and relationships of "mvp_model" */
export type Mvp_ModelMvps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};

/** aggregated selection of "mvp_model" */
export type Mvp_Model_Aggregate = {
  __typename?: 'mvp_model_aggregate';
  aggregate?: Maybe<Mvp_Model_Aggregate_Fields>;
  nodes: Array<Mvp_Model>;
};

/** aggregate fields of "mvp_model" */
export type Mvp_Model_Aggregate_Fields = {
  __typename?: 'mvp_model_aggregate_fields';
  avg?: Maybe<Mvp_Model_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mvp_Model_Max_Fields>;
  min?: Maybe<Mvp_Model_Min_Fields>;
  stddev?: Maybe<Mvp_Model_Stddev_Fields>;
  stddev_pop?: Maybe<Mvp_Model_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mvp_Model_Stddev_Samp_Fields>;
  sum?: Maybe<Mvp_Model_Sum_Fields>;
  var_pop?: Maybe<Mvp_Model_Var_Pop_Fields>;
  var_samp?: Maybe<Mvp_Model_Var_Samp_Fields>;
  variance?: Maybe<Mvp_Model_Variance_Fields>;
};


/** aggregate fields of "mvp_model" */
export type Mvp_Model_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mvp_Model_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mvp_Model_Avg_Fields = {
  __typename?: 'mvp_model_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mvp_model". All fields are combined with a logical 'AND'. */
export type Mvp_Model_Bool_Exp = {
  _and?: InputMaybe<Array<Mvp_Model_Bool_Exp>>;
  _not?: InputMaybe<Mvp_Model_Bool_Exp>;
  _or?: InputMaybe<Array<Mvp_Model_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  model?: InputMaybe<Jsonb_Comparison_Exp>;
  mvps?: InputMaybe<Mvp_Bool_Exp>;
  mvps_aggregate?: InputMaybe<Mvp_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mvp_Model_Max_Fields = {
  __typename?: 'mvp_model_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mvp_Model_Min_Fields = {
  __typename?: 'mvp_model_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mvp_model". */
export type Mvp_Model_Order_By = {
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  mvps_aggregate?: InputMaybe<Mvp_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "mvp_model" */
export enum Mvp_Model_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Model = 'model',
  /** column name */
  Name = 'name'
}

/** aggregate stddev on columns */
export type Mvp_Model_Stddev_Fields = {
  __typename?: 'mvp_model_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mvp_Model_Stddev_Pop_Fields = {
  __typename?: 'mvp_model_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mvp_Model_Stddev_Samp_Fields = {
  __typename?: 'mvp_model_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mvp_model" */
export type Mvp_Model_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mvp_Model_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mvp_Model_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  model?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mvp_Model_Sum_Fields = {
  __typename?: 'mvp_model_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Mvp_Model_Var_Pop_Fields = {
  __typename?: 'mvp_model_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mvp_Model_Var_Samp_Fields = {
  __typename?: 'mvp_model_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mvp_Model_Variance_Fields = {
  __typename?: 'mvp_model_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Ordering options when selecting data from "mvp". */
export type Mvp_Order_By = {
  game_entity_state?: InputMaybe<Game_Entity_State_Order_By>;
  game_entity_state_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_details?: InputMaybe<Order_By>;
  mvp_model?: InputMaybe<Mvp_Model_Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** select columns of table "mvp" */
export enum Mvp_Select_Column {
  /** column name */
  GameEntityStateId = 'game_entity_state_id',
  /** column name */
  Id = 'id',
  /** column name */
  Mvp = 'mvp',
  /** column name */
  MvpDetails = 'mvp_details',
  /** column name */
  MvpModelId = 'mvp_model_id'
}

/** select "mvp_aggregate_bool_exp_avg_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** select "mvp_aggregate_bool_exp_corr_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** select "mvp_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** select "mvp_aggregate_bool_exp_max_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** select "mvp_aggregate_bool_exp_min_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** select "mvp_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** select "mvp_aggregate_bool_exp_sum_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** select "mvp_aggregate_bool_exp_var_samp_arguments_columns" columns of table "mvp" */
export enum Mvp_Select_Column_Mvp_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Mvp = 'mvp'
}

/** aggregate stddev on columns */
export type Mvp_Stddev_Fields = {
  __typename?: 'mvp_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  mvp_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "mvp" */
export type Mvp_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Mvp_Stddev_Pop_Fields = {
  __typename?: 'mvp_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  mvp_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "mvp" */
export type Mvp_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Mvp_Stddev_Samp_Fields = {
  __typename?: 'mvp_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  mvp_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "mvp" */
export type Mvp_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "mvp" */
export type Mvp_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mvp_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mvp_Stream_Cursor_Value_Input = {
  game_entity_state_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  mvp?: InputMaybe<Scalars['float8']['input']>;
  mvp_details?: InputMaybe<Scalars['jsonb']['input']>;
  mvp_model_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Mvp_Sum_Fields = {
  __typename?: 'mvp_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  mvp_model_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "mvp" */
export type Mvp_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Mvp_Var_Pop_Fields = {
  __typename?: 'mvp_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  mvp_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "mvp" */
export type Mvp_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Mvp_Var_Samp_Fields = {
  __typename?: 'mvp_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  mvp_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "mvp" */
export type Mvp_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Mvp_Variance_Fields = {
  __typename?: 'mvp_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  mvp_model_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "mvp" */
export type Mvp_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_model_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "player" */
export type Player = {
  __typename?: 'player';
  current_alias?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  game_entities: Array<Game_Entity>;
  /** An aggregate relationship */
  game_entities_aggregate: Game_Entity_Aggregate;
  id: Scalars['bigint']['output'];
  ipl_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  player_aliases: Array<Player_Alias>;
  /** An aggregate relationship */
  player_aliases_aggregate: Player_Alias_Aggregate;
};


/** columns and relationships of "player" */
export type PlayerGame_EntitiesArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerGame_Entities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_AliasesArgs = {
  distinct_on?: InputMaybe<Array<Player_Alias_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Alias_Order_By>>;
  where?: InputMaybe<Player_Alias_Bool_Exp>;
};


/** columns and relationships of "player" */
export type PlayerPlayer_Aliases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Alias_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Alias_Order_By>>;
  where?: InputMaybe<Player_Alias_Bool_Exp>;
};

/** aggregated selection of "player" */
export type Player_Aggregate = {
  __typename?: 'player_aggregate';
  aggregate?: Maybe<Player_Aggregate_Fields>;
  nodes: Array<Player>;
};

/** aggregate fields of "player" */
export type Player_Aggregate_Fields = {
  __typename?: 'player_aggregate_fields';
  avg?: Maybe<Player_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Max_Fields>;
  min?: Maybe<Player_Min_Fields>;
  stddev?: Maybe<Player_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Sum_Fields>;
  var_pop?: Maybe<Player_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Var_Samp_Fields>;
  variance?: Maybe<Player_Variance_Fields>;
};


/** aggregate fields of "player" */
export type Player_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "player_alias" */
export type Player_Alias = {
  __typename?: 'player_alias';
  alias: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  last_used?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  player?: Maybe<Player>;
  player_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "player_alias" */
export type Player_Alias_Aggregate = {
  __typename?: 'player_alias_aggregate';
  aggregate?: Maybe<Player_Alias_Aggregate_Fields>;
  nodes: Array<Player_Alias>;
};

export type Player_Alias_Aggregate_Bool_Exp = {
  count?: InputMaybe<Player_Alias_Aggregate_Bool_Exp_Count>;
};

export type Player_Alias_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Player_Alias_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Player_Alias_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "player_alias" */
export type Player_Alias_Aggregate_Fields = {
  __typename?: 'player_alias_aggregate_fields';
  avg?: Maybe<Player_Alias_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Player_Alias_Max_Fields>;
  min?: Maybe<Player_Alias_Min_Fields>;
  stddev?: Maybe<Player_Alias_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Alias_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Alias_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Alias_Sum_Fields>;
  var_pop?: Maybe<Player_Alias_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Alias_Var_Samp_Fields>;
  variance?: Maybe<Player_Alias_Variance_Fields>;
};


/** aggregate fields of "player_alias" */
export type Player_Alias_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Player_Alias_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "player_alias" */
export type Player_Alias_Aggregate_Order_By = {
  avg?: InputMaybe<Player_Alias_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Player_Alias_Max_Order_By>;
  min?: InputMaybe<Player_Alias_Min_Order_By>;
  stddev?: InputMaybe<Player_Alias_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Player_Alias_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Player_Alias_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Player_Alias_Sum_Order_By>;
  var_pop?: InputMaybe<Player_Alias_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Player_Alias_Var_Samp_Order_By>;
  variance?: InputMaybe<Player_Alias_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Player_Alias_Avg_Fields = {
  __typename?: 'player_alias_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "player_alias" */
export type Player_Alias_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "player_alias". All fields are combined with a logical 'AND'. */
export type Player_Alias_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Alias_Bool_Exp>>;
  _not?: InputMaybe<Player_Alias_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Alias_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  last_used?: InputMaybe<Timestamp_Comparison_Exp>;
  player?: InputMaybe<Player_Bool_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Player_Alias_Max_Fields = {
  __typename?: 'player_alias_max_fields';
  alias?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_used?: Maybe<Scalars['timestamp']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "player_alias" */
export type Player_Alias_Max_Order_By = {
  alias?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Player_Alias_Min_Fields = {
  __typename?: 'player_alias_min_fields';
  alias?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_used?: Maybe<Scalars['timestamp']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "player_alias" */
export type Player_Alias_Min_Order_By = {
  alias?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "player_alias". */
export type Player_Alias_Order_By = {
  alias?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  player?: InputMaybe<Player_Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** select columns of table "player_alias" */
export enum Player_Alias_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  Id = 'id',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  PlayerId = 'player_id'
}

/** aggregate stddev on columns */
export type Player_Alias_Stddev_Fields = {
  __typename?: 'player_alias_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "player_alias" */
export type Player_Alias_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Player_Alias_Stddev_Pop_Fields = {
  __typename?: 'player_alias_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "player_alias" */
export type Player_Alias_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Player_Alias_Stddev_Samp_Fields = {
  __typename?: 'player_alias_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "player_alias" */
export type Player_Alias_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "player_alias" */
export type Player_Alias_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Alias_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Alias_Stream_Cursor_Value_Input = {
  alias?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  last_used?: InputMaybe<Scalars['timestamp']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Player_Alias_Sum_Fields = {
  __typename?: 'player_alias_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "player_alias" */
export type Player_Alias_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Player_Alias_Var_Pop_Fields = {
  __typename?: 'player_alias_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "player_alias" */
export type Player_Alias_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Player_Alias_Var_Samp_Fields = {
  __typename?: 'player_alias_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "player_alias" */
export type Player_Alias_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Player_Alias_Variance_Fields = {
  __typename?: 'player_alias_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "player_alias" */
export type Player_Alias_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
};

/** aggregate avg on columns */
export type Player_Avg_Fields = {
  __typename?: 'player_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "player". All fields are combined with a logical 'AND'. */
export type Player_Bool_Exp = {
  _and?: InputMaybe<Array<Player_Bool_Exp>>;
  _not?: InputMaybe<Player_Bool_Exp>;
  _or?: InputMaybe<Array<Player_Bool_Exp>>;
  current_alias?: InputMaybe<String_Comparison_Exp>;
  game_entities?: InputMaybe<Game_Entity_Bool_Exp>;
  game_entities_aggregate?: InputMaybe<Game_Entity_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  ipl_id?: InputMaybe<String_Comparison_Exp>;
  player_aliases?: InputMaybe<Player_Alias_Bool_Exp>;
  player_aliases_aggregate?: InputMaybe<Player_Alias_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Player_Max_Fields = {
  __typename?: 'player_max_fields';
  current_alias?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Player_Min_Fields = {
  __typename?: 'player_min_fields';
  current_alias?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "player". */
export type Player_Order_By = {
  current_alias?: InputMaybe<Order_By>;
  game_entities_aggregate?: InputMaybe<Game_Entity_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  player_aliases_aggregate?: InputMaybe<Player_Alias_Aggregate_Order_By>;
};

/** select columns of table "player" */
export enum Player_Select_Column {
  /** column name */
  CurrentAlias = 'current_alias',
  /** column name */
  Id = 'id',
  /** column name */
  IplId = 'ipl_id'
}

/** aggregate stddev on columns */
export type Player_Stddev_Fields = {
  __typename?: 'player_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Player_Stddev_Pop_Fields = {
  __typename?: 'player_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Player_Stddev_Samp_Fields = {
  __typename?: 'player_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "player" */
export type Player_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Player_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Player_Stream_Cursor_Value_Input = {
  current_alias?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ipl_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Player_Sum_Fields = {
  __typename?: 'player_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Player_Var_Pop_Fields = {
  __typename?: 'player_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Player_Var_Samp_Fields = {
  __typename?: 'player_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Player_Variance_Fields = {
  __typename?: 'player_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "players" */
export type Players = {
  __typename?: 'players';
  created?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  ipl_id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['timestamp']['output']>;
  player_name: Scalars['String']['output'];
  /** An array relationship */
  players_game_results: Array<Game_Results>;
  /** An array relationship */
  scorecards: Array<Scorecards>;
};


/** columns and relationships of "players" */
export type PlayersPlayers_Game_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Game_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Results_Order_By>>;
  where?: InputMaybe<Game_Results_Bool_Exp>;
};


/** columns and relationships of "players" */
export type PlayersScorecardsArgs = {
  distinct_on?: InputMaybe<Array<Scorecards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scorecards_Order_By>>;
  where?: InputMaybe<Scorecards_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "players". All fields are combined with a logical 'AND'. */
export type Players_Bool_Exp = {
  _and?: InputMaybe<Array<Players_Bool_Exp>>;
  _not?: InputMaybe<Players_Bool_Exp>;
  _or?: InputMaybe<Array<Players_Bool_Exp>>;
  created?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  ipl_id?: InputMaybe<String_Comparison_Exp>;
  modified?: InputMaybe<Timestamp_Comparison_Exp>;
  player_name?: InputMaybe<String_Comparison_Exp>;
  players_game_results?: InputMaybe<Game_Results_Bool_Exp>;
  scorecards?: InputMaybe<Scorecards_Bool_Exp>;
};

/** Ordering options when selecting data from "players". */
export type Players_Order_By = {
  created?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  players_game_results_aggregate?: InputMaybe<Game_Results_Aggregate_Order_By>;
  scorecards_aggregate?: InputMaybe<Scorecards_Aggregate_Order_By>;
};

/** select columns of table "players" */
export enum Players_Select_Column {
  /** column name */
  Created = 'created',
  /** column name */
  Id = 'id',
  /** column name */
  IplId = 'ipl_id',
  /** column name */
  Modified = 'modified',
  /** column name */
  PlayerName = 'player_name'
}

/** Streaming cursor of the table "players" */
export type Players_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Players_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Players_Stream_Cursor_Value_Input = {
  created?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ipl_id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['timestamp']['input']>;
  player_name?: InputMaybe<Scalars['String']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "center" */
  center: Array<Center>;
  /** fetch aggregated fields from the table: "center" */
  center_aggregate: Center_Aggregate;
  /** fetch data from the table: "center" using primary key columns */
  center_by_pk?: Maybe<Center>;
  /** fetch data from the table: "centers" */
  centers: Array<Centers>;
  /** fetch aggregated fields from the table: "centers" */
  centers_aggregate: Centers_Aggregate;
  /** fetch data from the table: "centers" using primary key columns */
  centers_by_pk?: Maybe<Centers>;
  /** An array relationship */
  events: Array<Events>;
  /** An aggregate relationship */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch data from the table: "game_action" */
  game_action: Array<Game_Action>;
  /** fetch aggregated fields from the table: "game_action" */
  game_action_aggregate: Game_Action_Aggregate;
  /** fetch data from the table: "game_action" using primary key columns */
  game_action_by_pk?: Maybe<Game_Action>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_entity" */
  game_entity: Array<Game_Entity>;
  /** fetch aggregated fields from the table: "game_entity" */
  game_entity_aggregate: Game_Entity_Aggregate;
  /** fetch data from the table: "game_entity" using primary key columns */
  game_entity_by_pk?: Maybe<Game_Entity>;
  /** fetch data from the table: "game_entity_state" */
  game_entity_state: Array<Game_Entity_State>;
  /** fetch aggregated fields from the table: "game_entity_state" */
  game_entity_state_aggregate: Game_Entity_State_Aggregate;
  /** fetch data from the table: "game_entity_state" using primary key columns */
  game_entity_state_by_pk?: Maybe<Game_Entity_State>;
  /** fetch data from the table: "game_results" */
  game_results: Array<Game_Results>;
  /** fetch data from the table: "game_tag" */
  game_tag: Array<Game_Tag>;
  /** fetch aggregated fields from the table: "game_tag" */
  game_tag_aggregate: Game_Tag_Aggregate;
  /** fetch data from the table: "game_tag" using primary key columns */
  game_tag_by_pk?: Maybe<Game_Tag>;
  /** fetch data from the table: "game_team" */
  game_team: Array<Game_Team>;
  /** fetch aggregated fields from the table: "game_team" */
  game_team_aggregate: Game_Team_Aggregate;
  /** fetch data from the table: "game_team" using primary key columns */
  game_team_by_pk?: Maybe<Game_Team>;
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "mvp" */
  mvp: Array<Mvp>;
  /** fetch aggregated fields from the table: "mvp" */
  mvp_aggregate: Mvp_Aggregate;
  /** fetch data from the table: "mvp" using primary key columns */
  mvp_by_pk?: Maybe<Mvp>;
  /** fetch data from the table: "mvp_model" */
  mvp_model: Array<Mvp_Model>;
  /** fetch aggregated fields from the table: "mvp_model" */
  mvp_model_aggregate: Mvp_Model_Aggregate;
  /** fetch data from the table: "mvp_model" using primary key columns */
  mvp_model_by_pk?: Maybe<Mvp_Model>;
  /** fetch data from the table: "player" */
  player: Array<Player>;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player_alias" */
  player_alias: Array<Player_Alias>;
  /** fetch aggregated fields from the table: "player_alias" */
  player_alias_aggregate: Player_Alias_Aggregate;
  /** fetch data from the table: "player_alias" using primary key columns */
  player_alias_by_pk?: Maybe<Player_Alias>;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<Player>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** An array relationship */
  scorecards: Array<Scorecards>;
  /** fetch data from the table: "scorecards" using primary key columns */
  scorecards_by_pk?: Maybe<Scorecards>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "v_game_entity" */
  v_game_entity: Array<V_Game_Entity>;
  /** fetch aggregated fields from the table: "v_game_entity" */
  v_game_entity_aggregate: V_Game_Entity_Aggregate;
  /** fetch data from the table: "v_game_entity_state_final" */
  v_game_entity_state_final: Array<V_Game_Entity_State_Final>;
  /** fetch aggregated fields from the table: "v_game_entity_state_final" */
  v_game_entity_state_final_aggregate: V_Game_Entity_State_Final_Aggregate;
  /** An array relationship */
  v_game_entity_states: Array<V_Game_Entity_States>;
  /** fetch data from the table: "v_game_team" */
  v_game_team: Array<V_Game_Team>;
  /** fetch aggregated fields from the table: "v_game_team" */
  v_game_team_aggregate: V_Game_Team_Aggregate;
  /** fetch data from the table: "v_stream_nats_2023" */
  v_stream_nats_2023: Array<V_Stream_Nats_2023>;
  /** fetch data from the table: "v_stream_nats_2023_all" */
  v_stream_nats_2023_all: Array<V_Stream_Nats_2023_All>;
  /** fetch data from the table: "v_stream_nats_2024" */
  v_stream_nats_2024: Array<V_Stream_Nats_2024>;
};


export type Query_RootCenterArgs = {
  distinct_on?: InputMaybe<Array<Center_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Center_Order_By>>;
  where?: InputMaybe<Center_Bool_Exp>;
};


export type Query_RootCenter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Center_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Center_Order_By>>;
  where?: InputMaybe<Center_Bool_Exp>;
};


export type Query_RootCenter_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCentersArgs = {
  distinct_on?: InputMaybe<Array<Centers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Centers_Order_By>>;
  where?: InputMaybe<Centers_Bool_Exp>;
};


export type Query_RootCenters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Centers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Centers_Order_By>>;
  where?: InputMaybe<Centers_Bool_Exp>;
};


export type Query_RootCenters_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_ActionArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


export type Query_RootGame_Action_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


export type Query_RootGame_Action_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGame_EntityArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


export type Query_RootGame_Entity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


export type Query_RootGame_Entity_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGame_Entity_StateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_State_Order_By>>;
  where?: InputMaybe<Game_Entity_State_Bool_Exp>;
};


export type Query_RootGame_Entity_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_State_Order_By>>;
  where?: InputMaybe<Game_Entity_State_Bool_Exp>;
};


export type Query_RootGame_Entity_State_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGame_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Game_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Results_Order_By>>;
  where?: InputMaybe<Game_Results_Bool_Exp>;
};


export type Query_RootGame_TagArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


export type Query_RootGame_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


export type Query_RootGame_Tag_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGame_TeamArgs = {
  distinct_on?: InputMaybe<Array<Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Team_Order_By>>;
  where?: InputMaybe<Game_Team_Bool_Exp>;
};


export type Query_RootGame_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Team_Order_By>>;
  where?: InputMaybe<Game_Team_Bool_Exp>;
};


export type Query_RootGame_Team_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Query_RootGames_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootMvpArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};


export type Query_RootMvp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};


export type Query_RootMvp_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootMvp_ModelArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Model_Order_By>>;
  where?: InputMaybe<Mvp_Model_Bool_Exp>;
};


export type Query_RootMvp_Model_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Model_Order_By>>;
  where?: InputMaybe<Mvp_Model_Bool_Exp>;
};


export type Query_RootMvp_Model_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPlayerArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Query_RootPlayer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Query_RootPlayer_AliasArgs = {
  distinct_on?: InputMaybe<Array<Player_Alias_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Alias_Order_By>>;
  where?: InputMaybe<Player_Alias_Bool_Exp>;
};


export type Query_RootPlayer_Alias_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Alias_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Alias_Order_By>>;
  where?: InputMaybe<Player_Alias_Bool_Exp>;
};


export type Query_RootPlayer_Alias_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPlayer_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPlayersArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Query_RootPlayers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootScorecardsArgs = {
  distinct_on?: InputMaybe<Array<Scorecards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scorecards_Order_By>>;
  where?: InputMaybe<Scorecards_Bool_Exp>;
};


export type Query_RootScorecards_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootV_Game_EntityArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_Order_By>>;
  where?: InputMaybe<V_Game_Entity_Bool_Exp>;
};


export type Query_RootV_Game_Entity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_Order_By>>;
  where?: InputMaybe<V_Game_Entity_Bool_Exp>;
};


export type Query_RootV_Game_Entity_State_FinalArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_State_Final_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_State_Final_Order_By>>;
  where?: InputMaybe<V_Game_Entity_State_Final_Bool_Exp>;
};


export type Query_RootV_Game_Entity_State_Final_AggregateArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_State_Final_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_State_Final_Order_By>>;
  where?: InputMaybe<V_Game_Entity_State_Final_Bool_Exp>;
};


export type Query_RootV_Game_Entity_StatesArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_States_Order_By>>;
  where?: InputMaybe<V_Game_Entity_States_Bool_Exp>;
};


export type Query_RootV_Game_TeamArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Team_Order_By>>;
  where?: InputMaybe<V_Game_Team_Bool_Exp>;
};


export type Query_RootV_Game_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Team_Order_By>>;
  where?: InputMaybe<V_Game_Team_Bool_Exp>;
};


export type Query_RootV_Stream_Nats_2023Args = {
  distinct_on?: InputMaybe<Array<V_Stream_Nats_2023_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Stream_Nats_2023_Order_By>>;
  where?: InputMaybe<V_Stream_Nats_2023_Bool_Exp>;
};


export type Query_RootV_Stream_Nats_2023_AllArgs = {
  distinct_on?: InputMaybe<Array<V_Stream_Nats_2023_All_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Stream_Nats_2023_All_Order_By>>;
  where?: InputMaybe<V_Stream_Nats_2023_All_Bool_Exp>;
};


export type Query_RootV_Stream_Nats_2024Args = {
  distinct_on?: InputMaybe<Array<V_Stream_Nats_2024_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Stream_Nats_2024_Order_By>>;
  where?: InputMaybe<V_Stream_Nats_2024_Bool_Exp>;
};

/** columns and relationships of "scorecards" */
export type Scorecards = {
  __typename?: 'scorecards';
  accuracy?: Maybe<Scalars['float8']['output']>;
  ammo_boost: Scalars['Int']['output'];
  bases_destroyed: Scalars['Int']['output'];
  /** An object relationship */
  center?: Maybe<Centers>;
  center_id?: Maybe<Scalars['bigint']['output']>;
  created?: Maybe<Scalars['timestamp']['output']>;
  elim_other_team: Scalars['smallint']['output'];
  /** An object relationship */
  event?: Maybe<Events>;
  event_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  game?: Maybe<Games>;
  game_datetime: Scalars['timestamptz']['output'];
  game_id?: Maybe<Scalars['bigint']['output']>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  id: Scalars['bigint']['output'];
  is_sub: Scalars['Boolean']['output'];
  life_boost: Scalars['Int']['output'];
  lives_left: Scalars['Int']['output'];
  max_score?: Maybe<Scalars['Int']['output']>;
  medic_hits: Scalars['Int']['output'];
  medic_nukes: Scalars['Int']['output'];
  missile_hits: Scalars['Int']['output'];
  missiled_opponent: Scalars['Int']['output'];
  missiled_team: Scalars['Int']['output'];
  modified?: Maybe<Scalars['timestamp']['output']>;
  mvp_details?: Maybe<Scalars['json']['output']>;
  mvp_details_temp?: Maybe<Scalars['jsonb']['output']>;
  mvp_points?: Maybe<Scalars['float8']['output']>;
  nukes_activated: Scalars['Int']['output'];
  nukes_canceled: Scalars['Int']['output'];
  nukes_detonated: Scalars['Int']['output'];
  other_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits: Scalars['Int']['output'];
  own_nuke_cancels: Scalars['Int']['output'];
  pdf_id?: Maybe<Scalars['numeric']['output']>;
  penalty_count: Scalars['Int']['output'];
  /** An object relationship */
  player?: Maybe<Players>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  player_name: Scalars['String']['output'];
  position: Scalars['String']['output'];
  rank: Scalars['Int']['output'];
  rapid_fire_history?: Maybe<Scalars['jsonb']['output']>;
  resupplies: Scalars['Int']['output'];
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  score: Scalars['Int']['output'];
  scout_rapid: Scalars['Int']['output'];
  shot_3hit: Scalars['Int']['output'];
  shot_opponent: Scalars['Int']['output'];
  shot_opponent_during_rapid?: Maybe<Scalars['Int']['output']>;
  shot_team: Scalars['Int']['output'];
  shot_team_during_rapid?: Maybe<Scalars['Int']['output']>;
  shots_fired: Scalars['Int']['output'];
  shots_fired_during_rapid?: Maybe<Scalars['Int']['output']>;
  shots_hit: Scalars['Int']['output'];
  shots_hit_during_rapid?: Maybe<Scalars['Int']['output']>;
  shots_left: Scalars['Int']['output'];
  sp_earned: Scalars['Int']['output'];
  sp_spent: Scalars['Int']['output'];
  survived?: Maybe<Scalars['Int']['output']>;
  team: Scalars['String']['output'];
  team_elim: Scalars['smallint']['output'];
  team_id?: Maybe<Scalars['bigint']['output']>;
  team_index?: Maybe<Scalars['smallint']['output']>;
  times_missiled: Scalars['Int']['output'];
  times_team_missiled: Scalars['Int']['output'];
  times_zapped: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  uptime?: Maybe<Scalars['Int']['output']>;
  video_link?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "scorecards" */
export type ScorecardsMvp_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "scorecards" */
export type ScorecardsMvp_Details_TempArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "scorecards" */
export type ScorecardsRapid_Fire_HistoryArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "scorecards" */
export type Scorecards_Aggregate_Order_By = {
  avg?: InputMaybe<Scorecards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Scorecards_Max_Order_By>;
  min?: InputMaybe<Scorecards_Min_Order_By>;
  stddev?: InputMaybe<Scorecards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Scorecards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Scorecards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Scorecards_Sum_Order_By>;
  var_pop?: InputMaybe<Scorecards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Scorecards_Var_Samp_Order_By>;
  variance?: InputMaybe<Scorecards_Variance_Order_By>;
};

/** order by avg() on columns of table "scorecards" */
export type Scorecards_Avg_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "scorecards". All fields are combined with a logical 'AND'. */
export type Scorecards_Bool_Exp = {
  _and?: InputMaybe<Array<Scorecards_Bool_Exp>>;
  _not?: InputMaybe<Scorecards_Bool_Exp>;
  _or?: InputMaybe<Array<Scorecards_Bool_Exp>>;
  accuracy?: InputMaybe<Float8_Comparison_Exp>;
  ammo_boost?: InputMaybe<Int_Comparison_Exp>;
  bases_destroyed?: InputMaybe<Int_Comparison_Exp>;
  center?: InputMaybe<Centers_Bool_Exp>;
  center_id?: InputMaybe<Bigint_Comparison_Exp>;
  created?: InputMaybe<Timestamp_Comparison_Exp>;
  elim_other_team?: InputMaybe<Smallint_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Bigint_Comparison_Exp>;
  game?: InputMaybe<Games_Bool_Exp>;
  game_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  game_id?: InputMaybe<Bigint_Comparison_Exp>;
  hit_diff?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_sub?: InputMaybe<Boolean_Comparison_Exp>;
  life_boost?: InputMaybe<Int_Comparison_Exp>;
  lives_left?: InputMaybe<Int_Comparison_Exp>;
  max_score?: InputMaybe<Int_Comparison_Exp>;
  medic_hits?: InputMaybe<Int_Comparison_Exp>;
  medic_nukes?: InputMaybe<Int_Comparison_Exp>;
  missile_hits?: InputMaybe<Int_Comparison_Exp>;
  missiled_opponent?: InputMaybe<Int_Comparison_Exp>;
  missiled_team?: InputMaybe<Int_Comparison_Exp>;
  modified?: InputMaybe<Timestamp_Comparison_Exp>;
  mvp_details?: InputMaybe<Json_Comparison_Exp>;
  mvp_details_temp?: InputMaybe<Jsonb_Comparison_Exp>;
  mvp_points?: InputMaybe<Float8_Comparison_Exp>;
  nukes_activated?: InputMaybe<Int_Comparison_Exp>;
  nukes_canceled?: InputMaybe<Int_Comparison_Exp>;
  nukes_detonated?: InputMaybe<Int_Comparison_Exp>;
  other_downtime?: InputMaybe<Int_Comparison_Exp>;
  own_medic_hits?: InputMaybe<Int_Comparison_Exp>;
  own_nuke_cancels?: InputMaybe<Int_Comparison_Exp>;
  pdf_id?: InputMaybe<Numeric_Comparison_Exp>;
  penalty_count?: InputMaybe<Int_Comparison_Exp>;
  player?: InputMaybe<Players_Bool_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
  player_name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  rank?: InputMaybe<Int_Comparison_Exp>;
  rapid_fire_history?: InputMaybe<Jsonb_Comparison_Exp>;
  resupplies?: InputMaybe<Int_Comparison_Exp>;
  resupply_downtime?: InputMaybe<Int_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  scout_rapid?: InputMaybe<Int_Comparison_Exp>;
  shot_3hit?: InputMaybe<Int_Comparison_Exp>;
  shot_opponent?: InputMaybe<Int_Comparison_Exp>;
  shot_opponent_during_rapid?: InputMaybe<Int_Comparison_Exp>;
  shot_team?: InputMaybe<Int_Comparison_Exp>;
  shot_team_during_rapid?: InputMaybe<Int_Comparison_Exp>;
  shots_fired?: InputMaybe<Int_Comparison_Exp>;
  shots_fired_during_rapid?: InputMaybe<Int_Comparison_Exp>;
  shots_hit?: InputMaybe<Int_Comparison_Exp>;
  shots_hit_during_rapid?: InputMaybe<Int_Comparison_Exp>;
  shots_left?: InputMaybe<Int_Comparison_Exp>;
  sp_earned?: InputMaybe<Int_Comparison_Exp>;
  sp_spent?: InputMaybe<Int_Comparison_Exp>;
  survived?: InputMaybe<Int_Comparison_Exp>;
  team?: InputMaybe<String_Comparison_Exp>;
  team_elim?: InputMaybe<Smallint_Comparison_Exp>;
  team_id?: InputMaybe<Bigint_Comparison_Exp>;
  team_index?: InputMaybe<Smallint_Comparison_Exp>;
  times_missiled?: InputMaybe<Int_Comparison_Exp>;
  times_team_missiled?: InputMaybe<Int_Comparison_Exp>;
  times_zapped?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uptime?: InputMaybe<Int_Comparison_Exp>;
  video_link?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "scorecards" */
export type Scorecards_Max_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
  video_link?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "scorecards" */
export type Scorecards_Min_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
  video_link?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "scorecards". */
export type Scorecards_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center?: InputMaybe<Centers_Order_By>;
  center_id?: InputMaybe<Order_By>;
  created?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  game?: InputMaybe<Games_Order_By>;
  game_datetime?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_sub?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  modified?: InputMaybe<Order_By>;
  mvp_details?: InputMaybe<Order_By>;
  mvp_details_temp?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player?: InputMaybe<Players_Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  rapid_fire_history?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
  video_link?: InputMaybe<Order_By>;
};

/** select columns of table "scorecards" */
export enum Scorecards_Select_Column {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AmmoBoost = 'ammo_boost',
  /** column name */
  BasesDestroyed = 'bases_destroyed',
  /** column name */
  CenterId = 'center_id',
  /** column name */
  Created = 'created',
  /** column name */
  ElimOtherTeam = 'elim_other_team',
  /** column name */
  EventId = 'event_id',
  /** column name */
  GameDatetime = 'game_datetime',
  /** column name */
  GameId = 'game_id',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  Id = 'id',
  /** column name */
  IsSub = 'is_sub',
  /** column name */
  LifeBoost = 'life_boost',
  /** column name */
  LivesLeft = 'lives_left',
  /** column name */
  MaxScore = 'max_score',
  /** column name */
  MedicHits = 'medic_hits',
  /** column name */
  MedicNukes = 'medic_nukes',
  /** column name */
  MissileHits = 'missile_hits',
  /** column name */
  MissiledOpponent = 'missiled_opponent',
  /** column name */
  MissiledTeam = 'missiled_team',
  /** column name */
  Modified = 'modified',
  /** column name */
  MvpDetails = 'mvp_details',
  /** column name */
  MvpDetailsTemp = 'mvp_details_temp',
  /** column name */
  MvpPoints = 'mvp_points',
  /** column name */
  NukesActivated = 'nukes_activated',
  /** column name */
  NukesCanceled = 'nukes_canceled',
  /** column name */
  NukesDetonated = 'nukes_detonated',
  /** column name */
  OtherDowntime = 'other_downtime',
  /** column name */
  OwnMedicHits = 'own_medic_hits',
  /** column name */
  OwnNukeCancels = 'own_nuke_cancels',
  /** column name */
  PdfId = 'pdf_id',
  /** column name */
  PenaltyCount = 'penalty_count',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  PlayerName = 'player_name',
  /** column name */
  Position = 'position',
  /** column name */
  Rank = 'rank',
  /** column name */
  RapidFireHistory = 'rapid_fire_history',
  /** column name */
  Resupplies = 'resupplies',
  /** column name */
  ResupplyDowntime = 'resupply_downtime',
  /** column name */
  Score = 'score',
  /** column name */
  ScoutRapid = 'scout_rapid',
  /** column name */
  Shot_3hit = 'shot_3hit',
  /** column name */
  ShotOpponent = 'shot_opponent',
  /** column name */
  ShotOpponentDuringRapid = 'shot_opponent_during_rapid',
  /** column name */
  ShotTeam = 'shot_team',
  /** column name */
  ShotTeamDuringRapid = 'shot_team_during_rapid',
  /** column name */
  ShotsFired = 'shots_fired',
  /** column name */
  ShotsFiredDuringRapid = 'shots_fired_during_rapid',
  /** column name */
  ShotsHit = 'shots_hit',
  /** column name */
  ShotsHitDuringRapid = 'shots_hit_during_rapid',
  /** column name */
  ShotsLeft = 'shots_left',
  /** column name */
  SpEarned = 'sp_earned',
  /** column name */
  SpSpent = 'sp_spent',
  /** column name */
  Survived = 'survived',
  /** column name */
  Team = 'team',
  /** column name */
  TeamElim = 'team_elim',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  TeamIndex = 'team_index',
  /** column name */
  TimesMissiled = 'times_missiled',
  /** column name */
  TimesTeamMissiled = 'times_team_missiled',
  /** column name */
  TimesZapped = 'times_zapped',
  /** column name */
  Type = 'type',
  /** column name */
  Uptime = 'uptime',
  /** column name */
  VideoLink = 'video_link'
}

/** order by stddev() on columns of table "scorecards" */
export type Scorecards_Stddev_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "scorecards" */
export type Scorecards_Stddev_Pop_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "scorecards" */
export type Scorecards_Stddev_Samp_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "scorecards" */
export type Scorecards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scorecards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scorecards_Stream_Cursor_Value_Input = {
  accuracy?: InputMaybe<Scalars['float8']['input']>;
  ammo_boost?: InputMaybe<Scalars['Int']['input']>;
  bases_destroyed?: InputMaybe<Scalars['Int']['input']>;
  center_id?: InputMaybe<Scalars['bigint']['input']>;
  created?: InputMaybe<Scalars['timestamp']['input']>;
  elim_other_team?: InputMaybe<Scalars['smallint']['input']>;
  event_id?: InputMaybe<Scalars['bigint']['input']>;
  game_datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  game_id?: InputMaybe<Scalars['bigint']['input']>;
  hit_diff?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_sub?: InputMaybe<Scalars['Boolean']['input']>;
  life_boost?: InputMaybe<Scalars['Int']['input']>;
  lives_left?: InputMaybe<Scalars['Int']['input']>;
  max_score?: InputMaybe<Scalars['Int']['input']>;
  medic_hits?: InputMaybe<Scalars['Int']['input']>;
  medic_nukes?: InputMaybe<Scalars['Int']['input']>;
  missile_hits?: InputMaybe<Scalars['Int']['input']>;
  missiled_opponent?: InputMaybe<Scalars['Int']['input']>;
  missiled_team?: InputMaybe<Scalars['Int']['input']>;
  modified?: InputMaybe<Scalars['timestamp']['input']>;
  mvp_details?: InputMaybe<Scalars['json']['input']>;
  mvp_details_temp?: InputMaybe<Scalars['jsonb']['input']>;
  mvp_points?: InputMaybe<Scalars['float8']['input']>;
  nukes_activated?: InputMaybe<Scalars['Int']['input']>;
  nukes_canceled?: InputMaybe<Scalars['Int']['input']>;
  nukes_detonated?: InputMaybe<Scalars['Int']['input']>;
  other_downtime?: InputMaybe<Scalars['Int']['input']>;
  own_medic_hits?: InputMaybe<Scalars['Int']['input']>;
  own_nuke_cancels?: InputMaybe<Scalars['Int']['input']>;
  pdf_id?: InputMaybe<Scalars['numeric']['input']>;
  penalty_count?: InputMaybe<Scalars['Int']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
  player_name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  rapid_fire_history?: InputMaybe<Scalars['jsonb']['input']>;
  resupplies?: InputMaybe<Scalars['Int']['input']>;
  resupply_downtime?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  scout_rapid?: InputMaybe<Scalars['Int']['input']>;
  shot_3hit?: InputMaybe<Scalars['Int']['input']>;
  shot_opponent?: InputMaybe<Scalars['Int']['input']>;
  shot_opponent_during_rapid?: InputMaybe<Scalars['Int']['input']>;
  shot_team?: InputMaybe<Scalars['Int']['input']>;
  shot_team_during_rapid?: InputMaybe<Scalars['Int']['input']>;
  shots_fired?: InputMaybe<Scalars['Int']['input']>;
  shots_fired_during_rapid?: InputMaybe<Scalars['Int']['input']>;
  shots_hit?: InputMaybe<Scalars['Int']['input']>;
  shots_hit_during_rapid?: InputMaybe<Scalars['Int']['input']>;
  shots_left?: InputMaybe<Scalars['Int']['input']>;
  sp_earned?: InputMaybe<Scalars['Int']['input']>;
  sp_spent?: InputMaybe<Scalars['Int']['input']>;
  survived?: InputMaybe<Scalars['Int']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
  team_elim?: InputMaybe<Scalars['smallint']['input']>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  team_index?: InputMaybe<Scalars['smallint']['input']>;
  times_missiled?: InputMaybe<Scalars['Int']['input']>;
  times_team_missiled?: InputMaybe<Scalars['Int']['input']>;
  times_zapped?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uptime?: InputMaybe<Scalars['Int']['input']>;
  video_link?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "scorecards" */
export type Scorecards_Sum_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "scorecards" */
export type Scorecards_Var_Pop_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "scorecards" */
export type Scorecards_Var_Samp_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "scorecards" */
export type Scorecards_Variance_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  ammo_boost?: InputMaybe<Order_By>;
  bases_destroyed?: InputMaybe<Order_By>;
  center_id?: InputMaybe<Order_By>;
  elim_other_team?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  life_boost?: InputMaybe<Order_By>;
  lives_left?: InputMaybe<Order_By>;
  max_score?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_nukes?: InputMaybe<Order_By>;
  missile_hits?: InputMaybe<Order_By>;
  missiled_opponent?: InputMaybe<Order_By>;
  missiled_team?: InputMaybe<Order_By>;
  mvp_points?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_canceled?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  other_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_cancels?: InputMaybe<Order_By>;
  pdf_id?: InputMaybe<Order_By>;
  penalty_count?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  resupplies?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scout_rapid?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  shots_left?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  survived?: InputMaybe<Order_By>;
  team_elim?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  times_team_missiled?: InputMaybe<Order_By>;
  times_zapped?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "center" */
  center: Array<Center>;
  /** fetch aggregated fields from the table: "center" */
  center_aggregate: Center_Aggregate;
  /** fetch data from the table: "center" using primary key columns */
  center_by_pk?: Maybe<Center>;
  /** fetch data from the table in a streaming manner: "center" */
  center_stream: Array<Center>;
  /** fetch data from the table: "centers" */
  centers: Array<Centers>;
  /** fetch aggregated fields from the table: "centers" */
  centers_aggregate: Centers_Aggregate;
  /** fetch data from the table: "centers" using primary key columns */
  centers_by_pk?: Maybe<Centers>;
  /** fetch data from the table in a streaming manner: "centers" */
  centers_stream: Array<Centers>;
  /** An array relationship */
  events: Array<Events>;
  /** An aggregate relationship */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch data from the table: "game_action" */
  game_action: Array<Game_Action>;
  /** fetch aggregated fields from the table: "game_action" */
  game_action_aggregate: Game_Action_Aggregate;
  /** fetch data from the table: "game_action" using primary key columns */
  game_action_by_pk?: Maybe<Game_Action>;
  /** fetch data from the table in a streaming manner: "game_action" */
  game_action_stream: Array<Game_Action>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_entity" */
  game_entity: Array<Game_Entity>;
  /** fetch aggregated fields from the table: "game_entity" */
  game_entity_aggregate: Game_Entity_Aggregate;
  /** fetch data from the table: "game_entity" using primary key columns */
  game_entity_by_pk?: Maybe<Game_Entity>;
  /** fetch data from the table: "game_entity_state" */
  game_entity_state: Array<Game_Entity_State>;
  /** fetch aggregated fields from the table: "game_entity_state" */
  game_entity_state_aggregate: Game_Entity_State_Aggregate;
  /** fetch data from the table: "game_entity_state" using primary key columns */
  game_entity_state_by_pk?: Maybe<Game_Entity_State>;
  /** fetch data from the table in a streaming manner: "game_entity_state" */
  game_entity_state_stream: Array<Game_Entity_State>;
  /** fetch data from the table in a streaming manner: "game_entity" */
  game_entity_stream: Array<Game_Entity>;
  /** fetch data from the table: "game_results" */
  game_results: Array<Game_Results>;
  /** fetch data from the table in a streaming manner: "game_results" */
  game_results_stream: Array<Game_Results>;
  /** fetch data from the table in a streaming manner: "game" */
  game_stream: Array<Game>;
  /** fetch data from the table: "game_tag" */
  game_tag: Array<Game_Tag>;
  /** fetch aggregated fields from the table: "game_tag" */
  game_tag_aggregate: Game_Tag_Aggregate;
  /** fetch data from the table: "game_tag" using primary key columns */
  game_tag_by_pk?: Maybe<Game_Tag>;
  /** fetch data from the table in a streaming manner: "game_tag" */
  game_tag_stream: Array<Game_Tag>;
  /** fetch data from the table: "game_team" */
  game_team: Array<Game_Team>;
  /** fetch aggregated fields from the table: "game_team" */
  game_team_aggregate: Game_Team_Aggregate;
  /** fetch data from the table: "game_team" using primary key columns */
  game_team_by_pk?: Maybe<Game_Team>;
  /** fetch data from the table in a streaming manner: "game_team" */
  game_team_stream: Array<Game_Team>;
  /** An array relationship */
  games: Array<Games>;
  /** An aggregate relationship */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table in a streaming manner: "games" */
  games_stream: Array<Games>;
  /** fetch data from the table: "mvp" */
  mvp: Array<Mvp>;
  /** fetch aggregated fields from the table: "mvp" */
  mvp_aggregate: Mvp_Aggregate;
  /** fetch data from the table: "mvp" using primary key columns */
  mvp_by_pk?: Maybe<Mvp>;
  /** fetch data from the table: "mvp_model" */
  mvp_model: Array<Mvp_Model>;
  /** fetch aggregated fields from the table: "mvp_model" */
  mvp_model_aggregate: Mvp_Model_Aggregate;
  /** fetch data from the table: "mvp_model" using primary key columns */
  mvp_model_by_pk?: Maybe<Mvp_Model>;
  /** fetch data from the table in a streaming manner: "mvp_model" */
  mvp_model_stream: Array<Mvp_Model>;
  /** fetch data from the table in a streaming manner: "mvp" */
  mvp_stream: Array<Mvp>;
  /** fetch data from the table: "player" */
  player: Array<Player>;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: Player_Aggregate;
  /** fetch data from the table: "player_alias" */
  player_alias: Array<Player_Alias>;
  /** fetch aggregated fields from the table: "player_alias" */
  player_alias_aggregate: Player_Alias_Aggregate;
  /** fetch data from the table: "player_alias" using primary key columns */
  player_alias_by_pk?: Maybe<Player_Alias>;
  /** fetch data from the table in a streaming manner: "player_alias" */
  player_alias_stream: Array<Player_Alias>;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<Player>;
  /** fetch data from the table in a streaming manner: "player" */
  player_stream: Array<Player>;
  /** fetch data from the table: "players" */
  players: Array<Players>;
  /** fetch data from the table: "players" using primary key columns */
  players_by_pk?: Maybe<Players>;
  /** fetch data from the table in a streaming manner: "players" */
  players_stream: Array<Players>;
  /** An array relationship */
  scorecards: Array<Scorecards>;
  /** fetch data from the table: "scorecards" using primary key columns */
  scorecards_by_pk?: Maybe<Scorecards>;
  /** fetch data from the table in a streaming manner: "scorecards" */
  scorecards_stream: Array<Scorecards>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table in a streaming manner: "tag" */
  tag_stream: Array<Tag>;
  /** fetch data from the table: "v_game_entity" */
  v_game_entity: Array<V_Game_Entity>;
  /** fetch aggregated fields from the table: "v_game_entity" */
  v_game_entity_aggregate: V_Game_Entity_Aggregate;
  /** fetch data from the table: "v_game_entity_state_final" */
  v_game_entity_state_final: Array<V_Game_Entity_State_Final>;
  /** fetch aggregated fields from the table: "v_game_entity_state_final" */
  v_game_entity_state_final_aggregate: V_Game_Entity_State_Final_Aggregate;
  /** fetch data from the table in a streaming manner: "v_game_entity_state_final" */
  v_game_entity_state_final_stream: Array<V_Game_Entity_State_Final>;
  /** An array relationship */
  v_game_entity_states: Array<V_Game_Entity_States>;
  /** fetch data from the table in a streaming manner: "v_game_entity_states" */
  v_game_entity_states_stream: Array<V_Game_Entity_States>;
  /** fetch data from the table in a streaming manner: "v_game_entity" */
  v_game_entity_stream: Array<V_Game_Entity>;
  /** fetch data from the table: "v_game_team" */
  v_game_team: Array<V_Game_Team>;
  /** fetch aggregated fields from the table: "v_game_team" */
  v_game_team_aggregate: V_Game_Team_Aggregate;
  /** fetch data from the table in a streaming manner: "v_game_team" */
  v_game_team_stream: Array<V_Game_Team>;
  /** fetch data from the table: "v_stream_nats_2023" */
  v_stream_nats_2023: Array<V_Stream_Nats_2023>;
  /** fetch data from the table: "v_stream_nats_2023_all" */
  v_stream_nats_2023_all: Array<V_Stream_Nats_2023_All>;
  /** fetch data from the table in a streaming manner: "v_stream_nats_2023_all" */
  v_stream_nats_2023_all_stream: Array<V_Stream_Nats_2023_All>;
  /** fetch data from the table in a streaming manner: "v_stream_nats_2023" */
  v_stream_nats_2023_stream: Array<V_Stream_Nats_2023>;
  /** fetch data from the table: "v_stream_nats_2024" */
  v_stream_nats_2024: Array<V_Stream_Nats_2024>;
  /** fetch data from the table in a streaming manner: "v_stream_nats_2024" */
  v_stream_nats_2024_stream: Array<V_Stream_Nats_2024>;
};


export type Subscription_RootCenterArgs = {
  distinct_on?: InputMaybe<Array<Center_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Center_Order_By>>;
  where?: InputMaybe<Center_Bool_Exp>;
};


export type Subscription_RootCenter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Center_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Center_Order_By>>;
  where?: InputMaybe<Center_Bool_Exp>;
};


export type Subscription_RootCenter_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCenter_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Center_Stream_Cursor_Input>>;
  where?: InputMaybe<Center_Bool_Exp>;
};


export type Subscription_RootCentersArgs = {
  distinct_on?: InputMaybe<Array<Centers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Centers_Order_By>>;
  where?: InputMaybe<Centers_Bool_Exp>;
};


export type Subscription_RootCenters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Centers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Centers_Order_By>>;
  where?: InputMaybe<Centers_Bool_Exp>;
};


export type Subscription_RootCenters_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCenters_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Centers_Stream_Cursor_Input>>;
  where?: InputMaybe<Centers_Bool_Exp>;
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_ActionArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


export type Subscription_RootGame_Action_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Action_Order_By>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


export type Subscription_RootGame_Action_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGame_Action_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Action_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Action_Bool_Exp>;
};


export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGame_EntityArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


export type Subscription_RootGame_Entity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_Order_By>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


export type Subscription_RootGame_Entity_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGame_Entity_StateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_State_Order_By>>;
  where?: InputMaybe<Game_Entity_State_Bool_Exp>;
};


export type Subscription_RootGame_Entity_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Entity_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Entity_State_Order_By>>;
  where?: InputMaybe<Game_Entity_State_Bool_Exp>;
};


export type Subscription_RootGame_Entity_State_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGame_Entity_State_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Entity_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Entity_State_Bool_Exp>;
};


export type Subscription_RootGame_Entity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Entity_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Entity_Bool_Exp>;
};


export type Subscription_RootGame_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Game_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Results_Order_By>>;
  where?: InputMaybe<Game_Results_Bool_Exp>;
};


export type Subscription_RootGame_Results_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Results_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Results_Bool_Exp>;
};


export type Subscription_RootGame_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_TagArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


export type Subscription_RootGame_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


export type Subscription_RootGame_Tag_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGame_Tag_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


export type Subscription_RootGame_TeamArgs = {
  distinct_on?: InputMaybe<Array<Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Team_Order_By>>;
  where?: InputMaybe<Game_Team_Bool_Exp>;
};


export type Subscription_RootGame_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Team_Order_By>>;
  where?: InputMaybe<Game_Team_Bool_Exp>;
};


export type Subscription_RootGame_Team_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGame_Team_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Team_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Team_Bool_Exp>;
};


export type Subscription_RootGamesArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Games_Order_By>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGames_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Games_Bool_Exp>;
};


export type Subscription_RootMvpArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};


export type Subscription_RootMvp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Order_By>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};


export type Subscription_RootMvp_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootMvp_ModelArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Model_Order_By>>;
  where?: InputMaybe<Mvp_Model_Bool_Exp>;
};


export type Subscription_RootMvp_Model_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mvp_Model_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mvp_Model_Order_By>>;
  where?: InputMaybe<Mvp_Model_Bool_Exp>;
};


export type Subscription_RootMvp_Model_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootMvp_Model_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mvp_Model_Stream_Cursor_Input>>;
  where?: InputMaybe<Mvp_Model_Bool_Exp>;
};


export type Subscription_RootMvp_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mvp_Stream_Cursor_Input>>;
  where?: InputMaybe<Mvp_Bool_Exp>;
};


export type Subscription_RootPlayerArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Order_By>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayer_AliasArgs = {
  distinct_on?: InputMaybe<Array<Player_Alias_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Alias_Order_By>>;
  where?: InputMaybe<Player_Alias_Bool_Exp>;
};


export type Subscription_RootPlayer_Alias_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Player_Alias_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Player_Alias_Order_By>>;
  where?: InputMaybe<Player_Alias_Bool_Exp>;
};


export type Subscription_RootPlayer_Alias_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPlayer_Alias_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Alias_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Alias_Bool_Exp>;
};


export type Subscription_RootPlayer_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPlayer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Player_Stream_Cursor_Input>>;
  where?: InputMaybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayersArgs = {
  distinct_on?: InputMaybe<Array<Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Players_Order_By>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Subscription_RootPlayers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPlayers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Players_Stream_Cursor_Input>>;
  where?: InputMaybe<Players_Bool_Exp>;
};


export type Subscription_RootScorecardsArgs = {
  distinct_on?: InputMaybe<Array<Scorecards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scorecards_Order_By>>;
  where?: InputMaybe<Scorecards_Bool_Exp>;
};


export type Subscription_RootScorecards_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootScorecards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scorecards_Stream_Cursor_Input>>;
  where?: InputMaybe<Scorecards_Bool_Exp>;
};


export type Subscription_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTag_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootV_Game_EntityArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_Order_By>>;
  where?: InputMaybe<V_Game_Entity_Bool_Exp>;
};


export type Subscription_RootV_Game_Entity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_Order_By>>;
  where?: InputMaybe<V_Game_Entity_Bool_Exp>;
};


export type Subscription_RootV_Game_Entity_State_FinalArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_State_Final_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_State_Final_Order_By>>;
  where?: InputMaybe<V_Game_Entity_State_Final_Bool_Exp>;
};


export type Subscription_RootV_Game_Entity_State_Final_AggregateArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_State_Final_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_State_Final_Order_By>>;
  where?: InputMaybe<V_Game_Entity_State_Final_Bool_Exp>;
};


export type Subscription_RootV_Game_Entity_State_Final_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<V_Game_Entity_State_Final_Stream_Cursor_Input>>;
  where?: InputMaybe<V_Game_Entity_State_Final_Bool_Exp>;
};


export type Subscription_RootV_Game_Entity_StatesArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Entity_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Entity_States_Order_By>>;
  where?: InputMaybe<V_Game_Entity_States_Bool_Exp>;
};


export type Subscription_RootV_Game_Entity_States_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<V_Game_Entity_States_Stream_Cursor_Input>>;
  where?: InputMaybe<V_Game_Entity_States_Bool_Exp>;
};


export type Subscription_RootV_Game_Entity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<V_Game_Entity_Stream_Cursor_Input>>;
  where?: InputMaybe<V_Game_Entity_Bool_Exp>;
};


export type Subscription_RootV_Game_TeamArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Team_Order_By>>;
  where?: InputMaybe<V_Game_Team_Bool_Exp>;
};


export type Subscription_RootV_Game_Team_AggregateArgs = {
  distinct_on?: InputMaybe<Array<V_Game_Team_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Game_Team_Order_By>>;
  where?: InputMaybe<V_Game_Team_Bool_Exp>;
};


export type Subscription_RootV_Game_Team_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<V_Game_Team_Stream_Cursor_Input>>;
  where?: InputMaybe<V_Game_Team_Bool_Exp>;
};


export type Subscription_RootV_Stream_Nats_2023Args = {
  distinct_on?: InputMaybe<Array<V_Stream_Nats_2023_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Stream_Nats_2023_Order_By>>;
  where?: InputMaybe<V_Stream_Nats_2023_Bool_Exp>;
};


export type Subscription_RootV_Stream_Nats_2023_AllArgs = {
  distinct_on?: InputMaybe<Array<V_Stream_Nats_2023_All_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Stream_Nats_2023_All_Order_By>>;
  where?: InputMaybe<V_Stream_Nats_2023_All_Bool_Exp>;
};


export type Subscription_RootV_Stream_Nats_2023_All_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<V_Stream_Nats_2023_All_Stream_Cursor_Input>>;
  where?: InputMaybe<V_Stream_Nats_2023_All_Bool_Exp>;
};


export type Subscription_RootV_Stream_Nats_2023_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<V_Stream_Nats_2023_Stream_Cursor_Input>>;
  where?: InputMaybe<V_Stream_Nats_2023_Bool_Exp>;
};


export type Subscription_RootV_Stream_Nats_2024Args = {
  distinct_on?: InputMaybe<Array<V_Stream_Nats_2024_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<V_Stream_Nats_2024_Order_By>>;
  where?: InputMaybe<V_Stream_Nats_2024_Bool_Exp>;
};


export type Subscription_RootV_Stream_Nats_2024_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<V_Stream_Nats_2024_Stream_Cursor_Input>>;
  where?: InputMaybe<V_Stream_Nats_2024_Bool_Exp>;
};

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: 'tag';
  /** An array relationship */
  game_tags: Array<Game_Tag>;
  /** An aggregate relationship */
  game_tags_aggregate: Game_Tag_Aggregate;
  id: Scalars['bigint']['output'];
  tag_name?: Maybe<Scalars['String']['output']>;
  tag_type?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "tag" */
export type TagGame_TagsArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagGame_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Tag_Order_By>>;
  where?: InputMaybe<Game_Tag_Bool_Exp>;
};

/** aggregated selection of "tag" */
export type Tag_Aggregate = {
  __typename?: 'tag_aggregate';
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "tag" */
export type Tag_Aggregate_Fields = {
  __typename?: 'tag_aggregate_fields';
  avg?: Maybe<Tag_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
  stddev?: Maybe<Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Sum_Fields>;
  var_pop?: Maybe<Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Var_Samp_Fields>;
  variance?: Maybe<Tag_Variance_Fields>;
};


/** aggregate fields of "tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Tag_Avg_Fields = {
  __typename?: 'tag_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Tag_Bool_Exp>>;
  _not?: InputMaybe<Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Tag_Bool_Exp>>;
  game_tags?: InputMaybe<Game_Tag_Bool_Exp>;
  game_tags_aggregate?: InputMaybe<Game_Tag_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  tag_name?: InputMaybe<String_Comparison_Exp>;
  tag_type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: 'tag_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  tag_name?: Maybe<Scalars['String']['output']>;
  tag_type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: 'tag_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  tag_name?: Maybe<Scalars['String']['output']>;
  tag_type?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "tag". */
export type Tag_Order_By = {
  game_tags_aggregate?: InputMaybe<Game_Tag_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  tag_name?: InputMaybe<Order_By>;
  tag_type?: InputMaybe<Order_By>;
};

/** select columns of table "tag" */
export enum Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  TagName = 'tag_name',
  /** column name */
  TagType = 'tag_type'
}

/** aggregate stddev on columns */
export type Tag_Stddev_Fields = {
  __typename?: 'tag_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Tag_Stddev_Pop_Fields = {
  __typename?: 'tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Tag_Stddev_Samp_Fields = {
  __typename?: 'tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "tag" */
export type Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tag_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  tag_name?: InputMaybe<Scalars['String']['input']>;
  tag_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Tag_Sum_Fields = {
  __typename?: 'tag_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Tag_Var_Pop_Fields = {
  __typename?: 'tag_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Tag_Var_Samp_Fields = {
  __typename?: 'tag_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Tag_Variance_Fields = {
  __typename?: 'tag_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "v_game_entity" */
export type V_Game_Entity = {
  __typename?: 'v_game_entity';
  battlesuit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  end_code?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Int']['output']>;
  entity_desc?: Maybe<Scalars['String']['output']>;
  entity_level?: Maybe<Scalars['Int']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  game_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  is_eliminated?: Maybe<Scalars['Boolean']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "v_game_entity" */
export type V_Game_Entity_Aggregate = {
  __typename?: 'v_game_entity_aggregate';
  aggregate?: Maybe<V_Game_Entity_Aggregate_Fields>;
  nodes: Array<V_Game_Entity>;
};

/** aggregate fields of "v_game_entity" */
export type V_Game_Entity_Aggregate_Fields = {
  __typename?: 'v_game_entity_aggregate_fields';
  avg?: Maybe<V_Game_Entity_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<V_Game_Entity_Max_Fields>;
  min?: Maybe<V_Game_Entity_Min_Fields>;
  stddev?: Maybe<V_Game_Entity_Stddev_Fields>;
  stddev_pop?: Maybe<V_Game_Entity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<V_Game_Entity_Stddev_Samp_Fields>;
  sum?: Maybe<V_Game_Entity_Sum_Fields>;
  var_pop?: Maybe<V_Game_Entity_Var_Pop_Fields>;
  var_samp?: Maybe<V_Game_Entity_Var_Samp_Fields>;
  variance?: Maybe<V_Game_Entity_Variance_Fields>;
};


/** aggregate fields of "v_game_entity" */
export type V_Game_Entity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<V_Game_Entity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type V_Game_Entity_Avg_Fields = {
  __typename?: 'v_game_entity_avg_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "v_game_entity". All fields are combined with a logical 'AND'. */
export type V_Game_Entity_Bool_Exp = {
  _and?: InputMaybe<Array<V_Game_Entity_Bool_Exp>>;
  _not?: InputMaybe<V_Game_Entity_Bool_Exp>;
  _or?: InputMaybe<Array<V_Game_Entity_Bool_Exp>>;
  battlesuit?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Int_Comparison_Exp>;
  end_code?: InputMaybe<String_Comparison_Exp>;
  end_time?: InputMaybe<Int_Comparison_Exp>;
  entity_desc?: InputMaybe<String_Comparison_Exp>;
  entity_level?: InputMaybe<Int_Comparison_Exp>;
  entity_type?: InputMaybe<String_Comparison_Exp>;
  game_team_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  ipl_id?: InputMaybe<String_Comparison_Exp>;
  is_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  start_time?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type V_Game_Entity_Max_Fields = {
  __typename?: 'v_game_entity_max_fields';
  battlesuit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  end_code?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Int']['output']>;
  entity_desc?: Maybe<Scalars['String']['output']>;
  entity_level?: Maybe<Scalars['Int']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  game_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type V_Game_Entity_Min_Fields = {
  __typename?: 'v_game_entity_min_fields';
  battlesuit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  end_code?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['Int']['output']>;
  entity_desc?: Maybe<Scalars['String']['output']>;
  entity_level?: Maybe<Scalars['Int']['output']>;
  entity_type?: Maybe<Scalars['String']['output']>;
  game_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "v_game_entity". */
export type V_Game_Entity_Order_By = {
  battlesuit?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  end_code?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  entity_desc?: InputMaybe<Order_By>;
  entity_level?: InputMaybe<Order_By>;
  entity_type?: InputMaybe<Order_By>;
  game_team_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  is_eliminated?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
};

/** select columns of table "v_game_entity" */
export enum V_Game_Entity_Select_Column {
  /** column name */
  Battlesuit = 'battlesuit',
  /** column name */
  Category = 'category',
  /** column name */
  EndCode = 'end_code',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  EntityDesc = 'entity_desc',
  /** column name */
  EntityLevel = 'entity_level',
  /** column name */
  EntityType = 'entity_type',
  /** column name */
  GameTeamId = 'game_team_id',
  /** column name */
  Id = 'id',
  /** column name */
  IplId = 'ipl_id',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  Position = 'position',
  /** column name */
  Score = 'score',
  /** column name */
  StartTime = 'start_time'
}

/** columns and relationships of "v_game_entity_state_final" */
export type V_Game_Entity_State_Final = {
  __typename?: 'v_game_entity_state_final';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  game_entity?: Maybe<Game_Entity>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_eliminated?: Maybe<Scalars['Boolean']['output']>;
  is_final?: Maybe<Scalars['Boolean']['output']>;
  is_nuking?: Maybe<Scalars['Boolean']['output']>;
  is_rapid?: Maybe<Scalars['Boolean']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  last_deac_type?: Maybe<Scalars['deac_type']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  mvp_details?: Maybe<Scalars['jsonb']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "v_game_entity_state_final" */
export type V_Game_Entity_State_FinalMvp_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "v_game_entity_state_final" */
export type V_Game_Entity_State_Final_Aggregate = {
  __typename?: 'v_game_entity_state_final_aggregate';
  aggregate?: Maybe<V_Game_Entity_State_Final_Aggregate_Fields>;
  nodes: Array<V_Game_Entity_State_Final>;
};

/** aggregate fields of "v_game_entity_state_final" */
export type V_Game_Entity_State_Final_Aggregate_Fields = {
  __typename?: 'v_game_entity_state_final_aggregate_fields';
  avg?: Maybe<V_Game_Entity_State_Final_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<V_Game_Entity_State_Final_Max_Fields>;
  min?: Maybe<V_Game_Entity_State_Final_Min_Fields>;
  stddev?: Maybe<V_Game_Entity_State_Final_Stddev_Fields>;
  stddev_pop?: Maybe<V_Game_Entity_State_Final_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<V_Game_Entity_State_Final_Stddev_Samp_Fields>;
  sum?: Maybe<V_Game_Entity_State_Final_Sum_Fields>;
  var_pop?: Maybe<V_Game_Entity_State_Final_Var_Pop_Fields>;
  var_samp?: Maybe<V_Game_Entity_State_Final_Var_Samp_Fields>;
  variance?: Maybe<V_Game_Entity_State_Final_Variance_Fields>;
};


/** aggregate fields of "v_game_entity_state_final" */
export type V_Game_Entity_State_Final_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<V_Game_Entity_State_Final_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type V_Game_Entity_State_Final_Avg_Fields = {
  __typename?: 'v_game_entity_state_final_avg_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "v_game_entity_state_final". All fields are combined with a logical 'AND'. */
export type V_Game_Entity_State_Final_Bool_Exp = {
  _and?: InputMaybe<Array<V_Game_Entity_State_Final_Bool_Exp>>;
  _not?: InputMaybe<V_Game_Entity_State_Final_Bool_Exp>;
  _or?: InputMaybe<Array<V_Game_Entity_State_Final_Bool_Exp>>;
  accuracy?: InputMaybe<Float8_Comparison_Exp>;
  accuracy_during_rapid?: InputMaybe<Float8_Comparison_Exp>;
  ammo_boost_received?: InputMaybe<Smallint_Comparison_Exp>;
  ammo_boosted_players?: InputMaybe<Smallint_Comparison_Exp>;
  ammo_boosts?: InputMaybe<Smallint_Comparison_Exp>;
  assists?: InputMaybe<Smallint_Comparison_Exp>;
  assists_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  award_base?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_opponent_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_team_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_team_nuke_by_resupply?: InputMaybe<Smallint_Comparison_Exp>;
  current_hp?: InputMaybe<Smallint_Comparison_Exp>;
  deac_3hit?: InputMaybe<Smallint_Comparison_Exp>;
  deac_3hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  deac_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  deac_opponent_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  deac_team?: InputMaybe<Smallint_Comparison_Exp>;
  deac_team_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  destroy_base?: InputMaybe<Smallint_Comparison_Exp>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  game_entity?: InputMaybe<Game_Entity_Bool_Exp>;
  hit_diff?: InputMaybe<Float8_Comparison_Exp>;
  hit_diff_during_rapid?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  is_final?: InputMaybe<Boolean_Comparison_Exp>;
  is_nuking?: InputMaybe<Boolean_Comparison_Exp>;
  is_rapid?: InputMaybe<Boolean_Comparison_Exp>;
  last_deac_time?: InputMaybe<Int_Comparison_Exp>;
  last_deac_type?: InputMaybe<Deac_Type_Comparison_Exp>;
  life_boost_received?: InputMaybe<Smallint_Comparison_Exp>;
  life_boosted_players?: InputMaybe<Smallint_Comparison_Exp>;
  life_boosts?: InputMaybe<Smallint_Comparison_Exp>;
  lives?: InputMaybe<Smallint_Comparison_Exp>;
  medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  medic_hits_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  miss_base?: InputMaybe<Smallint_Comparison_Exp>;
  missile_base?: InputMaybe<Smallint_Comparison_Exp>;
  missile_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  missile_team?: InputMaybe<Smallint_Comparison_Exp>;
  missiles_left?: InputMaybe<Smallint_Comparison_Exp>;
  mvp?: InputMaybe<Float8_Comparison_Exp>;
  mvp_details?: InputMaybe<Jsonb_Comparison_Exp>;
  nuke_downtime?: InputMaybe<Int_Comparison_Exp>;
  nuke_medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  nukes_activated?: InputMaybe<Smallint_Comparison_Exp>;
  nukes_detonated?: InputMaybe<Smallint_Comparison_Exp>;
  opp_deac_downtime?: InputMaybe<Int_Comparison_Exp>;
  own_medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_game_end?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_penalty?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_resupply?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_team?: InputMaybe<Smallint_Comparison_Exp>;
  penalties?: InputMaybe<Smallint_Comparison_Exp>;
  penalty_downtime?: InputMaybe<Int_Comparison_Exp>;
  rapid_fires?: InputMaybe<Smallint_Comparison_Exp>;
  resupply_downtime?: InputMaybe<Int_Comparison_Exp>;
  resupply_lives?: InputMaybe<Smallint_Comparison_Exp>;
  resupply_shots?: InputMaybe<Smallint_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  self_deac?: InputMaybe<Smallint_Comparison_Exp>;
  self_deac_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_hit?: InputMaybe<Smallint_Comparison_Exp>;
  self_hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_missile?: InputMaybe<Smallint_Comparison_Exp>;
  self_missile_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_resupply_lives?: InputMaybe<Smallint_Comparison_Exp>;
  self_resupply_shots?: InputMaybe<Smallint_Comparison_Exp>;
  shot_3hit?: InputMaybe<Smallint_Comparison_Exp>;
  shot_3hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shot_base?: InputMaybe<Smallint_Comparison_Exp>;
  shot_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  shot_opponent_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shot_team?: InputMaybe<Smallint_Comparison_Exp>;
  shot_team_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shots?: InputMaybe<Smallint_Comparison_Exp>;
  shots_fired?: InputMaybe<Smallint_Comparison_Exp>;
  shots_fired_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shots_hit?: InputMaybe<Smallint_Comparison_Exp>;
  shots_hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  sp_earned?: InputMaybe<Smallint_Comparison_Exp>;
  sp_spent?: InputMaybe<Smallint_Comparison_Exp>;
  state_time?: InputMaybe<Int_Comparison_Exp>;
  team_deac_downtime?: InputMaybe<Int_Comparison_Exp>;
  times_missiled?: InputMaybe<Smallint_Comparison_Exp>;
  uptime?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type V_Game_Entity_State_Final_Max_Fields = {
  __typename?: 'v_game_entity_state_final_max_fields';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  last_deac_type?: Maybe<Scalars['deac_type']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type V_Game_Entity_State_Final_Min_Fields = {
  __typename?: 'v_game_entity_state_final_min_fields';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  last_deac_type?: Maybe<Scalars['deac_type']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "v_game_entity_state_final". */
export type V_Game_Entity_State_Final_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  game_entity?: InputMaybe<Game_Entity_Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_eliminated?: InputMaybe<Order_By>;
  is_final?: InputMaybe<Order_By>;
  is_nuking?: InputMaybe<Order_By>;
  is_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  last_deac_type?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_details?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** select columns of table "v_game_entity_state_final" */
export enum V_Game_Entity_State_Final_Select_Column {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  AmmoBoostReceived = 'ammo_boost_received',
  /** column name */
  AmmoBoostedPlayers = 'ammo_boosted_players',
  /** column name */
  AmmoBoosts = 'ammo_boosts',
  /** column name */
  Assists = 'assists',
  /** column name */
  AssistsDuringRapid = 'assists_during_rapid',
  /** column name */
  AwardBase = 'award_base',
  /** column name */
  CancelOpponentNuke = 'cancel_opponent_nuke',
  /** column name */
  CancelTeamNuke = 'cancel_team_nuke',
  /** column name */
  CancelTeamNukeByResupply = 'cancel_team_nuke_by_resupply',
  /** column name */
  CurrentHp = 'current_hp',
  /** column name */
  Deac_3hit = 'deac_3hit',
  /** column name */
  Deac_3hitDuringRapid = 'deac_3hit_during_rapid',
  /** column name */
  DeacOpponent = 'deac_opponent',
  /** column name */
  DeacOpponentDuringRapid = 'deac_opponent_during_rapid',
  /** column name */
  DeacTeam = 'deac_team',
  /** column name */
  DeacTeamDuringRapid = 'deac_team_during_rapid',
  /** column name */
  DestroyBase = 'destroy_base',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  IsFinal = 'is_final',
  /** column name */
  IsNuking = 'is_nuking',
  /** column name */
  IsRapid = 'is_rapid',
  /** column name */
  LastDeacTime = 'last_deac_time',
  /** column name */
  LastDeacType = 'last_deac_type',
  /** column name */
  LifeBoostReceived = 'life_boost_received',
  /** column name */
  LifeBoostedPlayers = 'life_boosted_players',
  /** column name */
  LifeBoosts = 'life_boosts',
  /** column name */
  Lives = 'lives',
  /** column name */
  MedicHits = 'medic_hits',
  /** column name */
  MedicHitsDuringRapid = 'medic_hits_during_rapid',
  /** column name */
  MissBase = 'miss_base',
  /** column name */
  MissileBase = 'missile_base',
  /** column name */
  MissileOpponent = 'missile_opponent',
  /** column name */
  MissileTeam = 'missile_team',
  /** column name */
  MissilesLeft = 'missiles_left',
  /** column name */
  Mvp = 'mvp',
  /** column name */
  MvpDetails = 'mvp_details',
  /** column name */
  NukeDowntime = 'nuke_downtime',
  /** column name */
  NukeMedicHits = 'nuke_medic_hits',
  /** column name */
  NukesActivated = 'nukes_activated',
  /** column name */
  NukesDetonated = 'nukes_detonated',
  /** column name */
  OppDeacDowntime = 'opp_deac_downtime',
  /** column name */
  OwnMedicHits = 'own_medic_hits',
  /** column name */
  OwnNukeCanceledByGameEnd = 'own_nuke_canceled_by_game_end',
  /** column name */
  OwnNukeCanceledByNuke = 'own_nuke_canceled_by_nuke',
  /** column name */
  OwnNukeCanceledByOpponent = 'own_nuke_canceled_by_opponent',
  /** column name */
  OwnNukeCanceledByPenalty = 'own_nuke_canceled_by_penalty',
  /** column name */
  OwnNukeCanceledByResupply = 'own_nuke_canceled_by_resupply',
  /** column name */
  OwnNukeCanceledByTeam = 'own_nuke_canceled_by_team',
  /** column name */
  Penalties = 'penalties',
  /** column name */
  PenaltyDowntime = 'penalty_downtime',
  /** column name */
  RapidFires = 'rapid_fires',
  /** column name */
  ResupplyDowntime = 'resupply_downtime',
  /** column name */
  ResupplyLives = 'resupply_lives',
  /** column name */
  ResupplyShots = 'resupply_shots',
  /** column name */
  Score = 'score',
  /** column name */
  SelfDeac = 'self_deac',
  /** column name */
  SelfDeacDuringRapid = 'self_deac_during_rapid',
  /** column name */
  SelfHit = 'self_hit',
  /** column name */
  SelfHitDuringRapid = 'self_hit_during_rapid',
  /** column name */
  SelfMissile = 'self_missile',
  /** column name */
  SelfMissileDuringRapid = 'self_missile_during_rapid',
  /** column name */
  SelfResupplyLives = 'self_resupply_lives',
  /** column name */
  SelfResupplyShots = 'self_resupply_shots',
  /** column name */
  Shot_3hit = 'shot_3hit',
  /** column name */
  Shot_3hitDuringRapid = 'shot_3hit_during_rapid',
  /** column name */
  ShotBase = 'shot_base',
  /** column name */
  ShotOpponent = 'shot_opponent',
  /** column name */
  ShotOpponentDuringRapid = 'shot_opponent_during_rapid',
  /** column name */
  ShotTeam = 'shot_team',
  /** column name */
  ShotTeamDuringRapid = 'shot_team_during_rapid',
  /** column name */
  Shots = 'shots',
  /** column name */
  ShotsFired = 'shots_fired',
  /** column name */
  ShotsFiredDuringRapid = 'shots_fired_during_rapid',
  /** column name */
  ShotsHit = 'shots_hit',
  /** column name */
  ShotsHitDuringRapid = 'shots_hit_during_rapid',
  /** column name */
  SpEarned = 'sp_earned',
  /** column name */
  SpSpent = 'sp_spent',
  /** column name */
  StateTime = 'state_time',
  /** column name */
  TeamDeacDowntime = 'team_deac_downtime',
  /** column name */
  TimesMissiled = 'times_missiled',
  /** column name */
  Uptime = 'uptime'
}

/** aggregate stddev on columns */
export type V_Game_Entity_State_Final_Stddev_Fields = {
  __typename?: 'v_game_entity_state_final_stddev_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type V_Game_Entity_State_Final_Stddev_Pop_Fields = {
  __typename?: 'v_game_entity_state_final_stddev_pop_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type V_Game_Entity_State_Final_Stddev_Samp_Fields = {
  __typename?: 'v_game_entity_state_final_stddev_samp_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "v_game_entity_state_final" */
export type V_Game_Entity_State_Final_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V_Game_Entity_State_Final_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V_Game_Entity_State_Final_Stream_Cursor_Value_Input = {
  accuracy?: InputMaybe<Scalars['float8']['input']>;
  accuracy_during_rapid?: InputMaybe<Scalars['float8']['input']>;
  ammo_boost_received?: InputMaybe<Scalars['smallint']['input']>;
  ammo_boosted_players?: InputMaybe<Scalars['smallint']['input']>;
  ammo_boosts?: InputMaybe<Scalars['smallint']['input']>;
  assists?: InputMaybe<Scalars['smallint']['input']>;
  assists_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  award_base?: InputMaybe<Scalars['smallint']['input']>;
  cancel_opponent_nuke?: InputMaybe<Scalars['smallint']['input']>;
  cancel_team_nuke?: InputMaybe<Scalars['smallint']['input']>;
  cancel_team_nuke_by_resupply?: InputMaybe<Scalars['smallint']['input']>;
  current_hp?: InputMaybe<Scalars['smallint']['input']>;
  deac_3hit?: InputMaybe<Scalars['smallint']['input']>;
  deac_3hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  deac_opponent?: InputMaybe<Scalars['smallint']['input']>;
  deac_opponent_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  deac_team?: InputMaybe<Scalars['smallint']['input']>;
  deac_team_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  destroy_base?: InputMaybe<Scalars['smallint']['input']>;
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  hit_diff?: InputMaybe<Scalars['float8']['input']>;
  hit_diff_during_rapid?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  is_final?: InputMaybe<Scalars['Boolean']['input']>;
  is_nuking?: InputMaybe<Scalars['Boolean']['input']>;
  is_rapid?: InputMaybe<Scalars['Boolean']['input']>;
  last_deac_time?: InputMaybe<Scalars['Int']['input']>;
  last_deac_type?: InputMaybe<Scalars['deac_type']['input']>;
  life_boost_received?: InputMaybe<Scalars['smallint']['input']>;
  life_boosted_players?: InputMaybe<Scalars['smallint']['input']>;
  life_boosts?: InputMaybe<Scalars['smallint']['input']>;
  lives?: InputMaybe<Scalars['smallint']['input']>;
  medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  medic_hits_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  miss_base?: InputMaybe<Scalars['smallint']['input']>;
  missile_base?: InputMaybe<Scalars['smallint']['input']>;
  missile_opponent?: InputMaybe<Scalars['smallint']['input']>;
  missile_team?: InputMaybe<Scalars['smallint']['input']>;
  missiles_left?: InputMaybe<Scalars['smallint']['input']>;
  mvp?: InputMaybe<Scalars['float8']['input']>;
  mvp_details?: InputMaybe<Scalars['jsonb']['input']>;
  nuke_downtime?: InputMaybe<Scalars['Int']['input']>;
  nuke_medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  nukes_activated?: InputMaybe<Scalars['smallint']['input']>;
  nukes_detonated?: InputMaybe<Scalars['smallint']['input']>;
  opp_deac_downtime?: InputMaybe<Scalars['Int']['input']>;
  own_medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_game_end?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_nuke?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_opponent?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_penalty?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_resupply?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_team?: InputMaybe<Scalars['smallint']['input']>;
  penalties?: InputMaybe<Scalars['smallint']['input']>;
  penalty_downtime?: InputMaybe<Scalars['Int']['input']>;
  rapid_fires?: InputMaybe<Scalars['smallint']['input']>;
  resupply_downtime?: InputMaybe<Scalars['Int']['input']>;
  resupply_lives?: InputMaybe<Scalars['smallint']['input']>;
  resupply_shots?: InputMaybe<Scalars['smallint']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  self_deac?: InputMaybe<Scalars['smallint']['input']>;
  self_deac_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_hit?: InputMaybe<Scalars['smallint']['input']>;
  self_hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_missile?: InputMaybe<Scalars['smallint']['input']>;
  self_missile_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_resupply_lives?: InputMaybe<Scalars['smallint']['input']>;
  self_resupply_shots?: InputMaybe<Scalars['smallint']['input']>;
  shot_3hit?: InputMaybe<Scalars['smallint']['input']>;
  shot_3hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shot_base?: InputMaybe<Scalars['smallint']['input']>;
  shot_opponent?: InputMaybe<Scalars['smallint']['input']>;
  shot_opponent_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shot_team?: InputMaybe<Scalars['smallint']['input']>;
  shot_team_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shots?: InputMaybe<Scalars['smallint']['input']>;
  shots_fired?: InputMaybe<Scalars['smallint']['input']>;
  shots_fired_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shots_hit?: InputMaybe<Scalars['smallint']['input']>;
  shots_hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  sp_earned?: InputMaybe<Scalars['smallint']['input']>;
  sp_spent?: InputMaybe<Scalars['smallint']['input']>;
  state_time?: InputMaybe<Scalars['Int']['input']>;
  team_deac_downtime?: InputMaybe<Scalars['Int']['input']>;
  times_missiled?: InputMaybe<Scalars['smallint']['input']>;
  uptime?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type V_Game_Entity_State_Final_Sum_Fields = {
  __typename?: 'v_game_entity_state_final_sum_fields';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type V_Game_Entity_State_Final_Var_Pop_Fields = {
  __typename?: 'v_game_entity_state_final_var_pop_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type V_Game_Entity_State_Final_Var_Samp_Fields = {
  __typename?: 'v_game_entity_state_final_var_samp_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type V_Game_Entity_State_Final_Variance_Fields = {
  __typename?: 'v_game_entity_state_final_variance_fields';
  accuracy?: Maybe<Scalars['Float']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['Float']['output']>;
  ammo_boost_received?: Maybe<Scalars['Float']['output']>;
  ammo_boosted_players?: Maybe<Scalars['Float']['output']>;
  ammo_boosts?: Maybe<Scalars['Float']['output']>;
  assists?: Maybe<Scalars['Float']['output']>;
  assists_during_rapid?: Maybe<Scalars['Float']['output']>;
  award_base?: Maybe<Scalars['Float']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke?: Maybe<Scalars['Float']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['Float']['output']>;
  current_hp?: Maybe<Scalars['Float']['output']>;
  deac_3hit?: Maybe<Scalars['Float']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_opponent?: Maybe<Scalars['Float']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  deac_team?: Maybe<Scalars['Float']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  destroy_base?: Maybe<Scalars['Float']['output']>;
  entity_id?: Maybe<Scalars['Float']['output']>;
  hit_diff?: Maybe<Scalars['Float']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['Float']['output']>;
  last_deac_time?: Maybe<Scalars['Float']['output']>;
  life_boost_received?: Maybe<Scalars['Float']['output']>;
  life_boosted_players?: Maybe<Scalars['Float']['output']>;
  life_boosts?: Maybe<Scalars['Float']['output']>;
  lives?: Maybe<Scalars['Float']['output']>;
  medic_hits?: Maybe<Scalars['Float']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['Float']['output']>;
  miss_base?: Maybe<Scalars['Float']['output']>;
  missile_base?: Maybe<Scalars['Float']['output']>;
  missile_opponent?: Maybe<Scalars['Float']['output']>;
  missile_team?: Maybe<Scalars['Float']['output']>;
  missiles_left?: Maybe<Scalars['Float']['output']>;
  mvp?: Maybe<Scalars['Float']['output']>;
  nuke_downtime?: Maybe<Scalars['Float']['output']>;
  nuke_medic_hits?: Maybe<Scalars['Float']['output']>;
  nukes_activated?: Maybe<Scalars['Float']['output']>;
  nukes_detonated?: Maybe<Scalars['Float']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Float']['output']>;
  own_medic_hits?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['Float']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['Float']['output']>;
  penalties?: Maybe<Scalars['Float']['output']>;
  penalty_downtime?: Maybe<Scalars['Float']['output']>;
  rapid_fires?: Maybe<Scalars['Float']['output']>;
  resupply_downtime?: Maybe<Scalars['Float']['output']>;
  resupply_lives?: Maybe<Scalars['Float']['output']>;
  resupply_shots?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  self_deac?: Maybe<Scalars['Float']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_hit?: Maybe<Scalars['Float']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_missile?: Maybe<Scalars['Float']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['Float']['output']>;
  self_resupply_lives?: Maybe<Scalars['Float']['output']>;
  self_resupply_shots?: Maybe<Scalars['Float']['output']>;
  shot_3hit?: Maybe<Scalars['Float']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_base?: Maybe<Scalars['Float']['output']>;
  shot_opponent?: Maybe<Scalars['Float']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['Float']['output']>;
  shot_team?: Maybe<Scalars['Float']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots?: Maybe<Scalars['Float']['output']>;
  shots_fired?: Maybe<Scalars['Float']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['Float']['output']>;
  shots_hit?: Maybe<Scalars['Float']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['Float']['output']>;
  sp_earned?: Maybe<Scalars['Float']['output']>;
  sp_spent?: Maybe<Scalars['Float']['output']>;
  state_time?: Maybe<Scalars['Float']['output']>;
  team_deac_downtime?: Maybe<Scalars['Float']['output']>;
  times_missiled?: Maybe<Scalars['Float']['output']>;
  uptime?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "v_game_entity_states" */
export type V_Game_Entity_States = {
  __typename?: 'v_game_entity_states';
  accuracy?: Maybe<Scalars['float8']['output']>;
  accuracy_during_rapid?: Maybe<Scalars['float8']['output']>;
  ammo_boost_received?: Maybe<Scalars['smallint']['output']>;
  ammo_boosted_players?: Maybe<Scalars['smallint']['output']>;
  ammo_boosts?: Maybe<Scalars['smallint']['output']>;
  assists?: Maybe<Scalars['smallint']['output']>;
  assists_during_rapid?: Maybe<Scalars['smallint']['output']>;
  award_base?: Maybe<Scalars['smallint']['output']>;
  cancel_opponent_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke?: Maybe<Scalars['smallint']['output']>;
  cancel_team_nuke_by_resupply?: Maybe<Scalars['smallint']['output']>;
  current_hp?: Maybe<Scalars['smallint']['output']>;
  deac_3hit?: Maybe<Scalars['smallint']['output']>;
  deac_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_opponent?: Maybe<Scalars['smallint']['output']>;
  deac_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  deac_team?: Maybe<Scalars['smallint']['output']>;
  deac_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  destroy_base?: Maybe<Scalars['smallint']['output']>;
  entity_id?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  game_entity?: Maybe<Game_Entity>;
  hit_diff?: Maybe<Scalars['float8']['output']>;
  hit_diff_during_rapid?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_eliminated?: Maybe<Scalars['Boolean']['output']>;
  is_final?: Maybe<Scalars['Boolean']['output']>;
  is_nuking?: Maybe<Scalars['Boolean']['output']>;
  is_rapid?: Maybe<Scalars['Boolean']['output']>;
  last_deac_time?: Maybe<Scalars['Int']['output']>;
  last_deac_type?: Maybe<Scalars['deac_type']['output']>;
  life_boost_received?: Maybe<Scalars['smallint']['output']>;
  life_boosted_players?: Maybe<Scalars['smallint']['output']>;
  life_boosts?: Maybe<Scalars['smallint']['output']>;
  lives?: Maybe<Scalars['smallint']['output']>;
  medic_hits?: Maybe<Scalars['smallint']['output']>;
  medic_hits_during_rapid?: Maybe<Scalars['smallint']['output']>;
  miss_base?: Maybe<Scalars['smallint']['output']>;
  missile_base?: Maybe<Scalars['smallint']['output']>;
  missile_opponent?: Maybe<Scalars['smallint']['output']>;
  missile_team?: Maybe<Scalars['smallint']['output']>;
  missiles_left?: Maybe<Scalars['smallint']['output']>;
  mvp?: Maybe<Scalars['float8']['output']>;
  mvp_details?: Maybe<Scalars['jsonb']['output']>;
  nuke_downtime?: Maybe<Scalars['Int']['output']>;
  nuke_medic_hits?: Maybe<Scalars['smallint']['output']>;
  nukes_activated?: Maybe<Scalars['smallint']['output']>;
  nukes_detonated?: Maybe<Scalars['smallint']['output']>;
  opp_deac_downtime?: Maybe<Scalars['Int']['output']>;
  own_medic_hits?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_game_end?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_nuke?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_opponent?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_penalty?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_resupply?: Maybe<Scalars['smallint']['output']>;
  own_nuke_canceled_by_team?: Maybe<Scalars['smallint']['output']>;
  penalties?: Maybe<Scalars['smallint']['output']>;
  penalty_downtime?: Maybe<Scalars['Int']['output']>;
  rapid_fires?: Maybe<Scalars['smallint']['output']>;
  resupply_downtime?: Maybe<Scalars['Int']['output']>;
  resupply_lives?: Maybe<Scalars['smallint']['output']>;
  resupply_shots?: Maybe<Scalars['smallint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  self_deac?: Maybe<Scalars['smallint']['output']>;
  self_deac_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_hit?: Maybe<Scalars['smallint']['output']>;
  self_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_missile?: Maybe<Scalars['smallint']['output']>;
  self_missile_during_rapid?: Maybe<Scalars['smallint']['output']>;
  self_resupply_lives?: Maybe<Scalars['smallint']['output']>;
  self_resupply_shots?: Maybe<Scalars['smallint']['output']>;
  shot_3hit?: Maybe<Scalars['smallint']['output']>;
  shot_3hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_base?: Maybe<Scalars['smallint']['output']>;
  shot_opponent?: Maybe<Scalars['smallint']['output']>;
  shot_opponent_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shot_team?: Maybe<Scalars['smallint']['output']>;
  shot_team_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots?: Maybe<Scalars['smallint']['output']>;
  shots_fired?: Maybe<Scalars['smallint']['output']>;
  shots_fired_during_rapid?: Maybe<Scalars['smallint']['output']>;
  shots_hit?: Maybe<Scalars['smallint']['output']>;
  shots_hit_during_rapid?: Maybe<Scalars['smallint']['output']>;
  sp_earned?: Maybe<Scalars['smallint']['output']>;
  sp_spent?: Maybe<Scalars['smallint']['output']>;
  state_time?: Maybe<Scalars['Int']['output']>;
  team_deac_downtime?: Maybe<Scalars['Int']['output']>;
  times_missiled?: Maybe<Scalars['smallint']['output']>;
  uptime?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "v_game_entity_states" */
export type V_Game_Entity_StatesMvp_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "v_game_entity_states" */
export type V_Game_Entity_States_Aggregate_Order_By = {
  avg?: InputMaybe<V_Game_Entity_States_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<V_Game_Entity_States_Max_Order_By>;
  min?: InputMaybe<V_Game_Entity_States_Min_Order_By>;
  stddev?: InputMaybe<V_Game_Entity_States_Stddev_Order_By>;
  stddev_pop?: InputMaybe<V_Game_Entity_States_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<V_Game_Entity_States_Stddev_Samp_Order_By>;
  sum?: InputMaybe<V_Game_Entity_States_Sum_Order_By>;
  var_pop?: InputMaybe<V_Game_Entity_States_Var_Pop_Order_By>;
  var_samp?: InputMaybe<V_Game_Entity_States_Var_Samp_Order_By>;
  variance?: InputMaybe<V_Game_Entity_States_Variance_Order_By>;
};

/** order by avg() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Avg_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "v_game_entity_states". All fields are combined with a logical 'AND'. */
export type V_Game_Entity_States_Bool_Exp = {
  _and?: InputMaybe<Array<V_Game_Entity_States_Bool_Exp>>;
  _not?: InputMaybe<V_Game_Entity_States_Bool_Exp>;
  _or?: InputMaybe<Array<V_Game_Entity_States_Bool_Exp>>;
  accuracy?: InputMaybe<Float8_Comparison_Exp>;
  accuracy_during_rapid?: InputMaybe<Float8_Comparison_Exp>;
  ammo_boost_received?: InputMaybe<Smallint_Comparison_Exp>;
  ammo_boosted_players?: InputMaybe<Smallint_Comparison_Exp>;
  ammo_boosts?: InputMaybe<Smallint_Comparison_Exp>;
  assists?: InputMaybe<Smallint_Comparison_Exp>;
  assists_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  award_base?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_opponent_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_team_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  cancel_team_nuke_by_resupply?: InputMaybe<Smallint_Comparison_Exp>;
  current_hp?: InputMaybe<Smallint_Comparison_Exp>;
  deac_3hit?: InputMaybe<Smallint_Comparison_Exp>;
  deac_3hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  deac_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  deac_opponent_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  deac_team?: InputMaybe<Smallint_Comparison_Exp>;
  deac_team_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  destroy_base?: InputMaybe<Smallint_Comparison_Exp>;
  entity_id?: InputMaybe<Bigint_Comparison_Exp>;
  game_entity?: InputMaybe<Game_Entity_Bool_Exp>;
  hit_diff?: InputMaybe<Float8_Comparison_Exp>;
  hit_diff_during_rapid?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  is_final?: InputMaybe<Boolean_Comparison_Exp>;
  is_nuking?: InputMaybe<Boolean_Comparison_Exp>;
  is_rapid?: InputMaybe<Boolean_Comparison_Exp>;
  last_deac_time?: InputMaybe<Int_Comparison_Exp>;
  last_deac_type?: InputMaybe<Deac_Type_Comparison_Exp>;
  life_boost_received?: InputMaybe<Smallint_Comparison_Exp>;
  life_boosted_players?: InputMaybe<Smallint_Comparison_Exp>;
  life_boosts?: InputMaybe<Smallint_Comparison_Exp>;
  lives?: InputMaybe<Smallint_Comparison_Exp>;
  medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  medic_hits_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  miss_base?: InputMaybe<Smallint_Comparison_Exp>;
  missile_base?: InputMaybe<Smallint_Comparison_Exp>;
  missile_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  missile_team?: InputMaybe<Smallint_Comparison_Exp>;
  missiles_left?: InputMaybe<Smallint_Comparison_Exp>;
  mvp?: InputMaybe<Float8_Comparison_Exp>;
  mvp_details?: InputMaybe<Jsonb_Comparison_Exp>;
  nuke_downtime?: InputMaybe<Int_Comparison_Exp>;
  nuke_medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  nukes_activated?: InputMaybe<Smallint_Comparison_Exp>;
  nukes_detonated?: InputMaybe<Smallint_Comparison_Exp>;
  opp_deac_downtime?: InputMaybe<Int_Comparison_Exp>;
  own_medic_hits?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_game_end?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_nuke?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_penalty?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_resupply?: InputMaybe<Smallint_Comparison_Exp>;
  own_nuke_canceled_by_team?: InputMaybe<Smallint_Comparison_Exp>;
  penalties?: InputMaybe<Smallint_Comparison_Exp>;
  penalty_downtime?: InputMaybe<Int_Comparison_Exp>;
  rapid_fires?: InputMaybe<Smallint_Comparison_Exp>;
  resupply_downtime?: InputMaybe<Int_Comparison_Exp>;
  resupply_lives?: InputMaybe<Smallint_Comparison_Exp>;
  resupply_shots?: InputMaybe<Smallint_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  self_deac?: InputMaybe<Smallint_Comparison_Exp>;
  self_deac_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_hit?: InputMaybe<Smallint_Comparison_Exp>;
  self_hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_missile?: InputMaybe<Smallint_Comparison_Exp>;
  self_missile_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  self_resupply_lives?: InputMaybe<Smallint_Comparison_Exp>;
  self_resupply_shots?: InputMaybe<Smallint_Comparison_Exp>;
  shot_3hit?: InputMaybe<Smallint_Comparison_Exp>;
  shot_3hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shot_base?: InputMaybe<Smallint_Comparison_Exp>;
  shot_opponent?: InputMaybe<Smallint_Comparison_Exp>;
  shot_opponent_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shot_team?: InputMaybe<Smallint_Comparison_Exp>;
  shot_team_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shots?: InputMaybe<Smallint_Comparison_Exp>;
  shots_fired?: InputMaybe<Smallint_Comparison_Exp>;
  shots_fired_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  shots_hit?: InputMaybe<Smallint_Comparison_Exp>;
  shots_hit_during_rapid?: InputMaybe<Smallint_Comparison_Exp>;
  sp_earned?: InputMaybe<Smallint_Comparison_Exp>;
  sp_spent?: InputMaybe<Smallint_Comparison_Exp>;
  state_time?: InputMaybe<Int_Comparison_Exp>;
  team_deac_downtime?: InputMaybe<Int_Comparison_Exp>;
  times_missiled?: InputMaybe<Smallint_Comparison_Exp>;
  uptime?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Max_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  last_deac_type?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Min_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  last_deac_type?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "v_game_entity_states". */
export type V_Game_Entity_States_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  game_entity?: InputMaybe<Game_Entity_Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_eliminated?: InputMaybe<Order_By>;
  is_final?: InputMaybe<Order_By>;
  is_nuking?: InputMaybe<Order_By>;
  is_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  last_deac_type?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  mvp_details?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** select columns of table "v_game_entity_states" */
export enum V_Game_Entity_States_Select_Column {
  /** column name */
  Accuracy = 'accuracy',
  /** column name */
  AccuracyDuringRapid = 'accuracy_during_rapid',
  /** column name */
  AmmoBoostReceived = 'ammo_boost_received',
  /** column name */
  AmmoBoostedPlayers = 'ammo_boosted_players',
  /** column name */
  AmmoBoosts = 'ammo_boosts',
  /** column name */
  Assists = 'assists',
  /** column name */
  AssistsDuringRapid = 'assists_during_rapid',
  /** column name */
  AwardBase = 'award_base',
  /** column name */
  CancelOpponentNuke = 'cancel_opponent_nuke',
  /** column name */
  CancelTeamNuke = 'cancel_team_nuke',
  /** column name */
  CancelTeamNukeByResupply = 'cancel_team_nuke_by_resupply',
  /** column name */
  CurrentHp = 'current_hp',
  /** column name */
  Deac_3hit = 'deac_3hit',
  /** column name */
  Deac_3hitDuringRapid = 'deac_3hit_during_rapid',
  /** column name */
  DeacOpponent = 'deac_opponent',
  /** column name */
  DeacOpponentDuringRapid = 'deac_opponent_during_rapid',
  /** column name */
  DeacTeam = 'deac_team',
  /** column name */
  DeacTeamDuringRapid = 'deac_team_during_rapid',
  /** column name */
  DestroyBase = 'destroy_base',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  HitDiff = 'hit_diff',
  /** column name */
  HitDiffDuringRapid = 'hit_diff_during_rapid',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  IsFinal = 'is_final',
  /** column name */
  IsNuking = 'is_nuking',
  /** column name */
  IsRapid = 'is_rapid',
  /** column name */
  LastDeacTime = 'last_deac_time',
  /** column name */
  LastDeacType = 'last_deac_type',
  /** column name */
  LifeBoostReceived = 'life_boost_received',
  /** column name */
  LifeBoostedPlayers = 'life_boosted_players',
  /** column name */
  LifeBoosts = 'life_boosts',
  /** column name */
  Lives = 'lives',
  /** column name */
  MedicHits = 'medic_hits',
  /** column name */
  MedicHitsDuringRapid = 'medic_hits_during_rapid',
  /** column name */
  MissBase = 'miss_base',
  /** column name */
  MissileBase = 'missile_base',
  /** column name */
  MissileOpponent = 'missile_opponent',
  /** column name */
  MissileTeam = 'missile_team',
  /** column name */
  MissilesLeft = 'missiles_left',
  /** column name */
  Mvp = 'mvp',
  /** column name */
  MvpDetails = 'mvp_details',
  /** column name */
  NukeDowntime = 'nuke_downtime',
  /** column name */
  NukeMedicHits = 'nuke_medic_hits',
  /** column name */
  NukesActivated = 'nukes_activated',
  /** column name */
  NukesDetonated = 'nukes_detonated',
  /** column name */
  OppDeacDowntime = 'opp_deac_downtime',
  /** column name */
  OwnMedicHits = 'own_medic_hits',
  /** column name */
  OwnNukeCanceledByGameEnd = 'own_nuke_canceled_by_game_end',
  /** column name */
  OwnNukeCanceledByNuke = 'own_nuke_canceled_by_nuke',
  /** column name */
  OwnNukeCanceledByOpponent = 'own_nuke_canceled_by_opponent',
  /** column name */
  OwnNukeCanceledByPenalty = 'own_nuke_canceled_by_penalty',
  /** column name */
  OwnNukeCanceledByResupply = 'own_nuke_canceled_by_resupply',
  /** column name */
  OwnNukeCanceledByTeam = 'own_nuke_canceled_by_team',
  /** column name */
  Penalties = 'penalties',
  /** column name */
  PenaltyDowntime = 'penalty_downtime',
  /** column name */
  RapidFires = 'rapid_fires',
  /** column name */
  ResupplyDowntime = 'resupply_downtime',
  /** column name */
  ResupplyLives = 'resupply_lives',
  /** column name */
  ResupplyShots = 'resupply_shots',
  /** column name */
  Score = 'score',
  /** column name */
  SelfDeac = 'self_deac',
  /** column name */
  SelfDeacDuringRapid = 'self_deac_during_rapid',
  /** column name */
  SelfHit = 'self_hit',
  /** column name */
  SelfHitDuringRapid = 'self_hit_during_rapid',
  /** column name */
  SelfMissile = 'self_missile',
  /** column name */
  SelfMissileDuringRapid = 'self_missile_during_rapid',
  /** column name */
  SelfResupplyLives = 'self_resupply_lives',
  /** column name */
  SelfResupplyShots = 'self_resupply_shots',
  /** column name */
  Shot_3hit = 'shot_3hit',
  /** column name */
  Shot_3hitDuringRapid = 'shot_3hit_during_rapid',
  /** column name */
  ShotBase = 'shot_base',
  /** column name */
  ShotOpponent = 'shot_opponent',
  /** column name */
  ShotOpponentDuringRapid = 'shot_opponent_during_rapid',
  /** column name */
  ShotTeam = 'shot_team',
  /** column name */
  ShotTeamDuringRapid = 'shot_team_during_rapid',
  /** column name */
  Shots = 'shots',
  /** column name */
  ShotsFired = 'shots_fired',
  /** column name */
  ShotsFiredDuringRapid = 'shots_fired_during_rapid',
  /** column name */
  ShotsHit = 'shots_hit',
  /** column name */
  ShotsHitDuringRapid = 'shots_hit_during_rapid',
  /** column name */
  SpEarned = 'sp_earned',
  /** column name */
  SpSpent = 'sp_spent',
  /** column name */
  StateTime = 'state_time',
  /** column name */
  TeamDeacDowntime = 'team_deac_downtime',
  /** column name */
  TimesMissiled = 'times_missiled',
  /** column name */
  Uptime = 'uptime'
}

/** order by stddev() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Stddev_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Stddev_Pop_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Stddev_Samp_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "v_game_entity_states" */
export type V_Game_Entity_States_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V_Game_Entity_States_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V_Game_Entity_States_Stream_Cursor_Value_Input = {
  accuracy?: InputMaybe<Scalars['float8']['input']>;
  accuracy_during_rapid?: InputMaybe<Scalars['float8']['input']>;
  ammo_boost_received?: InputMaybe<Scalars['smallint']['input']>;
  ammo_boosted_players?: InputMaybe<Scalars['smallint']['input']>;
  ammo_boosts?: InputMaybe<Scalars['smallint']['input']>;
  assists?: InputMaybe<Scalars['smallint']['input']>;
  assists_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  award_base?: InputMaybe<Scalars['smallint']['input']>;
  cancel_opponent_nuke?: InputMaybe<Scalars['smallint']['input']>;
  cancel_team_nuke?: InputMaybe<Scalars['smallint']['input']>;
  cancel_team_nuke_by_resupply?: InputMaybe<Scalars['smallint']['input']>;
  current_hp?: InputMaybe<Scalars['smallint']['input']>;
  deac_3hit?: InputMaybe<Scalars['smallint']['input']>;
  deac_3hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  deac_opponent?: InputMaybe<Scalars['smallint']['input']>;
  deac_opponent_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  deac_team?: InputMaybe<Scalars['smallint']['input']>;
  deac_team_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  destroy_base?: InputMaybe<Scalars['smallint']['input']>;
  entity_id?: InputMaybe<Scalars['bigint']['input']>;
  hit_diff?: InputMaybe<Scalars['float8']['input']>;
  hit_diff_during_rapid?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  is_final?: InputMaybe<Scalars['Boolean']['input']>;
  is_nuking?: InputMaybe<Scalars['Boolean']['input']>;
  is_rapid?: InputMaybe<Scalars['Boolean']['input']>;
  last_deac_time?: InputMaybe<Scalars['Int']['input']>;
  last_deac_type?: InputMaybe<Scalars['deac_type']['input']>;
  life_boost_received?: InputMaybe<Scalars['smallint']['input']>;
  life_boosted_players?: InputMaybe<Scalars['smallint']['input']>;
  life_boosts?: InputMaybe<Scalars['smallint']['input']>;
  lives?: InputMaybe<Scalars['smallint']['input']>;
  medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  medic_hits_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  miss_base?: InputMaybe<Scalars['smallint']['input']>;
  missile_base?: InputMaybe<Scalars['smallint']['input']>;
  missile_opponent?: InputMaybe<Scalars['smallint']['input']>;
  missile_team?: InputMaybe<Scalars['smallint']['input']>;
  missiles_left?: InputMaybe<Scalars['smallint']['input']>;
  mvp?: InputMaybe<Scalars['float8']['input']>;
  mvp_details?: InputMaybe<Scalars['jsonb']['input']>;
  nuke_downtime?: InputMaybe<Scalars['Int']['input']>;
  nuke_medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  nukes_activated?: InputMaybe<Scalars['smallint']['input']>;
  nukes_detonated?: InputMaybe<Scalars['smallint']['input']>;
  opp_deac_downtime?: InputMaybe<Scalars['Int']['input']>;
  own_medic_hits?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_game_end?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_nuke?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_opponent?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_penalty?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_resupply?: InputMaybe<Scalars['smallint']['input']>;
  own_nuke_canceled_by_team?: InputMaybe<Scalars['smallint']['input']>;
  penalties?: InputMaybe<Scalars['smallint']['input']>;
  penalty_downtime?: InputMaybe<Scalars['Int']['input']>;
  rapid_fires?: InputMaybe<Scalars['smallint']['input']>;
  resupply_downtime?: InputMaybe<Scalars['Int']['input']>;
  resupply_lives?: InputMaybe<Scalars['smallint']['input']>;
  resupply_shots?: InputMaybe<Scalars['smallint']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  self_deac?: InputMaybe<Scalars['smallint']['input']>;
  self_deac_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_hit?: InputMaybe<Scalars['smallint']['input']>;
  self_hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_missile?: InputMaybe<Scalars['smallint']['input']>;
  self_missile_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  self_resupply_lives?: InputMaybe<Scalars['smallint']['input']>;
  self_resupply_shots?: InputMaybe<Scalars['smallint']['input']>;
  shot_3hit?: InputMaybe<Scalars['smallint']['input']>;
  shot_3hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shot_base?: InputMaybe<Scalars['smallint']['input']>;
  shot_opponent?: InputMaybe<Scalars['smallint']['input']>;
  shot_opponent_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shot_team?: InputMaybe<Scalars['smallint']['input']>;
  shot_team_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shots?: InputMaybe<Scalars['smallint']['input']>;
  shots_fired?: InputMaybe<Scalars['smallint']['input']>;
  shots_fired_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  shots_hit?: InputMaybe<Scalars['smallint']['input']>;
  shots_hit_during_rapid?: InputMaybe<Scalars['smallint']['input']>;
  sp_earned?: InputMaybe<Scalars['smallint']['input']>;
  sp_spent?: InputMaybe<Scalars['smallint']['input']>;
  state_time?: InputMaybe<Scalars['Int']['input']>;
  team_deac_downtime?: InputMaybe<Scalars['Int']['input']>;
  times_missiled?: InputMaybe<Scalars['smallint']['input']>;
  uptime?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Sum_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Var_Pop_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Var_Samp_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "v_game_entity_states" */
export type V_Game_Entity_States_Variance_Order_By = {
  accuracy?: InputMaybe<Order_By>;
  accuracy_during_rapid?: InputMaybe<Order_By>;
  ammo_boost_received?: InputMaybe<Order_By>;
  ammo_boosted_players?: InputMaybe<Order_By>;
  ammo_boosts?: InputMaybe<Order_By>;
  assists?: InputMaybe<Order_By>;
  assists_during_rapid?: InputMaybe<Order_By>;
  award_base?: InputMaybe<Order_By>;
  cancel_opponent_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke?: InputMaybe<Order_By>;
  cancel_team_nuke_by_resupply?: InputMaybe<Order_By>;
  current_hp?: InputMaybe<Order_By>;
  deac_3hit?: InputMaybe<Order_By>;
  deac_3hit_during_rapid?: InputMaybe<Order_By>;
  deac_opponent?: InputMaybe<Order_By>;
  deac_opponent_during_rapid?: InputMaybe<Order_By>;
  deac_team?: InputMaybe<Order_By>;
  deac_team_during_rapid?: InputMaybe<Order_By>;
  destroy_base?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  hit_diff?: InputMaybe<Order_By>;
  hit_diff_during_rapid?: InputMaybe<Order_By>;
  last_deac_time?: InputMaybe<Order_By>;
  life_boost_received?: InputMaybe<Order_By>;
  life_boosted_players?: InputMaybe<Order_By>;
  life_boosts?: InputMaybe<Order_By>;
  lives?: InputMaybe<Order_By>;
  medic_hits?: InputMaybe<Order_By>;
  medic_hits_during_rapid?: InputMaybe<Order_By>;
  miss_base?: InputMaybe<Order_By>;
  missile_base?: InputMaybe<Order_By>;
  missile_opponent?: InputMaybe<Order_By>;
  missile_team?: InputMaybe<Order_By>;
  missiles_left?: InputMaybe<Order_By>;
  mvp?: InputMaybe<Order_By>;
  nuke_downtime?: InputMaybe<Order_By>;
  nuke_medic_hits?: InputMaybe<Order_By>;
  nukes_activated?: InputMaybe<Order_By>;
  nukes_detonated?: InputMaybe<Order_By>;
  opp_deac_downtime?: InputMaybe<Order_By>;
  own_medic_hits?: InputMaybe<Order_By>;
  own_nuke_canceled_by_game_end?: InputMaybe<Order_By>;
  own_nuke_canceled_by_nuke?: InputMaybe<Order_By>;
  own_nuke_canceled_by_opponent?: InputMaybe<Order_By>;
  own_nuke_canceled_by_penalty?: InputMaybe<Order_By>;
  own_nuke_canceled_by_resupply?: InputMaybe<Order_By>;
  own_nuke_canceled_by_team?: InputMaybe<Order_By>;
  penalties?: InputMaybe<Order_By>;
  penalty_downtime?: InputMaybe<Order_By>;
  rapid_fires?: InputMaybe<Order_By>;
  resupply_downtime?: InputMaybe<Order_By>;
  resupply_lives?: InputMaybe<Order_By>;
  resupply_shots?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  self_deac?: InputMaybe<Order_By>;
  self_deac_during_rapid?: InputMaybe<Order_By>;
  self_hit?: InputMaybe<Order_By>;
  self_hit_during_rapid?: InputMaybe<Order_By>;
  self_missile?: InputMaybe<Order_By>;
  self_missile_during_rapid?: InputMaybe<Order_By>;
  self_resupply_lives?: InputMaybe<Order_By>;
  self_resupply_shots?: InputMaybe<Order_By>;
  shot_3hit?: InputMaybe<Order_By>;
  shot_3hit_during_rapid?: InputMaybe<Order_By>;
  shot_base?: InputMaybe<Order_By>;
  shot_opponent?: InputMaybe<Order_By>;
  shot_opponent_during_rapid?: InputMaybe<Order_By>;
  shot_team?: InputMaybe<Order_By>;
  shot_team_during_rapid?: InputMaybe<Order_By>;
  shots?: InputMaybe<Order_By>;
  shots_fired?: InputMaybe<Order_By>;
  shots_fired_during_rapid?: InputMaybe<Order_By>;
  shots_hit?: InputMaybe<Order_By>;
  shots_hit_during_rapid?: InputMaybe<Order_By>;
  sp_earned?: InputMaybe<Order_By>;
  sp_spent?: InputMaybe<Order_By>;
  state_time?: InputMaybe<Order_By>;
  team_deac_downtime?: InputMaybe<Order_By>;
  times_missiled?: InputMaybe<Order_By>;
  uptime?: InputMaybe<Order_By>;
};

/** aggregate stddev on columns */
export type V_Game_Entity_Stddev_Fields = {
  __typename?: 'v_game_entity_stddev_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type V_Game_Entity_Stddev_Pop_Fields = {
  __typename?: 'v_game_entity_stddev_pop_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type V_Game_Entity_Stddev_Samp_Fields = {
  __typename?: 'v_game_entity_stddev_samp_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "v_game_entity" */
export type V_Game_Entity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V_Game_Entity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V_Game_Entity_Stream_Cursor_Value_Input = {
  battlesuit?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['Int']['input']>;
  end_code?: InputMaybe<Scalars['String']['input']>;
  end_time?: InputMaybe<Scalars['Int']['input']>;
  entity_desc?: InputMaybe<Scalars['String']['input']>;
  entity_level?: InputMaybe<Scalars['Int']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  game_team_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ipl_id?: InputMaybe<Scalars['String']['input']>;
  is_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  start_time?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type V_Game_Entity_Sum_Fields = {
  __typename?: 'v_game_entity_sum_fields';
  category?: Maybe<Scalars['Int']['output']>;
  end_time?: Maybe<Scalars['Int']['output']>;
  entity_level?: Maybe<Scalars['Int']['output']>;
  game_team_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  start_time?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type V_Game_Entity_Var_Pop_Fields = {
  __typename?: 'v_game_entity_var_pop_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type V_Game_Entity_Var_Samp_Fields = {
  __typename?: 'v_game_entity_var_samp_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type V_Game_Entity_Variance_Fields = {
  __typename?: 'v_game_entity_variance_fields';
  category?: Maybe<Scalars['Float']['output']>;
  end_time?: Maybe<Scalars['Float']['output']>;
  entity_level?: Maybe<Scalars['Float']['output']>;
  game_team_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  player_id?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  start_time?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "v_game_team" */
export type V_Game_Team = {
  __typename?: 'v_game_team';
  color_desc?: Maybe<Scalars['String']['output']>;
  color_enum?: Maybe<Scalars['Int']['output']>;
  elim_bonus?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  is_eliminated?: Maybe<Scalars['Boolean']['output']>;
  opp_eliminated?: Maybe<Scalars['Boolean']['output']>;
  raw_score?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['bigint']['output']>;
  team_desc?: Maybe<Scalars['String']['output']>;
  team_index?: Maybe<Scalars['Int']['output']>;
  ui_color?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "v_game_team" */
export type V_Game_Team_Aggregate = {
  __typename?: 'v_game_team_aggregate';
  aggregate?: Maybe<V_Game_Team_Aggregate_Fields>;
  nodes: Array<V_Game_Team>;
};

/** aggregate fields of "v_game_team" */
export type V_Game_Team_Aggregate_Fields = {
  __typename?: 'v_game_team_aggregate_fields';
  avg?: Maybe<V_Game_Team_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<V_Game_Team_Max_Fields>;
  min?: Maybe<V_Game_Team_Min_Fields>;
  stddev?: Maybe<V_Game_Team_Stddev_Fields>;
  stddev_pop?: Maybe<V_Game_Team_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<V_Game_Team_Stddev_Samp_Fields>;
  sum?: Maybe<V_Game_Team_Sum_Fields>;
  var_pop?: Maybe<V_Game_Team_Var_Pop_Fields>;
  var_samp?: Maybe<V_Game_Team_Var_Samp_Fields>;
  variance?: Maybe<V_Game_Team_Variance_Fields>;
};


/** aggregate fields of "v_game_team" */
export type V_Game_Team_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<V_Game_Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type V_Game_Team_Avg_Fields = {
  __typename?: 'v_game_team_avg_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  raw_score?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "v_game_team". All fields are combined with a logical 'AND'. */
export type V_Game_Team_Bool_Exp = {
  _and?: InputMaybe<Array<V_Game_Team_Bool_Exp>>;
  _not?: InputMaybe<V_Game_Team_Bool_Exp>;
  _or?: InputMaybe<Array<V_Game_Team_Bool_Exp>>;
  color_desc?: InputMaybe<String_Comparison_Exp>;
  color_enum?: InputMaybe<Int_Comparison_Exp>;
  elim_bonus?: InputMaybe<Int_Comparison_Exp>;
  game_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  opp_eliminated?: InputMaybe<Boolean_Comparison_Exp>;
  raw_score?: InputMaybe<Bigint_Comparison_Exp>;
  score?: InputMaybe<Bigint_Comparison_Exp>;
  team_desc?: InputMaybe<String_Comparison_Exp>;
  team_index?: InputMaybe<Int_Comparison_Exp>;
  ui_color?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type V_Game_Team_Max_Fields = {
  __typename?: 'v_game_team_max_fields';
  color_desc?: Maybe<Scalars['String']['output']>;
  color_enum?: Maybe<Scalars['Int']['output']>;
  elim_bonus?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  raw_score?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['bigint']['output']>;
  team_desc?: Maybe<Scalars['String']['output']>;
  team_index?: Maybe<Scalars['Int']['output']>;
  ui_color?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type V_Game_Team_Min_Fields = {
  __typename?: 'v_game_team_min_fields';
  color_desc?: Maybe<Scalars['String']['output']>;
  color_enum?: Maybe<Scalars['Int']['output']>;
  elim_bonus?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  raw_score?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['bigint']['output']>;
  team_desc?: Maybe<Scalars['String']['output']>;
  team_index?: Maybe<Scalars['Int']['output']>;
  ui_color?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "v_game_team". */
export type V_Game_Team_Order_By = {
  color_desc?: InputMaybe<Order_By>;
  color_enum?: InputMaybe<Order_By>;
  elim_bonus?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_eliminated?: InputMaybe<Order_By>;
  opp_eliminated?: InputMaybe<Order_By>;
  raw_score?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  team_desc?: InputMaybe<Order_By>;
  team_index?: InputMaybe<Order_By>;
  ui_color?: InputMaybe<Order_By>;
};

/** select columns of table "v_game_team" */
export enum V_Game_Team_Select_Column {
  /** column name */
  ColorDesc = 'color_desc',
  /** column name */
  ColorEnum = 'color_enum',
  /** column name */
  ElimBonus = 'elim_bonus',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsEliminated = 'is_eliminated',
  /** column name */
  OppEliminated = 'opp_eliminated',
  /** column name */
  RawScore = 'raw_score',
  /** column name */
  Score = 'score',
  /** column name */
  TeamDesc = 'team_desc',
  /** column name */
  TeamIndex = 'team_index',
  /** column name */
  UiColor = 'ui_color'
}

/** aggregate stddev on columns */
export type V_Game_Team_Stddev_Fields = {
  __typename?: 'v_game_team_stddev_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  raw_score?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type V_Game_Team_Stddev_Pop_Fields = {
  __typename?: 'v_game_team_stddev_pop_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  raw_score?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type V_Game_Team_Stddev_Samp_Fields = {
  __typename?: 'v_game_team_stddev_samp_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  raw_score?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "v_game_team" */
export type V_Game_Team_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V_Game_Team_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V_Game_Team_Stream_Cursor_Value_Input = {
  color_desc?: InputMaybe<Scalars['String']['input']>;
  color_enum?: InputMaybe<Scalars['Int']['input']>;
  elim_bonus?: InputMaybe<Scalars['Int']['input']>;
  game_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  opp_eliminated?: InputMaybe<Scalars['Boolean']['input']>;
  raw_score?: InputMaybe<Scalars['bigint']['input']>;
  score?: InputMaybe<Scalars['bigint']['input']>;
  team_desc?: InputMaybe<Scalars['String']['input']>;
  team_index?: InputMaybe<Scalars['Int']['input']>;
  ui_color?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type V_Game_Team_Sum_Fields = {
  __typename?: 'v_game_team_sum_fields';
  color_enum?: Maybe<Scalars['Int']['output']>;
  elim_bonus?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  raw_score?: Maybe<Scalars['bigint']['output']>;
  score?: Maybe<Scalars['bigint']['output']>;
  team_index?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type V_Game_Team_Var_Pop_Fields = {
  __typename?: 'v_game_team_var_pop_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  raw_score?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type V_Game_Team_Var_Samp_Fields = {
  __typename?: 'v_game_team_var_samp_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  raw_score?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type V_Game_Team_Variance_Fields = {
  __typename?: 'v_game_team_variance_fields';
  color_enum?: Maybe<Scalars['Float']['output']>;
  elim_bonus?: Maybe<Scalars['Float']['output']>;
  game_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  raw_score?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  team_index?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "v_stream_nats_2023" */
export type V_Stream_Nats_2023 = {
  __typename?: 'v_stream_nats_2023';
  avg_accuracy?: Maybe<Scalars['float8']['output']>;
  avg_mvp?: Maybe<Scalars['float8']['output']>;
  avg_score?: Maybe<Scalars['numeric']['output']>;
  losses?: Maybe<Scalars['bigint']['output']>;
  overall_hit_diff?: Maybe<Scalars['float8']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  player_name?: Maybe<Scalars['String']['output']>;
  total_ammo_boosts?: Maybe<Scalars['bigint']['output']>;
  total_life_boosts?: Maybe<Scalars['bigint']['output']>;
  total_medic_hits?: Maybe<Scalars['bigint']['output']>;
  total_missiles?: Maybe<Scalars['bigint']['output']>;
  total_mvp?: Maybe<Scalars['float8']['output']>;
  total_nukes_canceled?: Maybe<Scalars['bigint']['output']>;
  total_nukes_detonated?: Maybe<Scalars['bigint']['output']>;
  total_rapid_fires?: Maybe<Scalars['bigint']['output']>;
  wins?: Maybe<Scalars['bigint']['output']>;
};

/** columns and relationships of "v_stream_nats_2023_all" */
export type V_Stream_Nats_2023_All = {
  __typename?: 'v_stream_nats_2023_all';
  avg_accuracy?: Maybe<Scalars['float8']['output']>;
  avg_mvp?: Maybe<Scalars['float8']['output']>;
  avg_score?: Maybe<Scalars['Int']['output']>;
  losses?: Maybe<Scalars['bigint']['output']>;
  overall_hit_diff?: Maybe<Scalars['float8']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  player_name?: Maybe<Scalars['String']['output']>;
  total_ammo_boosts?: Maybe<Scalars['Int']['output']>;
  total_life_boosts?: Maybe<Scalars['Int']['output']>;
  total_medic_hits?: Maybe<Scalars['Int']['output']>;
  total_missiles?: Maybe<Scalars['Int']['output']>;
  total_mvp?: Maybe<Scalars['float8']['output']>;
  total_nukes_canceled?: Maybe<Scalars['Int']['output']>;
  total_nukes_detonated?: Maybe<Scalars['Int']['output']>;
  total_rapid_fires?: Maybe<Scalars['Int']['output']>;
  wins?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "v_stream_nats_2023_all". All fields are combined with a logical 'AND'. */
export type V_Stream_Nats_2023_All_Bool_Exp = {
  _and?: InputMaybe<Array<V_Stream_Nats_2023_All_Bool_Exp>>;
  _not?: InputMaybe<V_Stream_Nats_2023_All_Bool_Exp>;
  _or?: InputMaybe<Array<V_Stream_Nats_2023_All_Bool_Exp>>;
  avg_accuracy?: InputMaybe<Float8_Comparison_Exp>;
  avg_mvp?: InputMaybe<Float8_Comparison_Exp>;
  avg_score?: InputMaybe<Int_Comparison_Exp>;
  losses?: InputMaybe<Bigint_Comparison_Exp>;
  overall_hit_diff?: InputMaybe<Float8_Comparison_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
  player_name?: InputMaybe<String_Comparison_Exp>;
  total_ammo_boosts?: InputMaybe<Int_Comparison_Exp>;
  total_life_boosts?: InputMaybe<Int_Comparison_Exp>;
  total_medic_hits?: InputMaybe<Int_Comparison_Exp>;
  total_missiles?: InputMaybe<Int_Comparison_Exp>;
  total_mvp?: InputMaybe<Float8_Comparison_Exp>;
  total_nukes_canceled?: InputMaybe<Int_Comparison_Exp>;
  total_nukes_detonated?: InputMaybe<Int_Comparison_Exp>;
  total_rapid_fires?: InputMaybe<Int_Comparison_Exp>;
  wins?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "v_stream_nats_2023_all". */
export type V_Stream_Nats_2023_All_Order_By = {
  avg_accuracy?: InputMaybe<Order_By>;
  avg_mvp?: InputMaybe<Order_By>;
  avg_score?: InputMaybe<Order_By>;
  losses?: InputMaybe<Order_By>;
  overall_hit_diff?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  total_ammo_boosts?: InputMaybe<Order_By>;
  total_life_boosts?: InputMaybe<Order_By>;
  total_medic_hits?: InputMaybe<Order_By>;
  total_missiles?: InputMaybe<Order_By>;
  total_mvp?: InputMaybe<Order_By>;
  total_nukes_canceled?: InputMaybe<Order_By>;
  total_nukes_detonated?: InputMaybe<Order_By>;
  total_rapid_fires?: InputMaybe<Order_By>;
  wins?: InputMaybe<Order_By>;
};

/** select columns of table "v_stream_nats_2023_all" */
export enum V_Stream_Nats_2023_All_Select_Column {
  /** column name */
  AvgAccuracy = 'avg_accuracy',
  /** column name */
  AvgMvp = 'avg_mvp',
  /** column name */
  AvgScore = 'avg_score',
  /** column name */
  Losses = 'losses',
  /** column name */
  OverallHitDiff = 'overall_hit_diff',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  PlayerName = 'player_name',
  /** column name */
  TotalAmmoBoosts = 'total_ammo_boosts',
  /** column name */
  TotalLifeBoosts = 'total_life_boosts',
  /** column name */
  TotalMedicHits = 'total_medic_hits',
  /** column name */
  TotalMissiles = 'total_missiles',
  /** column name */
  TotalMvp = 'total_mvp',
  /** column name */
  TotalNukesCanceled = 'total_nukes_canceled',
  /** column name */
  TotalNukesDetonated = 'total_nukes_detonated',
  /** column name */
  TotalRapidFires = 'total_rapid_fires',
  /** column name */
  Wins = 'wins'
}

/** Streaming cursor of the table "v_stream_nats_2023_all" */
export type V_Stream_Nats_2023_All_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V_Stream_Nats_2023_All_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V_Stream_Nats_2023_All_Stream_Cursor_Value_Input = {
  avg_accuracy?: InputMaybe<Scalars['float8']['input']>;
  avg_mvp?: InputMaybe<Scalars['float8']['input']>;
  avg_score?: InputMaybe<Scalars['Int']['input']>;
  losses?: InputMaybe<Scalars['bigint']['input']>;
  overall_hit_diff?: InputMaybe<Scalars['float8']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
  player_name?: InputMaybe<Scalars['String']['input']>;
  total_ammo_boosts?: InputMaybe<Scalars['Int']['input']>;
  total_life_boosts?: InputMaybe<Scalars['Int']['input']>;
  total_medic_hits?: InputMaybe<Scalars['Int']['input']>;
  total_missiles?: InputMaybe<Scalars['Int']['input']>;
  total_mvp?: InputMaybe<Scalars['float8']['input']>;
  total_nukes_canceled?: InputMaybe<Scalars['Int']['input']>;
  total_nukes_detonated?: InputMaybe<Scalars['Int']['input']>;
  total_rapid_fires?: InputMaybe<Scalars['Int']['input']>;
  wins?: InputMaybe<Scalars['bigint']['input']>;
};

/** Boolean expression to filter rows from the table "v_stream_nats_2023". All fields are combined with a logical 'AND'. */
export type V_Stream_Nats_2023_Bool_Exp = {
  _and?: InputMaybe<Array<V_Stream_Nats_2023_Bool_Exp>>;
  _not?: InputMaybe<V_Stream_Nats_2023_Bool_Exp>;
  _or?: InputMaybe<Array<V_Stream_Nats_2023_Bool_Exp>>;
  avg_accuracy?: InputMaybe<Float8_Comparison_Exp>;
  avg_mvp?: InputMaybe<Float8_Comparison_Exp>;
  avg_score?: InputMaybe<Numeric_Comparison_Exp>;
  losses?: InputMaybe<Bigint_Comparison_Exp>;
  overall_hit_diff?: InputMaybe<Float8_Comparison_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
  player_name?: InputMaybe<String_Comparison_Exp>;
  total_ammo_boosts?: InputMaybe<Bigint_Comparison_Exp>;
  total_life_boosts?: InputMaybe<Bigint_Comparison_Exp>;
  total_medic_hits?: InputMaybe<Bigint_Comparison_Exp>;
  total_missiles?: InputMaybe<Bigint_Comparison_Exp>;
  total_mvp?: InputMaybe<Float8_Comparison_Exp>;
  total_nukes_canceled?: InputMaybe<Bigint_Comparison_Exp>;
  total_nukes_detonated?: InputMaybe<Bigint_Comparison_Exp>;
  total_rapid_fires?: InputMaybe<Bigint_Comparison_Exp>;
  wins?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "v_stream_nats_2023". */
export type V_Stream_Nats_2023_Order_By = {
  avg_accuracy?: InputMaybe<Order_By>;
  avg_mvp?: InputMaybe<Order_By>;
  avg_score?: InputMaybe<Order_By>;
  losses?: InputMaybe<Order_By>;
  overall_hit_diff?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  total_ammo_boosts?: InputMaybe<Order_By>;
  total_life_boosts?: InputMaybe<Order_By>;
  total_medic_hits?: InputMaybe<Order_By>;
  total_missiles?: InputMaybe<Order_By>;
  total_mvp?: InputMaybe<Order_By>;
  total_nukes_canceled?: InputMaybe<Order_By>;
  total_nukes_detonated?: InputMaybe<Order_By>;
  total_rapid_fires?: InputMaybe<Order_By>;
  wins?: InputMaybe<Order_By>;
};

/** select columns of table "v_stream_nats_2023" */
export enum V_Stream_Nats_2023_Select_Column {
  /** column name */
  AvgAccuracy = 'avg_accuracy',
  /** column name */
  AvgMvp = 'avg_mvp',
  /** column name */
  AvgScore = 'avg_score',
  /** column name */
  Losses = 'losses',
  /** column name */
  OverallHitDiff = 'overall_hit_diff',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  PlayerName = 'player_name',
  /** column name */
  TotalAmmoBoosts = 'total_ammo_boosts',
  /** column name */
  TotalLifeBoosts = 'total_life_boosts',
  /** column name */
  TotalMedicHits = 'total_medic_hits',
  /** column name */
  TotalMissiles = 'total_missiles',
  /** column name */
  TotalMvp = 'total_mvp',
  /** column name */
  TotalNukesCanceled = 'total_nukes_canceled',
  /** column name */
  TotalNukesDetonated = 'total_nukes_detonated',
  /** column name */
  TotalRapidFires = 'total_rapid_fires',
  /** column name */
  Wins = 'wins'
}

/** Streaming cursor of the table "v_stream_nats_2023" */
export type V_Stream_Nats_2023_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V_Stream_Nats_2023_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V_Stream_Nats_2023_Stream_Cursor_Value_Input = {
  avg_accuracy?: InputMaybe<Scalars['float8']['input']>;
  avg_mvp?: InputMaybe<Scalars['float8']['input']>;
  avg_score?: InputMaybe<Scalars['numeric']['input']>;
  losses?: InputMaybe<Scalars['bigint']['input']>;
  overall_hit_diff?: InputMaybe<Scalars['float8']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
  player_name?: InputMaybe<Scalars['String']['input']>;
  total_ammo_boosts?: InputMaybe<Scalars['bigint']['input']>;
  total_life_boosts?: InputMaybe<Scalars['bigint']['input']>;
  total_medic_hits?: InputMaybe<Scalars['bigint']['input']>;
  total_missiles?: InputMaybe<Scalars['bigint']['input']>;
  total_mvp?: InputMaybe<Scalars['float8']['input']>;
  total_nukes_canceled?: InputMaybe<Scalars['bigint']['input']>;
  total_nukes_detonated?: InputMaybe<Scalars['bigint']['input']>;
  total_rapid_fires?: InputMaybe<Scalars['bigint']['input']>;
  wins?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "v_stream_nats_2024" */
export type V_Stream_Nats_2024 = {
  __typename?: 'v_stream_nats_2024';
  avg_accuracy?: Maybe<Scalars['float8']['output']>;
  avg_mvp?: Maybe<Scalars['float8']['output']>;
  avg_score?: Maybe<Scalars['numeric']['output']>;
  ipl_id?: Maybe<Scalars['String']['output']>;
  losses?: Maybe<Scalars['bigint']['output']>;
  overall_hit_diff?: Maybe<Scalars['float8']['output']>;
  player_id?: Maybe<Scalars['bigint']['output']>;
  player_name?: Maybe<Scalars['String']['output']>;
  total_ammo_boosts?: Maybe<Scalars['bigint']['output']>;
  total_life_boosts?: Maybe<Scalars['bigint']['output']>;
  total_medic_hits?: Maybe<Scalars['bigint']['output']>;
  total_missiles?: Maybe<Scalars['bigint']['output']>;
  total_mvp?: Maybe<Scalars['float8']['output']>;
  total_nukes_canceled?: Maybe<Scalars['bigint']['output']>;
  total_nukes_detonated?: Maybe<Scalars['bigint']['output']>;
  total_rapid_fires?: Maybe<Scalars['bigint']['output']>;
  wins?: Maybe<Scalars['bigint']['output']>;
};

/** Boolean expression to filter rows from the table "v_stream_nats_2024". All fields are combined with a logical 'AND'. */
export type V_Stream_Nats_2024_Bool_Exp = {
  _and?: InputMaybe<Array<V_Stream_Nats_2024_Bool_Exp>>;
  _not?: InputMaybe<V_Stream_Nats_2024_Bool_Exp>;
  _or?: InputMaybe<Array<V_Stream_Nats_2024_Bool_Exp>>;
  avg_accuracy?: InputMaybe<Float8_Comparison_Exp>;
  avg_mvp?: InputMaybe<Float8_Comparison_Exp>;
  avg_score?: InputMaybe<Numeric_Comparison_Exp>;
  ipl_id?: InputMaybe<String_Comparison_Exp>;
  losses?: InputMaybe<Bigint_Comparison_Exp>;
  overall_hit_diff?: InputMaybe<Float8_Comparison_Exp>;
  player_id?: InputMaybe<Bigint_Comparison_Exp>;
  player_name?: InputMaybe<String_Comparison_Exp>;
  total_ammo_boosts?: InputMaybe<Bigint_Comparison_Exp>;
  total_life_boosts?: InputMaybe<Bigint_Comparison_Exp>;
  total_medic_hits?: InputMaybe<Bigint_Comparison_Exp>;
  total_missiles?: InputMaybe<Bigint_Comparison_Exp>;
  total_mvp?: InputMaybe<Float8_Comparison_Exp>;
  total_nukes_canceled?: InputMaybe<Bigint_Comparison_Exp>;
  total_nukes_detonated?: InputMaybe<Bigint_Comparison_Exp>;
  total_rapid_fires?: InputMaybe<Bigint_Comparison_Exp>;
  wins?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "v_stream_nats_2024". */
export type V_Stream_Nats_2024_Order_By = {
  avg_accuracy?: InputMaybe<Order_By>;
  avg_mvp?: InputMaybe<Order_By>;
  avg_score?: InputMaybe<Order_By>;
  ipl_id?: InputMaybe<Order_By>;
  losses?: InputMaybe<Order_By>;
  overall_hit_diff?: InputMaybe<Order_By>;
  player_id?: InputMaybe<Order_By>;
  player_name?: InputMaybe<Order_By>;
  total_ammo_boosts?: InputMaybe<Order_By>;
  total_life_boosts?: InputMaybe<Order_By>;
  total_medic_hits?: InputMaybe<Order_By>;
  total_missiles?: InputMaybe<Order_By>;
  total_mvp?: InputMaybe<Order_By>;
  total_nukes_canceled?: InputMaybe<Order_By>;
  total_nukes_detonated?: InputMaybe<Order_By>;
  total_rapid_fires?: InputMaybe<Order_By>;
  wins?: InputMaybe<Order_By>;
};

/** select columns of table "v_stream_nats_2024" */
export enum V_Stream_Nats_2024_Select_Column {
  /** column name */
  AvgAccuracy = 'avg_accuracy',
  /** column name */
  AvgMvp = 'avg_mvp',
  /** column name */
  AvgScore = 'avg_score',
  /** column name */
  IplId = 'ipl_id',
  /** column name */
  Losses = 'losses',
  /** column name */
  OverallHitDiff = 'overall_hit_diff',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  PlayerName = 'player_name',
  /** column name */
  TotalAmmoBoosts = 'total_ammo_boosts',
  /** column name */
  TotalLifeBoosts = 'total_life_boosts',
  /** column name */
  TotalMedicHits = 'total_medic_hits',
  /** column name */
  TotalMissiles = 'total_missiles',
  /** column name */
  TotalMvp = 'total_mvp',
  /** column name */
  TotalNukesCanceled = 'total_nukes_canceled',
  /** column name */
  TotalNukesDetonated = 'total_nukes_detonated',
  /** column name */
  TotalRapidFires = 'total_rapid_fires',
  /** column name */
  Wins = 'wins'
}

/** Streaming cursor of the table "v_stream_nats_2024" */
export type V_Stream_Nats_2024_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: V_Stream_Nats_2024_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type V_Stream_Nats_2024_Stream_Cursor_Value_Input = {
  avg_accuracy?: InputMaybe<Scalars['float8']['input']>;
  avg_mvp?: InputMaybe<Scalars['float8']['input']>;
  avg_score?: InputMaybe<Scalars['numeric']['input']>;
  ipl_id?: InputMaybe<Scalars['String']['input']>;
  losses?: InputMaybe<Scalars['bigint']['input']>;
  overall_hit_diff?: InputMaybe<Scalars['float8']['input']>;
  player_id?: InputMaybe<Scalars['bigint']['input']>;
  player_name?: InputMaybe<Scalars['String']['input']>;
  total_ammo_boosts?: InputMaybe<Scalars['bigint']['input']>;
  total_life_boosts?: InputMaybe<Scalars['bigint']['input']>;
  total_medic_hits?: InputMaybe<Scalars['bigint']['input']>;
  total_missiles?: InputMaybe<Scalars['bigint']['input']>;
  total_mvp?: InputMaybe<Scalars['float8']['input']>;
  total_nukes_canceled?: InputMaybe<Scalars['bigint']['input']>;
  total_nukes_detonated?: InputMaybe<Scalars['bigint']['input']>;
  total_rapid_fires?: InputMaybe<Scalars['bigint']['input']>;
  wins?: InputMaybe<Scalars['bigint']['input']>;
};

export type EventDataQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;


export type EventDataQuery = { __typename?: 'query_root', event?: { __typename?: 'events', id: any, name: string, type: string, is_comp: boolean, center: { __typename?: 'centers', id: any, name: string, short_name: string }, games_aggregate: { __typename?: 'games_aggregate', aggregate?: { __typename?: 'games_aggregate_fields', max?: { __typename?: 'games_max_fields', game_datetime?: any | null } | null } | null }, games: Array<{ __typename?: 'games', id: any, winner?: string | null, tdf_id?: string | null, mission_start: any, mission_length?: number | null, name: string, scorecards: Array<{ __typename?: 'scorecards', id: any, team: string, position: string, survived?: number | null, shots_hit: number, shots_fired: number, times_zapped: number, times_missiled: number, missile_hits: number, nukes_activated: number, nukes_detonated: number, nukes_canceled: number, medic_hits: number, own_medic_hits: number, medic_nukes: number, scout_rapid: number, life_boost: number, ammo_boost: number, lives_left: number, score: number, max_score?: number | null, shots_left: number, penalty_count: number, shot_3hit: number, elim_other_team: any, team_elim: any, own_nuke_cancels: number, shot_opponent: number, shot_team: number, missiled_opponent: number, missiled_team: number, resupplies: number, rank: number, bases_destroyed: number, accuracy?: any | null, hit_diff?: any | null, mvp_details?: any | null, sp_earned: number, sp_spent: number, type: string, is_sub: boolean, uptime?: number | null, resupply_downtime?: number | null, other_downtime?: number | null, shots_fired_during_rapid?: number | null, shots_hit_during_rapid?: number | null, shot_opponent_during_rapid?: number | null, shot_team_during_rapid?: number | null, times_team_missiled: number, mvp?: any | null, player?: { __typename?: 'players', id: any, player_name: string, ipl_id?: string | null } | null, game?: { __typename?: 'games', id: any, winner?: string | null, tdf_id?: string | null, mission_start: any, mission_length?: number | null, name: string } | null }> }> } | null };

export type CenterMetaDataQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;


export type CenterMetaDataQuery = { __typename?: 'query_root', center?: { __typename?: 'centers', id: any, name: string, short_name: string, games_aggregate: { __typename?: 'games_aggregate', aggregate?: { __typename?: 'games_aggregate_fields', max?: { __typename?: 'games_max_fields', game_datetime?: any | null } | null } | null } } | null };

export type AllCenterMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCenterMetaDataQuery = { __typename?: 'query_root', centers: Array<{ __typename?: 'centers', id: any, name: string, short_name: string, games_aggregate: { __typename?: 'games_aggregate', aggregate?: { __typename?: 'games_aggregate_fields', max?: { __typename?: 'games_max_fields', game_datetime?: any | null } | null } | null } }> };

export type EventMetaDataQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;


export type EventMetaDataQuery = { __typename?: 'query_root', event?: { __typename?: 'events', id: any, name: string, type: string, is_comp: boolean, center: { __typename?: 'centers', id: any, name: string, short_name: string }, games_aggregate: { __typename?: 'games_aggregate', aggregate?: { __typename?: 'games_aggregate_fields', max?: { __typename?: 'games_max_fields', game_datetime?: any | null } | null } | null } } | null };

export type GetRecentEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentEventsQuery = { __typename?: 'query_root', events: Array<{ __typename?: 'events', id: any, name: string, type: string, is_comp: boolean, center: { __typename?: 'centers', id: any, name: string, short_name: string }, games_aggregate: { __typename?: 'games_aggregate', aggregate?: { __typename?: 'games_aggregate_fields', max?: { __typename?: 'games_max_fields', game_datetime?: any | null } | null } | null } }> };

export type RecentGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentGamesQuery = { __typename?: 'query_root', game: Array<{ __typename?: 'game', id: any, tdf_id: string, mission_start?: any | null, mission_length?: number | null, chomper_version?: string | null, center: { __typename?: 'center', name?: string | null } }> };

export type GameMetaDataQueryVariables = Exact<{
  tdfId: Scalars['String']['input'];
}>;


export type GameMetaDataQuery = { __typename?: 'query_root', game: Array<{ __typename?: 'game', id: any, tdf_id: string, mission_start?: any | null, mission_length?: number | null, chomper_version?: string | null, center: { __typename?: 'center', name?: string | null } }> };

export type GameDataQueryVariables = Exact<{
  tdfId: Scalars['String']['input'];
}>;


export type GameDataQuery = { __typename?: 'query_root', game: Array<{ __typename?: 'game', id: any, tdf_id: string, mission_start?: any | null, mission_length?: number | null, chomper_version?: string | null, center: { __typename?: 'center', name?: string | null }, game_teams: Array<{ __typename?: 'game_team', color_desc: string, color_enum: number, ui_color?: string | null, team_desc?: string | null, team_index: number, score?: number | null, game_entities: Array<{ __typename?: 'game_entity', battlesuit?: string | null, category?: number | null, end_code?: string | null, end_time: number, entity_level?: number | null, entity_type: string, entity_desc: string, id: any, ipl_id: string, player_id?: any | null, position?: string | null, start_time?: number | null, score?: number | null, player?: { __typename?: 'player', current_alias?: string | null, ipl_id?: string | null } | null, game_entity_state_final?: { __typename?: 'v_game_entity_state_final', accuracy?: any | null, accuracy_during_rapid?: any | null, ammo_boost_received?: any | null, ammo_boosts?: any | null, ammo_boosted_players?: any | null, assists?: any | null, assists_during_rapid?: any | null, cancel_opponent_nuke?: any | null, cancel_team_nuke?: any | null, current_hp?: any | null, cancel_team_nuke_by_resupply?: any | null, deac_3hit?: any | null, deac_3hit_during_rapid?: any | null, deac_opponent_during_rapid?: any | null, deac_opponent?: any | null, deac_team?: any | null, destroy_base?: any | null, deac_team_during_rapid?: any | null, entity_id?: any | null, hit_diff?: any | null, hit_diff_during_rapid?: any | null, id?: any | null, is_active?: boolean | null, is_eliminated?: boolean | null, is_final?: boolean | null, is_nuking?: boolean | null, is_rapid?: boolean | null, last_deac_time?: number | null, last_deac_type?: any | null, life_boost_received?: any | null, life_boosted_players?: any | null, life_boosts?: any | null, lives?: any | null, medic_hits?: any | null, medic_hits_during_rapid?: any | null, miss_base?: any | null, missile_base?: any | null, missile_opponent?: any | null, missile_team?: any | null, missiles_left?: any | null, mvp?: any | null, mvp_details?: any | null, nuke_downtime?: number | null, nuke_medic_hits?: any | null, nukes_activated?: any | null, nukes_detonated?: any | null, opp_deac_downtime?: number | null, own_medic_hits?: any | null, own_nuke_canceled_by_game_end?: any | null, own_nuke_canceled_by_nuke?: any | null, own_nuke_canceled_by_opponent?: any | null, own_nuke_canceled_by_penalty?: any | null, own_nuke_canceled_by_resupply?: any | null, own_nuke_canceled_by_team?: any | null, penalties?: any | null, penalty_downtime?: number | null, rapid_fires?: any | null, resupply_downtime?: number | null, resupply_lives?: any | null, resupply_shots?: any | null, score?: number | null, self_deac?: any | null, self_deac_during_rapid?: any | null, self_hit?: any | null, self_hit_during_rapid?: any | null, self_missile?: any | null, self_missile_during_rapid?: any | null, self_resupply_lives?: any | null, self_resupply_shots?: any | null, shot_3hit?: any | null, shot_3hit_during_rapid?: any | null, shot_base?: any | null, shot_opponent?: any | null, shot_opponent_during_rapid?: any | null, shot_team?: any | null, shot_team_during_rapid?: any | null, shots?: any | null, shots_fired?: any | null, shots_fired_during_rapid?: any | null, shots_hit?: any | null, shots_hit_during_rapid?: any | null, sp_earned?: any | null, sp_spent?: any | null, state_time?: number | null, team_deac_downtime?: number | null, times_missiled?: any | null, uptime?: number | null } | null }> }> }> };

export type ReplayQueryVariables = Exact<{
  tdfId: Scalars['String']['input'];
}>;


export type ReplayQuery = { __typename?: 'query_root', game: Array<{ __typename?: 'game', id: any, tdf_id: string, mission_start?: any | null, mission_length?: number | null, chomper_version?: string | null, center: { __typename?: 'center', name?: string | null }, game_actions: Array<{ __typename?: 'game_action', action_text?: string | null, action_time?: number | null, action_type?: string | null, target?: { __typename?: 'game_entity', player_id?: any | null, name: string, team: { __typename?: 'game_team', ui_color?: string | null } } | null, actor?: { __typename?: 'game_entity', player_id?: any | null, name: string, team: { __typename?: 'game_team', ui_color?: string | null } } | null }>, game_teams: Array<{ __typename?: 'game_team', color_desc: string, color_enum: number, ui_color?: string | null, team_desc?: string | null, team_index: number, score?: number | null, game_entities: Array<{ __typename?: 'game_entity', battlesuit?: string | null, category?: number | null, end_code?: string | null, end_time: number, entity_level?: number | null, entity_type: string, entity_desc: string, id: any, ipl_id: string, player_id?: any | null, position?: string | null, start_time?: number | null, score?: number | null, player?: { __typename?: 'player', current_alias?: string | null, ipl_id?: string | null } | null, game_entity_states: Array<{ __typename?: 'v_game_entity_states', accuracy?: any | null, accuracy_during_rapid?: any | null, ammo_boost_received?: any | null, ammo_boosts?: any | null, ammo_boosted_players?: any | null, assists?: any | null, assists_during_rapid?: any | null, cancel_opponent_nuke?: any | null, cancel_team_nuke?: any | null, current_hp?: any | null, cancel_team_nuke_by_resupply?: any | null, deac_3hit?: any | null, deac_3hit_during_rapid?: any | null, deac_opponent_during_rapid?: any | null, deac_opponent?: any | null, deac_team?: any | null, destroy_base?: any | null, deac_team_during_rapid?: any | null, entity_id?: any | null, hit_diff?: any | null, hit_diff_during_rapid?: any | null, id?: any | null, is_active?: boolean | null, is_eliminated?: boolean | null, is_final?: boolean | null, is_nuking?: boolean | null, is_rapid?: boolean | null, last_deac_time?: number | null, last_deac_type?: any | null, life_boost_received?: any | null, life_boosted_players?: any | null, life_boosts?: any | null, lives?: any | null, medic_hits?: any | null, medic_hits_during_rapid?: any | null, miss_base?: any | null, missile_base?: any | null, missile_opponent?: any | null, missile_team?: any | null, missiles_left?: any | null, mvp?: any | null, mvp_details?: any | null, nuke_downtime?: number | null, nuke_medic_hits?: any | null, nukes_activated?: any | null, nukes_detonated?: any | null, opp_deac_downtime?: number | null, own_medic_hits?: any | null, own_nuke_canceled_by_game_end?: any | null, own_nuke_canceled_by_nuke?: any | null, own_nuke_canceled_by_opponent?: any | null, own_nuke_canceled_by_penalty?: any | null, own_nuke_canceled_by_resupply?: any | null, own_nuke_canceled_by_team?: any | null, penalties?: any | null, penalty_downtime?: number | null, rapid_fires?: any | null, resupply_downtime?: number | null, resupply_lives?: any | null, resupply_shots?: any | null, score?: number | null, self_deac?: any | null, self_deac_during_rapid?: any | null, self_hit?: any | null, self_hit_during_rapid?: any | null, self_missile?: any | null, self_missile_during_rapid?: any | null, self_resupply_lives?: any | null, self_resupply_shots?: any | null, shot_3hit?: any | null, shot_3hit_during_rapid?: any | null, shot_base?: any | null, shot_opponent?: any | null, shot_opponent_during_rapid?: any | null, shot_team?: any | null, shot_team_during_rapid?: any | null, shots?: any | null, shots_fired?: any | null, shots_fired_during_rapid?: any | null, shots_hit?: any | null, shots_hit_during_rapid?: any | null, sp_earned?: any | null, sp_spent?: any | null, state_time?: number | null, team_deac_downtime?: number | null, times_missiled?: any | null, uptime?: number | null }> }> }> }> };

export type IfReplayExistsQueryVariables = Exact<{
  tdfId: Scalars['String']['input'];
}>;


export type IfReplayExistsQuery = { __typename?: 'query_root', game: Array<{ __typename?: 'game', id: any }> };

export type SocialSimpleScorecardsQueryVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
  centers?: InputMaybe<Array<Scalars['bigint']['input']> | Scalars['bigint']['input']>;
}>;


export type SocialSimpleScorecardsQuery = { __typename?: 'query_root', scorecards: Array<{ __typename?: 'scorecards', id: any, player_id?: any | null, position: string, score: number, medic_hits: number, accuracy?: any | null, shot_team: number, mvp?: any | null, player?: { __typename?: 'players', id: any, ipl_id?: string | null, player_name: string } | null, game?: { __typename?: 'games', id: any, tdf_id?: string | null, mission_start: any, mission_length?: number | null } | null }> };

export type GetSimpleScorecardByEventIdQueryVariables = Exact<{
  eventId: Scalars['bigint']['input'];
}>;


export type GetSimpleScorecardByEventIdQuery = { __typename?: 'query_root', scorecards: Array<{ __typename?: 'scorecards', player_id?: any | null, position: string, score: number, mvp_points?: any | null, mvp_details?: any | null, hit_diff?: any | null, shot_opponent: number, times_zapped: number, medic_hits: number, accuracy?: any | null, shot_team: number, player?: { __typename?: 'players', player_name: string } | null, game?: { __typename?: 'games', center_id: any, duration?: number | null, game_datetime: any, game_length?: number | null, game_name: string } | null }> };


export const EventDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"event"},"name":{"kind":"Name","value":"events_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_comp"}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"games_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game_datetime"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"tdf_id"},"name":{"kind":"Name","value":"tdf_key"}},{"kind":"Field","alias":{"kind":"Name","value":"mission_start"},"name":{"kind":"Name","value":"game_datetime"}},{"kind":"Field","alias":{"kind":"Name","value":"mission_length"},"name":{"kind":"Name","value":"duration"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"game_name"}},{"kind":"Field","name":{"kind":"Name","value":"winner"}},{"kind":"Field","name":{"kind":"Name","value":"scorecards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"player_name"}},{"kind":"Field","name":{"kind":"Name","value":"ipl_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"tdf_id"},"name":{"kind":"Name","value":"tdf_key"}},{"kind":"Field","alias":{"kind":"Name","value":"mission_start"},"name":{"kind":"Name","value":"game_datetime"}},{"kind":"Field","alias":{"kind":"Name","value":"mission_length"},"name":{"kind":"Name","value":"duration"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"game_name"}},{"kind":"Field","name":{"kind":"Name","value":"winner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"survived"}},{"kind":"Field","name":{"kind":"Name","value":"shots_hit"}},{"kind":"Field","name":{"kind":"Name","value":"shots_fired"}},{"kind":"Field","name":{"kind":"Name","value":"times_zapped"}},{"kind":"Field","name":{"kind":"Name","value":"times_missiled"}},{"kind":"Field","name":{"kind":"Name","value":"missile_hits"}},{"kind":"Field","name":{"kind":"Name","value":"nukes_activated"}},{"kind":"Field","name":{"kind":"Name","value":"nukes_detonated"}},{"kind":"Field","name":{"kind":"Name","value":"nukes_canceled"}},{"kind":"Field","name":{"kind":"Name","value":"medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"own_medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"medic_nukes"}},{"kind":"Field","name":{"kind":"Name","value":"scout_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"life_boost"}},{"kind":"Field","name":{"kind":"Name","value":"ammo_boost"}},{"kind":"Field","name":{"kind":"Name","value":"lives_left"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"max_score"}},{"kind":"Field","name":{"kind":"Name","value":"shots_left"}},{"kind":"Field","name":{"kind":"Name","value":"penalty_count"}},{"kind":"Field","name":{"kind":"Name","value":"shot_3hit"}},{"kind":"Field","name":{"kind":"Name","value":"elim_other_team"}},{"kind":"Field","name":{"kind":"Name","value":"team_elim"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_cancels"}},{"kind":"Field","name":{"kind":"Name","value":"shot_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team"}},{"kind":"Field","name":{"kind":"Name","value":"missiled_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"missiled_team"}},{"kind":"Field","name":{"kind":"Name","value":"resupplies"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"bases_destroyed"}},{"kind":"Field","name":{"kind":"Name","value":"accuracy"}},{"kind":"Field","name":{"kind":"Name","value":"hit_diff"}},{"kind":"Field","alias":{"kind":"Name","value":"mvp"},"name":{"kind":"Name","value":"mvp_points"}},{"kind":"Field","name":{"kind":"Name","value":"mvp_details"}},{"kind":"Field","name":{"kind":"Name","value":"sp_earned"}},{"kind":"Field","name":{"kind":"Name","value":"sp_spent"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_sub"}},{"kind":"Field","name":{"kind":"Name","value":"uptime"}},{"kind":"Field","name":{"kind":"Name","value":"resupply_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"other_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"shots_fired_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shots_hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shot_opponent_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"times_team_missiled"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventDataQuery, EventDataQueryVariables>;
export const CenterMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CenterMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"center"},"name":{"kind":"Name","value":"centers_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}},{"kind":"Field","name":{"kind":"Name","value":"games_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"social","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game_datetime"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CenterMetaDataQuery, CenterMetaDataQueryVariables>;
export const AllCenterMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCenterMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"centers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"games_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"max"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"game_datetime"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}},{"kind":"Field","name":{"kind":"Name","value":"games_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"social","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game_datetime"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllCenterMetaDataQuery, AllCenterMetaDataQueryVariables>;
export const EventMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"event"},"name":{"kind":"Name","value":"events_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_comp"}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"games_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game_datetime"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventMetaDataQuery, EventMetaDataQueryVariables>;
export const GetRecentEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRecentEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"games_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"max"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"game_datetime"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"is_comp"}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"games_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game_datetime"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecentEventsQuery, GetRecentEventsQueryVariables>;
export const RecentGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecentGames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mission_start"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tdf_id"}},{"kind":"Field","name":{"kind":"Name","value":"mission_start"}},{"kind":"Field","name":{"kind":"Name","value":"mission_length"}},{"kind":"Field","name":{"kind":"Name","value":"chomper_version"}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RecentGamesQuery, RecentGamesQueryVariables>;
export const GameMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GameMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tdf_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tdf_id"}},{"kind":"Field","name":{"kind":"Name","value":"mission_start"}},{"kind":"Field","name":{"kind":"Name","value":"mission_length"}},{"kind":"Field","name":{"kind":"Name","value":"chomper_version"}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GameMetaDataQuery, GameMetaDataQueryVariables>;
export const GameDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GameData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tdf_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tdf_id"}},{"kind":"Field","name":{"kind":"Name","value":"mission_start"}},{"kind":"Field","name":{"kind":"Name","value":"mission_length"}},{"kind":"Field","name":{"kind":"Name","value":"chomper_version"}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"game_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color_desc"}},{"kind":"Field","name":{"kind":"Name","value":"color_enum"}},{"kind":"Field","name":{"kind":"Name","value":"ui_color"}},{"kind":"Field","name":{"kind":"Name","value":"team_desc"}},{"kind":"Field","name":{"kind":"Name","value":"team_index"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"game_entities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"battlesuit"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"end_code"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}},{"kind":"Field","name":{"kind":"Name","value":"entity_level"}},{"kind":"Field","name":{"kind":"Name","value":"entity_type"}},{"kind":"Field","name":{"kind":"Name","value":"entity_desc"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ipl_id"}},{"kind":"Field","name":{"kind":"Name","value":"player_id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current_alias"}},{"kind":"Field","name":{"kind":"Name","value":"ipl_id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"game_entity_state_final"},"name":{"kind":"Name","value":"v_game_entity_state_final"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accuracy"}},{"kind":"Field","name":{"kind":"Name","value":"accuracy_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"ammo_boost_received"}},{"kind":"Field","name":{"kind":"Name","value":"ammo_boosts"}},{"kind":"Field","name":{"kind":"Name","value":"ammo_boosted_players"}},{"kind":"Field","name":{"kind":"Name","value":"assists"}},{"kind":"Field","name":{"kind":"Name","value":"assists_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"cancel_opponent_nuke"}},{"kind":"Field","name":{"kind":"Name","value":"cancel_team_nuke"}},{"kind":"Field","name":{"kind":"Name","value":"current_hp"}},{"kind":"Field","name":{"kind":"Name","value":"cancel_team_nuke_by_resupply"}},{"kind":"Field","name":{"kind":"Name","value":"deac_3hit"}},{"kind":"Field","name":{"kind":"Name","value":"deac_3hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"deac_opponent_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"deac_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"deac_team"}},{"kind":"Field","name":{"kind":"Name","value":"destroy_base"}},{"kind":"Field","name":{"kind":"Name","value":"deac_team_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"entity_id"}},{"kind":"Field","name":{"kind":"Name","value":"hit_diff"}},{"kind":"Field","name":{"kind":"Name","value":"hit_diff_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"is_eliminated"}},{"kind":"Field","name":{"kind":"Name","value":"is_final"}},{"kind":"Field","name":{"kind":"Name","value":"is_nuking"}},{"kind":"Field","name":{"kind":"Name","value":"is_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"last_deac_time"}},{"kind":"Field","name":{"kind":"Name","value":"last_deac_type"}},{"kind":"Field","name":{"kind":"Name","value":"life_boost_received"}},{"kind":"Field","name":{"kind":"Name","value":"life_boosted_players"}},{"kind":"Field","name":{"kind":"Name","value":"life_boosts"}},{"kind":"Field","name":{"kind":"Name","value":"lives"}},{"kind":"Field","name":{"kind":"Name","value":"medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"medic_hits_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"miss_base"}},{"kind":"Field","name":{"kind":"Name","value":"missile_base"}},{"kind":"Field","name":{"kind":"Name","value":"missile_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"missile_team"}},{"kind":"Field","name":{"kind":"Name","value":"missiles_left"}},{"kind":"Field","name":{"kind":"Name","value":"mvp"}},{"kind":"Field","name":{"kind":"Name","value":"mvp_details"}},{"kind":"Field","name":{"kind":"Name","value":"nuke_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"nuke_medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"nukes_activated"}},{"kind":"Field","name":{"kind":"Name","value":"nukes_detonated"}},{"kind":"Field","name":{"kind":"Name","value":"opp_deac_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"own_medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_game_end"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_nuke"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_penalty"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_resupply"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_team"}},{"kind":"Field","name":{"kind":"Name","value":"penalties"}},{"kind":"Field","name":{"kind":"Name","value":"penalty_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"rapid_fires"}},{"kind":"Field","name":{"kind":"Name","value":"resupply_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"resupply_lives"}},{"kind":"Field","name":{"kind":"Name","value":"resupply_shots"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"self_deac"}},{"kind":"Field","name":{"kind":"Name","value":"self_deac_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"self_hit"}},{"kind":"Field","name":{"kind":"Name","value":"self_hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"self_missile"}},{"kind":"Field","name":{"kind":"Name","value":"self_missile_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"self_resupply_lives"}},{"kind":"Field","name":{"kind":"Name","value":"self_resupply_shots"}},{"kind":"Field","name":{"kind":"Name","value":"shot_3hit"}},{"kind":"Field","name":{"kind":"Name","value":"shot_3hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shot_base"}},{"kind":"Field","name":{"kind":"Name","value":"shot_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"shot_opponent_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shots"}},{"kind":"Field","name":{"kind":"Name","value":"shots_fired"}},{"kind":"Field","name":{"kind":"Name","value":"shots_fired_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shots_hit"}},{"kind":"Field","name":{"kind":"Name","value":"shots_hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"sp_earned"}},{"kind":"Field","name":{"kind":"Name","value":"sp_spent"}},{"kind":"Field","name":{"kind":"Name","value":"state_time"}},{"kind":"Field","name":{"kind":"Name","value":"team_deac_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"times_missiled"}},{"kind":"Field","name":{"kind":"Name","value":"uptime"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GameDataQuery, GameDataQueryVariables>;
export const ReplayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Replay"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tdf_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tdf_id"}},{"kind":"Field","name":{"kind":"Name","value":"mission_start"}},{"kind":"Field","name":{"kind":"Name","value":"mission_length"}},{"kind":"Field","name":{"kind":"Name","value":"chomper_version"}},{"kind":"Field","name":{"kind":"Name","value":"center"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"game_actions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"action_time"},"value":{"kind":"EnumValue","value":"asc_nulls_first"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action_text"}},{"kind":"Field","name":{"kind":"Name","value":"action_time"}},{"kind":"Field","name":{"kind":"Name","value":"action_type"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"gameEntityByTargetGameEntityId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"entity_desc"}},{"kind":"Field","name":{"kind":"Name","value":"player_id"}},{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"game_team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ui_color"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"actor"},"name":{"kind":"Name","value":"game_entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"entity_desc"}},{"kind":"Field","name":{"kind":"Name","value":"player_id"}},{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"game_team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ui_color"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"game_teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color_desc"}},{"kind":"Field","name":{"kind":"Name","value":"color_enum"}},{"kind":"Field","name":{"kind":"Name","value":"ui_color"}},{"kind":"Field","name":{"kind":"Name","value":"team_desc"}},{"kind":"Field","name":{"kind":"Name","value":"team_index"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"game_entities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"battlesuit"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"end_code"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}},{"kind":"Field","name":{"kind":"Name","value":"entity_level"}},{"kind":"Field","name":{"kind":"Name","value":"entity_type"}},{"kind":"Field","name":{"kind":"Name","value":"entity_desc"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ipl_id"}},{"kind":"Field","name":{"kind":"Name","value":"player_id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current_alias"}},{"kind":"Field","name":{"kind":"Name","value":"ipl_id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"game_entity_states"},"name":{"kind":"Name","value":"v_game_entity_states"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"state_time"},"value":{"kind":"EnumValue","value":"asc_nulls_first"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accuracy"}},{"kind":"Field","name":{"kind":"Name","value":"accuracy_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"ammo_boost_received"}},{"kind":"Field","name":{"kind":"Name","value":"ammo_boosts"}},{"kind":"Field","name":{"kind":"Name","value":"ammo_boosted_players"}},{"kind":"Field","name":{"kind":"Name","value":"assists"}},{"kind":"Field","name":{"kind":"Name","value":"assists_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"cancel_opponent_nuke"}},{"kind":"Field","name":{"kind":"Name","value":"cancel_team_nuke"}},{"kind":"Field","name":{"kind":"Name","value":"current_hp"}},{"kind":"Field","name":{"kind":"Name","value":"cancel_team_nuke_by_resupply"}},{"kind":"Field","name":{"kind":"Name","value":"deac_3hit"}},{"kind":"Field","name":{"kind":"Name","value":"deac_3hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"deac_opponent_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"deac_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"deac_team"}},{"kind":"Field","name":{"kind":"Name","value":"destroy_base"}},{"kind":"Field","name":{"kind":"Name","value":"deac_team_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"entity_id"}},{"kind":"Field","name":{"kind":"Name","value":"hit_diff"}},{"kind":"Field","name":{"kind":"Name","value":"hit_diff_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"is_eliminated"}},{"kind":"Field","name":{"kind":"Name","value":"is_final"}},{"kind":"Field","name":{"kind":"Name","value":"is_nuking"}},{"kind":"Field","name":{"kind":"Name","value":"is_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"last_deac_time"}},{"kind":"Field","name":{"kind":"Name","value":"last_deac_type"}},{"kind":"Field","name":{"kind":"Name","value":"life_boost_received"}},{"kind":"Field","name":{"kind":"Name","value":"life_boosted_players"}},{"kind":"Field","name":{"kind":"Name","value":"life_boosts"}},{"kind":"Field","name":{"kind":"Name","value":"lives"}},{"kind":"Field","name":{"kind":"Name","value":"medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"medic_hits_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"miss_base"}},{"kind":"Field","name":{"kind":"Name","value":"missile_base"}},{"kind":"Field","name":{"kind":"Name","value":"missile_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"missile_team"}},{"kind":"Field","name":{"kind":"Name","value":"missiles_left"}},{"kind":"Field","name":{"kind":"Name","value":"mvp"}},{"kind":"Field","name":{"kind":"Name","value":"mvp_details"}},{"kind":"Field","name":{"kind":"Name","value":"nuke_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"nuke_medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"nukes_activated"}},{"kind":"Field","name":{"kind":"Name","value":"nukes_detonated"}},{"kind":"Field","name":{"kind":"Name","value":"opp_deac_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"own_medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_game_end"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_nuke"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_penalty"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_resupply"}},{"kind":"Field","name":{"kind":"Name","value":"own_nuke_canceled_by_team"}},{"kind":"Field","name":{"kind":"Name","value":"penalties"}},{"kind":"Field","name":{"kind":"Name","value":"penalty_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"rapid_fires"}},{"kind":"Field","name":{"kind":"Name","value":"resupply_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"resupply_lives"}},{"kind":"Field","name":{"kind":"Name","value":"resupply_shots"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"self_deac"}},{"kind":"Field","name":{"kind":"Name","value":"self_deac_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"self_hit"}},{"kind":"Field","name":{"kind":"Name","value":"self_hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"self_missile"}},{"kind":"Field","name":{"kind":"Name","value":"self_missile_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"self_resupply_lives"}},{"kind":"Field","name":{"kind":"Name","value":"self_resupply_shots"}},{"kind":"Field","name":{"kind":"Name","value":"shot_3hit"}},{"kind":"Field","name":{"kind":"Name","value":"shot_3hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shot_base"}},{"kind":"Field","name":{"kind":"Name","value":"shot_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"shot_opponent_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shots"}},{"kind":"Field","name":{"kind":"Name","value":"shots_fired"}},{"kind":"Field","name":{"kind":"Name","value":"shots_fired_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"shots_hit"}},{"kind":"Field","name":{"kind":"Name","value":"shots_hit_during_rapid"}},{"kind":"Field","name":{"kind":"Name","value":"sp_earned"}},{"kind":"Field","name":{"kind":"Name","value":"sp_spent"}},{"kind":"Field","name":{"kind":"Name","value":"state_time"}},{"kind":"Field","name":{"kind":"Name","value":"team_deac_downtime"}},{"kind":"Field","name":{"kind":"Name","value":"times_missiled"}},{"kind":"Field","name":{"kind":"Name","value":"uptime"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ReplayQuery, ReplayQueryVariables>;
export const IfReplayExistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IfReplayExists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tdf_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tdfId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<IfReplayExistsQuery, IfReplayExistsQueryVariables>;
export const SocialSimpleScorecardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SocialSimpleScorecards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"centers"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scorecards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"social","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"game_datetime"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"center_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"centers"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"player_id"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ipl_id"}},{"kind":"Field","name":{"kind":"Name","value":"player_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"tdf_id"},"name":{"kind":"Name","value":"tdf_key"}},{"kind":"Field","alias":{"kind":"Name","value":"mission_start"},"name":{"kind":"Name","value":"game_datetime"}},{"kind":"Field","alias":{"kind":"Name","value":"mission_length"},"name":{"kind":"Name","value":"game_length"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","alias":{"kind":"Name","value":"mvp"},"name":{"kind":"Name","value":"mvp_points"}},{"kind":"Field","name":{"kind":"Name","value":"medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"accuracy"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team"}}]}}]}}]} as unknown as DocumentNode<SocialSimpleScorecardsQuery, SocialSimpleScorecardsQueryVariables>;
export const GetSimpleScorecardByEventIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSimpleScorecardByEventId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scorecards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player_id"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"center_id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"game_datetime"}},{"kind":"Field","name":{"kind":"Name","value":"game_length"}},{"kind":"Field","name":{"kind":"Name","value":"game_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"mvp_points"}},{"kind":"Field","name":{"kind":"Name","value":"mvp_details"}},{"kind":"Field","name":{"kind":"Name","value":"hit_diff"}},{"kind":"Field","name":{"kind":"Name","value":"shot_opponent"}},{"kind":"Field","name":{"kind":"Name","value":"times_zapped"}},{"kind":"Field","name":{"kind":"Name","value":"medic_hits"}},{"kind":"Field","name":{"kind":"Name","value":"accuracy"}},{"kind":"Field","name":{"kind":"Name","value":"shot_team"}}]}}]}}]} as unknown as DocumentNode<GetSimpleScorecardByEventIdQuery, GetSimpleScorecardByEventIdQueryVariables>;