const { random } = require('faker');

const peopleResolvers = require('../../resolvers/people');
const {
  createRandomPerson,
  createMockDataSources,
  createMockDataLoaders,
} = require('../mocks');

describe('peopleResolvers', () => {
  describe('Person', () => {
    it('should call getIdFromUrl to get the id', () => {
      const mockDataSources = createMockDataSources();
      const mockPerson = createRandomPerson();

      peopleResolvers.Person.id(
        mockPerson,
        {},
        { dataSources: mockDataSources }
      );

      expect(mockDataSources.people.getIdFromUrl).toHaveBeenCalledWith(
        mockPerson.url
      );
    });

    it('should call getFilms dataloader to get the person films', () => {
      const mockDataLoaders = createMockDataLoaders();
      const mockPerson = createRandomPerson();

      peopleResolvers.Person.films(
        mockPerson,
        {},
        { dataLoaders: mockDataLoaders }
      );

      expect(mockDataLoaders.getFilms.loadMany).toHaveBeenCalledWith(
        mockPerson.films
      );
    });

    it('should call getSpecies dataloader to get the person species', () => {
      const mockDataLoaders = createMockDataLoaders();
      const mockPerson = createRandomPerson();

      peopleResolvers.Person.species(
        mockPerson,
        {},
        { dataLoaders: mockDataLoaders }
      );

      expect(mockDataLoaders.getSpecies.loadMany).toHaveBeenCalledWith(
        mockPerson.species
      );
    });
  });

  describe('Query', () => {
    it('should return all people after calling Query.allPeople', async () => {
      const mockDataSources = createMockDataSources();
      const mockPeople = [createRandomPerson(), createRandomPerson()];

      mockDataSources.people.getAll.mockResolvedValueOnce({
        results: mockPeople,
      });

      const result = await peopleResolvers.Query.allPeople(
        {},
        {},
        { dataSources: mockDataSources }
      );

      expect(result).toEqual(mockPeople);
    });

    it('should return all people after calling Query.Person', async () => {
      const mockDataSources = createMockDataSources();
      const mockPerson = createRandomPerson();
      const personId = random.uuid();

      mockDataSources.people.getOne.mockResolvedValueOnce(mockPerson);

      const result = await peopleResolvers.Query.Person(
        {},
        { id: personId },
        { dataSources: mockDataSources }
      );

      expect(mockDataSources.people.getOne).toHaveBeenCalledWith(personId);
      expect(result).toEqual(mockPerson);
    });

    it('should trigger not found error if Query.Person does not find it', async () => {
      const mockDataSources = createMockDataSources();
      const error = new Error('error');
      const mockErrors = {
        people: { PersonNotFound: jest.fn().mockReturnValueOnce(error) },
      };

      mockDataSources.people.getOne.mockResolvedValueOnce(null);

      peopleResolvers.Query.Person(
        {},
        {},
        { dataSources: mockDataSources, errors: mockErrors }
      ).catch(err => {
        expect(err).toEqual(error);
      });
    });
  });
});
