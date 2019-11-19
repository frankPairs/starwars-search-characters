const { random, name } = require('faker');

exports.createRandomSpecies = overrideSpeciesProps => {
  return {
    id: random.uuid(),
    name: name.title(),
    films: [],
    people: [],
    ...overrideSpeciesProps,
  };
};
