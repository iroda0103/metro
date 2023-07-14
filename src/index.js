import http from "http";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import config from "./shared/config/index.js";
import { builGraphQLServer } from "./graphql/index.js";

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

const server = builGraphQLServer(httpServer);
await server.start();

app.use("/metro", expressMiddleware(server));

httpServer.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
