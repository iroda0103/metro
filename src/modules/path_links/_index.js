import { readFileSync } from "fs";
import { join } from "path";
import db from "../../db/index.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "path_links", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    path_links: async () => {
      const path_links = await db("path_links");
      return path_links;
    },
    path_link: async (parent, args) => {
      const path_link = await db("path_links")
        .where({ path_id: args.id })
        .first();
      if (!path_link) {
        throw new Error("path_links Not Found");
      }

      return path_link;
    },
  },

  PathLink: {
    path: async (parent) => {
      const path = await db("paths").where({ id: parent.path_id }).first();
      if (!path) {
        throw new Error("Path Not Found");
      }
      return path;
    },
    linked_path: async (parent) => {
      const path = await db("paths").where({ id: parent.linked_id }).first();
      if (!path) {
        throw new Error("Path Not Found");
      }

      return path;
    },
  },

  //   StationLink:{
  //     links:
  //   }
};

export default { typeDefs, resolvers };
