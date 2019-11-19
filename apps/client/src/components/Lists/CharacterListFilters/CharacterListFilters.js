import React from 'react';

import {
  CharacterFilterField,
  FilmFilterField,
  SpeciesFilterField,
} from 'components/Fields';
import { usePeopleListQuery } from 'queries';
import { useCharacterListFilters } from './useCharacterListFilters';
import { CharacterListFiltersStyles } from './CharacterListFilters.styles';

function CharacterListFilters() {
  const {
    data: { people, films, species },
    loading,
    error,
  } = usePeopleListQuery();

  return (
    <CharacterListFiltersStyles>
      <FilmFilterField className="field" films={films} />
      <SpeciesFilterField className="field" species={species} />
      <CharacterFilterField className="field" people={people} />
    </CharacterListFiltersStyles>
  );
}

export { CharacterListFilters };
