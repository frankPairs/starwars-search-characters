import { compose, curry } from 'ramda';
import { useContext } from 'react';

import { usePeopleListQuery } from 'queries';
import { CharacterListContext } from '../CharacterListProvider/CharacterListProvider';

function useCharacterListFilters() {
  const { filters, updateFilter } = useContext(CharacterListContext);

  function handleFilterChange(evt) {
    updateFilter(evt.target.name, evt.target.value);
  }

  return [filters, handleFilterChange];
}

export { useCharacterListFilters };
