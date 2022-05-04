import express from 'express';
import cors from 'cors';
import setupRoutes from './router';
import { handleError } from './helpers/errors';
import cors from "cors";
import 'dotenv/config';

const server: express.Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

// utilise le package cors pour autoriser les appels extérieurs
server.use(
  cors({
    origin: '*',
  })
);

// Allows express to read requests body
server.use(express.json());

// utilise le package cors pour autoriser les appels extérieurs
server.use(
  cors({
    origin: "*",
  })
);

// setup routes
setupRoutes(server);

// Error managment
server.use(handleError);

server.listen(PORT, () => {
  console.log('Server running at http://127.0.0.1:' + PORT);
});
