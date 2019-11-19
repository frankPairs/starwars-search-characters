const { ApolloError } = require('apollo-server');

function SpeciesNotFound() {
  return new ApolloError('Species not found', 'SPECIES_NOT_FOUND');
}

module.exports = {
  SpeciesNotFound,
};
