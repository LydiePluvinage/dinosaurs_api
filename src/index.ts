import express from 'express';
import setupRoutes from './router';
const { handleError } = require('./helpers/errors');
require('dotenv').config();

const server = express();
const PORT = process.env.PORT || 3000;

// Allows express to read requests body
server.use(express.json());

// setup routes
setupRoutes(server);

// Error managment
server.use(handleError);

server.get('/coucou', (req, res) => res.send('hibou'));

server.listen(PORT, () => {
  console.log('Server running at http://127.0.0.1:' + PORT);
});

module.exports = server;
