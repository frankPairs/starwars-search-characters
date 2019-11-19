const peopleResolvers = {
  Person: {
    id(person, args, { dataSources }) {
      return dataSources.people.getIdFromUrl(person.url);
    },
    async image(person, args, { imageSearchService, dataSources }) {
      const imageUrl = await imageSearchService.search(person.name);

      return imageUrl;
    },
    async films(person, args, { dataLoaders }) {
      return dataLoaders.getFilms.loadMany(person.films);
    },
    async species(person, args, { dataLoaders }) {
      return dataLoaders.getSpecies.loadMany(person.species);
    },
  },
  Query: {
    async allPeople(root, args, { dataSources }) {
      const response = await dataSources.people.getAll();

      return response.results;
    },
    async Person(root, { id }, { dataSources, errors }) {
      const response = await dataSources.people.getOne(id);

      if (!response) {
        throw errors.people.PersonNotFound();
      }

      return response;
    },
  },
};

module.exports = peopleResolvers;
