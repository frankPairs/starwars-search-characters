import { random, name } from 'faker';

function createRandomSpecies(overrideSpeciesProps) {
  return {
    id: random.uuid(),
    name: name.title(),
    films: [],
    people: [],
    ...overrideSpeciesProps,
  };
}

export { createRandomSpecies };
