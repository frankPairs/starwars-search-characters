const { gql } = require('apollo-server');

const peopleTypeDefs = gql`
  type Person {
    id: ID!
    name: String!
    birthYear: String!
    eyeColor: String!
    gender: String!
    hairColor: String!
    height: String!
    mass: Float!
    skinColor: String!
    films: [Film!]
    species: [Species!]
    image: String
  }

  type Query {
    allPeople: [Person!]
    Person(id: ID!): Person!
  }
`;

module.exports = peopleTypeDefs;
