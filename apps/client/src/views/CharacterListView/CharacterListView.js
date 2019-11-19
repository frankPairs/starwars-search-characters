import React from 'react';

import {
  CharacterList,
  CharacterListFilters,
  CharacterListProvider,
} from '../../components/Lists/';

function CharacterListView() {
  return (
    <CharacterListProvider>
      <CharacterListFilters />
      <CharacterList />
    </CharacterListProvider>
  );
}

export { CharacterListView };
