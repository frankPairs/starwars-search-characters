import ApolloClient from 'apollo-boost';

export const graphqlClient = new ApolloClient({
  uri: 'http://localhost:4000',
});
