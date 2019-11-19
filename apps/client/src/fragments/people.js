import gql from 'graphql-tag';

export const PERSON_LIST_INFO_FRAGMENT = gql`
  fragment PERSON_LIST_INFO_FRAGMENT on Person {
    id
    name
    image
    films {
      id
      title
    }
    species {
      id
      name
    }
  }
`;
