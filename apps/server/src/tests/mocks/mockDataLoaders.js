exports.createMockDataLoaders = () => {
  return {
    getFilms: {
      loadMany: jest.fn(),
    },
    getSpecies: {
      loadMany: jest.fn(),
    },
    getPeople: {
      loadMany: jest.fn(),
    },
  };
};
