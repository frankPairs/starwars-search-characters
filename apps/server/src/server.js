const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const path = require('path');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const dataSources = require('./dataSources');
const dataLoaders = require('./dataLoaders');
const imageSearchService = require('./services/imageSearch/imageSearch');
const errors = require('./errors');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  dataSources: () => dataSources,
  context: () => {
    return {
      dataLoaders: dataLoaders(),
      imageSearchService,
      errors,
    };
  },
  formatError: err => {
    return errors.common.handleErrors(err);
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
