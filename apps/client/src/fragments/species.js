import gql from 'graphql-tag';

export const SPECIES_FILTER_FIELD_FRAGMENT = gql`
  fragment SPECIES_FILTER_FIELD_FRAGMENT on Species {
    id
    name
    films {
      id
    }
    people {
      id
    }
  }
`;
