import { compose, curry } from 'ramda';
import { useContext } from 'react';
import { pathOr } from 'ramda';

import { filterPeopleByFilm, filterPeopleBySpecies } from 'selectors';
import { useCharacterListFilters } from 'components/Lists';

function useCharacterFilterField(people) {
  const [filters, handleFilterChange] = useCharacterListFilters();

  return [
    {
      personId: pathOr('', ['person'], filters),
      peopleFiltered: compose(
        curry(filterPeopleByFilm)(filters.film),
        curry(filterPeopleBySpecies)(filters.species)
      )(people),
    },
    handleFilterChange,
  ];
}

export { useCharacterFilterField };
