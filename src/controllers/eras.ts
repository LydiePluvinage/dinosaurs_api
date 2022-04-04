import { Request, Response, NextFunction } from 'express';
import eraModel from '../models/era';

// gets all eras information
async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // gets eras list
    const eras = await eraModel.getAll();
    res.status(200).json(eras);
  } catch (err) {
    next(err);
  }
}

export default { getAll };
