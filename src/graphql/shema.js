import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `#graphql
        type Query {
          metro: String
        }
        `;

  const resolvers = {
    Query: {
      metro: () => "Metroga xush kelibsiz",
    },
  };

  export const schema = makeExecutableSchema({
    typeDefs: [
      typeDefs,
    ],
    resolvers: [
     resolvers
    ],
  });