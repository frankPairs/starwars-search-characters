const filmsResolvers = {
  Film: {
    id(film, args, { dataSources }) {
      return dataSources.films.getIdFromUrl(film.url);
    },
    async characters(film, args, { dataSources, dataLoaders }) {
      return dataLoaders.getPeople.loadMany(film.characters);
    },
    async species(film, args, { dataSources, dataLoaders }) {
      return dataLoaders.getSpecies.loadMany(film.species);
    },
  },
  Query: {
    async allFilms(root, { filters }, { dataSources }) {
      const response = await dataSources.films.getAll();

      return response.results;
    },
    async Film(root, { id }, { dataSources, errors }) {
      const response = await dataSources.films.getOne(id);

      if (!response) {
        throw errors.films.FilmNotFound();
      }

      return response;
    },
  },
};

module.exports = filmsResolvers;
