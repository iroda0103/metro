import { readFileSync } from "fs";
import { join } from "path";
import db from "../../db/index.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "station_links", "_schema.gql"),
  "utf8"
);

const resolvers = {
    
  Query: {
    links: async () => {
      const stations = await db("station_path_links");
      return stations;
    },
    link:async (parent,args)=>{
      const station_path_links=await db('station_path_links').where({station_id:args.id}).first()
      if(!station_path_links){
          throw new Error('station_path_links Not Found')
      }
      
      return station_path_links
    }
  },

  StationLink:{
    station:async(parent)=>{
        const station=await db('stations').where({id:parent.station_id}).first()
        if(!station){
            throw new Error('station Not Found')
        }
        
        return station
    },
    linked_station:async(parent)=>{
        const linked_station=await db('station').where({id:parent.linked_id}).first()
        if(!linked_station){
            throw new Error('linked_station Not Found')
        }
        
        return linked_station
    },
  },
  
//   StationLink:{
//     links:
//   }

};

export default { typeDefs, resolvers };
