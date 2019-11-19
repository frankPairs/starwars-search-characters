import React from 'react';

import { SelectFieldStyles } from './SelectField.styles';

function SelectField({
  value,
  options,
  name,
  label,
  optionMap,
  onChange,
  ...props
}) {
  return (
    <SelectFieldStyles {...props}>
      <label> {label} </label>
      <select name={name} value={value} onChange={onChange}>
        <option value=""> Select an option </option>

        {options.map(option => {
          const optionMapped = optionMap(option);

          return (
            <option key={optionMapped.value} value={optionMapped.value}>
              {optionMapped.text}
            </option>
          );
        })}
      </select>
    </SelectFieldStyles>
  );
}

export { SelectField };
