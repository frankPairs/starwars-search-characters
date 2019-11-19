import { compose, curry } from 'ramda';

import {
  filterPeopleByFilm,
  filterPeopleBySpecies,
  filterPeopleById,
} from 'selectors';
import { usePeopleListQuery } from 'queries';

import { useCharacterListFilters } from '../CharacterListFilters/useCharacterListFilters';

function useCharacterList() {
  const {
    data: { people },
    loading,
    error,
  } = usePeopleListQuery();
  const [filters] = useCharacterListFilters();

  return {
    loading,
    error,
    people: compose(
      curry(filterPeopleByFilm)(filters.film),
      curry(filterPeopleBySpecies)(filters.species),
      curry(filterPeopleById)(filters.person)
    )(people),
  };
}

export { useCharacterList };
