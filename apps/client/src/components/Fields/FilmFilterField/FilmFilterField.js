import React from 'react';
import { pathOr } from 'ramda';

import { SelectField } from '../SelectField/SelectField';
import { useFilmFilterField } from './useFilmFilterField';

function FilmFilterField({ films, ...props }) {
  const [{ filmsFiltered, filmId }, onFilterChange] = useFilmFilterField(films);

  return (
    <SelectField
      {...props}
      label="Film"
      name="film"
      options={filmsFiltered}
      value={filmId}
      optionMap={film => ({ text: film.title, value: film.id })}
      onChange={onFilterChange}
    />
  );
}

export { FilmFilterField };
