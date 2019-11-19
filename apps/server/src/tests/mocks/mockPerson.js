const { random, name, image, internet } = require('faker');

exports.createRandomPerson = overridePersonProps => {
  return {
    id: random.uuid(),
    name: name.firstName(),
    image: image.imageUrl(),
    species: [random.uuid()],
    films: [random.uuid()],
    url: internet.url(),
    ...overridePersonProps,
  };
};
