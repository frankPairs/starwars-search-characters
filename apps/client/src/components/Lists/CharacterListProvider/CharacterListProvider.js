import React, { createContext, useState } from 'react';

const initalState = {
  filters: {
    person: null,
    film: null,
    species: null,
  },
};

const CharacterListContext = createContext(initalState);

function CharacterListProvider({ children }) {
  const [filters, setFilter] = useState(initalState);

  function updateFilter(filterName, filterValue) {
    setFilter(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        [filterName]: filterValue,
      },
    }));
  }

  return (
    <CharacterListContext.Provider
      value={{
        ...filters,
        updateFilter,
      }}
    >
      {children}
    </CharacterListContext.Provider>
  );
}

export { CharacterListProvider, CharacterListContext };
