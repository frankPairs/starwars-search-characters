const speciesResolvers = {
  Species: {
    id(species, args, { dataSources }) {
      return dataSources.species.getIdFromUrl(species.url);
    },
    async people(species, args, { dataSources, dataLoaders }) {
      return dataLoaders.getPeople.loadMany(species.people);
    },
    async films(species, args, { dataSources, dataLoaders }) {
      return dataLoaders.getFilms.loadMany(species.films);
    },
  },
  Query: {
    async allSpecies(root, { filters }, { dataSources }) {
      const response = await dataSources.species.getAll();

      return response.results;
    },
    async Species(root, { id }, { dataSources, errors }) {
      const response = await dataSources.species.getOne(id);

      if (!response) {
        throw errors.species.SpeciesNotFound();
      }

      return response;
    },
  },
};

module.exports = speciesResolvers;
