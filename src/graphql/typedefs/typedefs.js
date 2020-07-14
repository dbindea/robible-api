import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String!
    editions: [Bible!]!
  }

  type Bible {
    id: ID!
    name: String!
  }
`;
