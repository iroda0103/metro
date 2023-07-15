import { makeExecutableSchema } from "@graphql-tools/schema";
import metroSchema from '../modules/metros/_index.js'
import pathSchema from '../modules/paths/_index.js'
import stationSchema from '../modules/stations/_index.js'
import PathlinkSchema from '../modules/path_links/_index.js'
import linkSchema from '../modules/station_links/_index.js'
const typeDefs = `#graphql
        type Query {
          ping: String
        }
        `;

  const resolvers = {
    Query: {
      ping: () => "Metroga xush kelibsiz",
    },
  };

  const schema = makeExecutableSchema({
    typeDefs: [
      typeDefs,
      metroSchema.typeDefs,
      pathSchema.typeDefs,
      stationSchema.typeDefs,
      PathlinkSchema.typeDefs,
      linkSchema.typeDefs
    ],
    resolvers: [
     resolvers,
     metroSchema.resolvers,
     stationSchema.resolvers,
     pathSchema.resolvers,
     PathlinkSchema.resolvers,
     linkSchema.resolvers
    ],
  });
  export default schema