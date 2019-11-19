import { random, name, image } from 'faker';

function createRandomPerson(overridePersonProps) {
  return {
    id: random.uuid(),
    name: name.firstName(),
    image: image.imageUrl(),
    species: [],
    films: [],
    ...overridePersonProps,
  };
}

export { createRandomPerson };
