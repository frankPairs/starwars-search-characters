import { compose, curry } from 'ramda';
import { useContext } from 'react';
import { pathOr } from 'ramda';

import { filterSpeciesByFilm, filterSpeciesByPerson } from 'selectors';
import { useCharacterListFilters } from 'components/Lists';

function useSpeciesFilterField(species) {
  const [filters, handleFilterChange] = useCharacterListFilters();

  return [
    {
      speciesId: pathOr('', ['species'], filters),
      speciesFiltered: compose(
        curry(filterSpeciesByFilm)(filters.film),
        curry(filterSpeciesByPerson)(filters.person)
      )(species),
    },
    handleFilterChange,
  ];
}

export { useSpeciesFilterField };
