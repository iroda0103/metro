import { readFileSync } from "fs";
import { join } from "path";
import db from "../../db/index.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "paths", "_schema.gql"),
  "utf8"
);

const resolvers = {
  
  Query: {
    paths: async () => {
      const metros = await db("paths");
      return metros;
    },
    path: async (_, args) => {
      const path = await db("paths").where({ id: args.id }).first();
      if (!path) {
        throw new Error("Not found");
      }
      return path;
    },
  },

  Path: {
    metro: async (parent, args) => {
      const metro = await db("metros");
      if (!metro) {
        throw new Error("Metro Not Found");
      }
      return metro[0];
    },
  },
};

export default { typeDefs, resolvers };
