const { ApolloError } = require('apollo-server');

function FilmNotFound() {
  return new ApolloError('Film not found', 'FILM_NOT_FOUND');
}

module.exports = {
  FilmNotFound,
};
