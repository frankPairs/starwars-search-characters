function filterPeopleByFilm(filmId, people) {
  return !filmId
    ? people
    : people.filter(person =>
        person.films.map(film => film.id).includes(filmId)
      );
}

function filterPeopleBySpecies(specieId, people) {
  return !specieId
    ? people
    : people.filter(person =>
        person.species.map(species => species.id).includes(specieId)
      );
}

function filterPeopleById(personId, people) {
  return !personId ? people : people.filter(person => personId === person.id);
}

export { filterPeopleById, filterPeopleBySpecies, filterPeopleByFilm };
