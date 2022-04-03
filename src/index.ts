import express from 'express';
import setupRoutes from './router';
import { handleError } from './helpers/errors';
import connection from './db-config.js';
import 'dotenv/config';

const server = express();
const PORT = process.env.PORT || 3000;

// Allows express to read requests body
server.use(express.json());

// setup routes
setupRoutes(server);

// Error managment
server.use(handleError);

server.get('/', (req, res) => {
  connection
    .query('SELECT * FROM diets')
    .then((data) => res.status(200).json(data.rows));
});

server.listen(PORT, () => {
  console.log('Server running at http://127.0.0.1:' + PORT);
});

module.exports = server;
