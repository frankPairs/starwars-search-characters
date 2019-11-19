function filterSpeciesByFilm(filmId, species) {
  return !filmId
    ? species
    : species.filter(speciesItem =>
        speciesItem.films.map(film => film.id).includes(filmId)
      );
}

function filterSpeciesByPerson(personId, species) {
  return !personId
    ? species
    : species.filter(speciesItem =>
        speciesItem.people.map(person => person.id).includes(personId)
      );
}

export { filterSpeciesByPerson, filterSpeciesByFilm };
