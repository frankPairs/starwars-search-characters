const { ApolloError } = require('apollo-server');

function PersonNotFound() {
  return new ApolloError('Person not found', 'PERSON_NOT_FOUND');
}

module.exports = {
  PersonNotFound,
};
