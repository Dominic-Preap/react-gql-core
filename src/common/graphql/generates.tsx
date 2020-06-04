// eslint:disable
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-hooks';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface IQuery {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<ICharacter>;
  /** Get the list of all characters */
  characters?: Maybe<ICharacters>;
  /** Get a specific locations by ID */
  location?: Maybe<ILocation>;
  /** Get the list of all locations */
  locations?: Maybe<ILocations>;
  /** Get a specific episode by ID */
  episode?: Maybe<IEpisode>;
  /** Get the list of all episodes */
  episodes?: Maybe<IEpisodes>;
}

export interface IQueryCharacterArgs {
  id?: Maybe<Scalars['ID']>;
}

export interface IQueryCharactersArgs {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<IFilterCharacter>;
}

export interface IQueryLocationArgs {
  id?: Maybe<Scalars['ID']>;
}

export interface IQueryLocationsArgs {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<IFilterLocation>;
}

export interface IQueryEpisodeArgs {
  id?: Maybe<Scalars['ID']>;
}

export interface IQueryEpisodesArgs {
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<IFilterEpisode>;
}

export interface ICharacter {
  __typename?: 'Character';
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<ILocation>;
  /** The character's last known location */
  location?: Maybe<ILocation>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode?: Maybe<Array<Maybe<IEpisode>>>;
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
}

export interface ILocation {
  __typename?: 'Location';
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents?: Maybe<Array<Maybe<ICharacter>>>;
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
}

export interface IEpisode {
  __typename?: 'Episode';
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters?: Maybe<Array<Maybe<ICharacter>>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
}

export interface IFilterCharacter {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
}

export interface ICharacters {
  __typename?: 'Characters';
  info?: Maybe<IInfo>;
  results?: Maybe<Array<Maybe<ICharacter>>>;
}

export interface IInfo {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
}

export interface IFilterLocation {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
}

export interface ILocations {
  __typename?: 'Locations';
  info?: Maybe<IInfo>;
  results?: Maybe<Array<Maybe<ILocation>>>;
}

export interface IFilterEpisode {
  name?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['String']>;
}

export interface IEpisodes {
  __typename?: 'Episodes';
  info?: Maybe<IInfo>;
  results?: Maybe<Array<Maybe<IEpisode>>>;
}

export enum ICacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type IGetCharactersQueryVariables = {};

export type IGetCharactersQuery = { __typename?: 'Query' } & {
  characters?: Maybe<
    { __typename?: 'Characters' } & {
      results?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Character' } & Pick<
              ICharacter,
              'id' | 'name' | 'image'
            >
          >
        >
      >;
    }
  >;
};

export const GetCharactersDocument = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharactersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    IGetCharactersQuery,
    IGetCharactersQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    IGetCharactersQuery,
    IGetCharactersQueryVariables
  >(GetCharactersDocument, baseOptions);
}
export function useGetCharactersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    IGetCharactersQuery,
    IGetCharactersQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    IGetCharactersQuery,
    IGetCharactersQueryVariables
  >(GetCharactersDocument, baseOptions);
}
export type GetCharactersQueryHookResult = ReturnType<
  typeof useGetCharactersQuery
>;
export type GetCharactersLazyQueryHookResult = ReturnType<
  typeof useGetCharactersLazyQuery
>;
