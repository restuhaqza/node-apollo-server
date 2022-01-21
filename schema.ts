import { gql } from 'apollo-server-core'

export const typeDefs = gql`
  type People {
    name: String,
    email: String
  }

  type Query {
    people: [People]
  }
`