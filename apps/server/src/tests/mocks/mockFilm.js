const { random, name } = require('faker');

exports.createRandomFilm = overrideFilmProps => {
  return {
    id: random.uuid(),
    title: name.title(),
    species: [],
    characters: [],
    ...overrideFilmProps,
  };
};
