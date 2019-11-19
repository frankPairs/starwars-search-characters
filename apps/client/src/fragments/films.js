import gql from 'graphql-tag';

export const FILM_FILTER_FIELD_FRAGMENT = gql`
  fragment FILM_FILTER_FIELD_FRAGMENT on Film {
    id
    title
    characters {
      id
    }
    species {
      id
    }
  }
`;
