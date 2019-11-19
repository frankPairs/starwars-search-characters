const { gql } = require('apollo-server');

const peopleTypeDefs = gql`
  type Species {
    id: ID!
    name: String!
    classification: String!
    designation: String!
    averageHeight: String!
    averageLifeSpan: String!
    eyeColors: String!
    hairColors: String!
    skinColors: String!
    language: String!
    people: [Person!]
    films: [Film!]
  }

  extend type Query {
    allSpecies: [Species!]
    Species(id: ID!): Species!
  }
`;

module.exports = peopleTypeDefs;
