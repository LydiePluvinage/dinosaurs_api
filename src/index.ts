import express from 'express';
require('dotenv').config();

const server = express();
const PORT = process.env.PORT || 3000;

// Allows express to read requests body
server.use(express.json());

server.get('/coucou', (req, res) => res.send('hibou'));

server.listen(PORT, () => {
  console.log('Server running at http://127.0.0.1:' + PORT);
});

module.exports = server;
