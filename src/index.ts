import express from 'express';
import setupRoutes from './router';
import { handleError } from './helpers/errors';
import 'dotenv/config';

const server: express.Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Allows express to read requests body
server.use(express.json());

// setup routes
setupRoutes(server);

// Error managment
server.use(handleError);

server.listen(PORT, () => {
  console.log('Server running at http://127.0.0.1:' + PORT);
});
