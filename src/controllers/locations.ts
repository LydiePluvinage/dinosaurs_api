import { Request, Response, NextFunction } from 'express';
import locationModel from '../models/location';

// gets all diets information
async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // gets locations list
    const locations = await locationModel.getAll();
    res.status(200).json(locations);
  } catch (err) {
    next(err);
  }
}

export default { getAll };
