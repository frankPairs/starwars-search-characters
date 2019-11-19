const { gql } = require('apollo-server');

const filmsTypeDefs = gql`
  type Film {
    id: ID!
    title: String!
    episodeId: ID!
    openingCrawl: String!
    director: String!
    producer: String!
    species: [Species!]
    characters: [Person!]
  }

  extend type Query {
    allFilms: [Film!]
    Film(id: ID!): Film!
  }
`;

module.exports = filmsTypeDefs;
