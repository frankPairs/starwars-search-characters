import { compose, curry } from 'ramda';
import { useContext } from 'react';
import { pathOr } from 'ramda';

import { filterFilmsBySpecies, filterFilmsByCharacter } from 'selectors';
import { useCharacterListFilters } from 'components/Lists';

function useFilmFilterField(films) {
  const [filters, handleFilterChange] = useCharacterListFilters();

  return [
    {
      filmId: pathOr('', ['film'], filters),
      filmsFiltered: compose(
        curry(filterFilmsByCharacter)(filters.person),
        curry(filterFilmsBySpecies)(filters.species)
      )(films),
    },
    handleFilterChange,
  ];
}

export { useFilmFilterField };
