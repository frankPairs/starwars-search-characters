import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { pathOr, compose, curry } from 'ramda';

import {
  PERSON_LIST_INFO_FRAGMENT,
  FILM_FILTER_FIELD_FRAGMENT,
  SPECIES_FILTER_FIELD_FRAGMENT,
} from '../../fragments';

const GET_PEOPLE_LIST_QUERY = gql`
  query GetPeopleList {
    people: allPeople {
      ...PERSON_LIST_INFO_FRAGMENT
    }

    films: allFilms {
      ...FILM_FILTER_FIELD_FRAGMENT
    }

    species: allSpecies {
      ...SPECIES_FILTER_FIELD_FRAGMENT
    }
  }
  ${PERSON_LIST_INFO_FRAGMENT}
  ${FILM_FILTER_FIELD_FRAGMENT}
  ${SPECIES_FILTER_FIELD_FRAGMENT}
`;

function usePeopleListQuery(filters) {
  const { data, loading, error } = useQuery(GET_PEOPLE_LIST_QUERY);

  return {
    loading,
    error,
    data: {
      people: pathOr([], ['people'], data),
      films: pathOr([], ['films'], data),
      species: pathOr([], ['species'], data),
    },
  };
}

export { usePeopleListQuery };
