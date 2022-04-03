import { Request, Response, NextFunction } from 'express';
import dietModel from '../models/diet';
import { ErrorHandler } from '../helpers/errors';

// gets all diets information
async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // gets diets list
    const diets = await dietModel.getAll();
    res.status(200).json(diets);
  } catch (err) {
    next(err);
  }
}

export default { getAll };
