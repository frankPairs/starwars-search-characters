import React from 'react';
import { pathOr } from 'ramda';

import { SelectField } from '../SelectField/SelectField';
import { useSpeciesFilterField } from './useSpeciesFilterField';

function SpeciesFilterField({ species, ...props }) {
  const [
    { speciesId, speciesFiltered },
    onFilterChange,
  ] = useSpeciesFilterField(species);
  return (
    <SelectField
      {...props}
      label="Species"
      name="species"
      options={speciesFiltered}
      value={speciesId}
      optionMap={species => ({ text: species.name, value: species.id })}
      onChange={onFilterChange}
    />
  );
}

export { SpeciesFilterField };
