import React from 'react';

import { SelectField } from '../SelectField/SelectField';
import { useCharacterFilterField } from './useCharacterFilterField';

function CharacterFilterField({ people, ...props }) {
  const [
    { peopleFiltered, personId },
    onFilterChange,
  ] = useCharacterFilterField(people);

  return (
    <SelectField
      {...props}
      label="Character"
      name="person"
      options={peopleFiltered}
      value={personId}
      optionMap={person => ({ text: person.name, value: person.id })}
      onChange={onFilterChange}
    />
  );
}

export { CharacterFilterField };
