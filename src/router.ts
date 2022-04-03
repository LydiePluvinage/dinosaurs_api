import express from 'express';
import dinosController from './controllers/dinos';
import dietsController from './controllers/diets';
import locationsController from './controllers/locations';
import erasController from './controllers/eras';

const setupRoutes = (server: express.Application) => {
  //   server.get('/dinos', dinosController.getAll);
};

export default setupRoutes;
