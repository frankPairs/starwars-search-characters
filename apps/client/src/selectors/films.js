function filterFilmsByCharacter(personId, films) {
  return !personId
    ? films
    : films.filter(film =>
        film.characters.map(character => character.id).includes(personId)
      );
}

function filterFilmsBySpecies(speciesId, films) {
  return !speciesId
    ? films
    : films.filter(film =>
        film.species.map(species => species.id).includes(speciesId)
      );
}

export { filterFilmsBySpecies, filterFilmsByCharacter };
