import express from 'express';
import dinosController from './controllers/dinos';
import dietsController from './controllers/diets';
import locationsController from './controllers/locations';
import erasController from './controllers/eras';

const setupRoutes = (server: express.Application) => {
  //diets
  server.get('/diets', dietsController.getAll);

  //locations
  server.get('/locations', locationsController.getAll);

  //eras
  server.get('/eras', erasController.getAll);
};

export default setupRoutes;
