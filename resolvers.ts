import { people } from "./dataset";

export const resolvers = {
  Query: {
    people: () => people
  }
}