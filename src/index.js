import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

const wsserver = new WebSocketServer({
  server: httpServer,
  path: "/metro",
});

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

const serverCleanup = useServer(
  {
    typeDefs: typeDefs,
    resolvers: resolvers,
  },
  wsserver
);

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

server.start().then(() => {
  app.use("/metro", expressMiddleware(server));

  httpServer.listen(8080, () => {
    console.log(`Server is listening on port 8080`);
  });
});
