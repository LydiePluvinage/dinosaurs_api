import express from 'express';
import dinosController from './controllers/dinos';
import dietsController from './controllers/diets';
import locationsController from './controllers/locations';
import erasController from './controllers/eras';

const setupRoutes = (server: express.Application) => {
  //diets
  server.get('/v1/diets', dietsController.getAll);

  //locations
  server.get('/v1/locations', locationsController.getAll);

  //eras
  server.get('/v1/eras', erasController.getAll);

  //dinos
  server.get('/v1/dinos/random', dinosController.getRandom);
  server.get('/v1/dinos/:idDino', dinosController.getOne);
  server.get('/v1/dinos', dinosController.getAll);
  // server.post('/dinos', userController.checkAuthorization, dinosController.addOne)
};

export default setupRoutes;
