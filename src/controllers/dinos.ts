import { Request, Response, NextFunction } from 'express';
import dinoModel from '../models/dino';

// gets all dinos information
async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // gets filter
    const diet: number | undefined = Number(req.query.diet);
    const era: number | undefined = Number(req.query.era);
    const location: number | undefined = Number(req.query.location);
    const name: string | undefined = req.query.name?.toString();

    // gets dinos list
    const dinos = await dinoModel.getAll({ diet, era, location, name });
    res.status(200).json(dinos);
  } catch (err) {
    next(err);
  }
}

// gets one dino information
async function getOne(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const idDino: number = Number(req.params.idDino) || 0;
    // gets dino
    const dino = await dinoModel.getOne(idDino);
    res.status(200).json(dino);
  } catch (err) {
    next(err);
  }
}
// gets one random dino information
async function getRandom(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // gets dino

    const dinos = await dinoModel.getAll();

    const dinoRandom = Math.floor(Math.random() * dinos.length) + 1;
    res.status(200).json(dinos[dinoRandom]);
  } catch (err) {
    next(err);
  }
}

export default { getAll, getOne, getRandom };
