import { readFileSync } from 'fs';
import { join } from 'path';
import db from '../../db/index.js';
// import { pubsub } from '../../graphql/pubsub.js';

const typeDefs= readFileSync(
  join(process.cwd(), 'src', 'modules', 'metros', '_schema.gql'),
  'utf8'
);

const resolvers = {
  Query: {
    metros:async ()=>{
      const metros=await db('metros')
      return metros
    },
    metro:async (_,args)=>{
        const metro=await db('metros').where({id:args.id}).first();
        return metro;
    }
  }
};

export default { typeDefs, resolvers } ;
