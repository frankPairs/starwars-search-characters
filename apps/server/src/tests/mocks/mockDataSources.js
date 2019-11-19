exports.createMockDataSources = () => {
  return {
    people: {
      getIdFromUrl: jest.fn(),
      getAll: jest.fn(),
      getOne: jest.fn(),
    },
  };
};
