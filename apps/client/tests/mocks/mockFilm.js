import { random, name } from 'faker';

function createRandomFilm(overrideFilmProps) {
  return {
    id: random.uuid(),
    title: name.title(),
    species: [],
    characters: [],
    ...overrideFilmProps,
  };
}

export { createRandomFilm };
