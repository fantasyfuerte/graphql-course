import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const users = [
  { id: 1, name: "John", age: 30, isMarried: true },
  { id: 2, name: "Jane", age: 25, isMarried: false },
  { id: 3, name: "Bob", age: 35, isMarried: true },
  { id: 4, name: "Alice", age: 40, isMarried: false },
  { id: 5, name: "Dave", age: 45, isMarried: true },
  { id: 6, name: "Eve", age: 50, isMarried: false },
];

const typeDefs = `
  type Query {
   getUsers: [User]
   getUserById(id: ID!): User
  }
  type Mutation {
   createUser(name: String!, age: Int!, isMarried: Boolean!): User
  }
  type User {
  id: ID
  name: String
  age: Int
  isMarried: Boolean
  }
`;

const resolvers = {};

const server = new ApolloServer({});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
