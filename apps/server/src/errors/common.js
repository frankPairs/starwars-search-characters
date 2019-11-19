const { ApolloError } = require('apollo-server');

function InternalServerError() {
  return new ApolloError(
    'Internal server error, please try later',
    'INTERNAL_SERVER_ERROR'
  );
}

function handleErrors(err) {
  if (err.hasOwnProperty('extensions')) {
    return err;
  }

  return InternalServerError();
}

module.exports = {
  handleErrors,
};
