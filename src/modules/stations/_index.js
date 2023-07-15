import { readFileSync } from "fs";
import { join } from "path";
import db from "../../db/index.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "stations", "_schema.gql"),
  "utf8"
);

const resolvers = {
    
  Query: {
    stations: async () => {
      const stations = await db("stations");
      return stations;
    },
    station: async (_, args) => {
      const station = await db("stations").where({ id: args.id }).first();
      if(!station){
        throw new Error('Station Not Found')
      }
      return station;
    },
  },

  Station: {
    forward: async (parent) => {
      const station = await db("stations").where({ id: parent.forward_id }).first();
      if (!station) {
        throw new Error("Forward station Not Found");
      }
      return station;
    },
    backward: async (parent) => {
        const station = await db("stations").where({ id: parent.backward_id }).first();
        if (!station) {
            throw new Error("Forward station Not Found");
          }
          return station;
    },
    path:async(parent)=>{
        const path=db('paths').where({id:parent.path_id}).first();
        if (!path) {
            throw new Error("Path Not Found");
          }
          return path;
    }
  },

};

export default { typeDefs, resolvers };
