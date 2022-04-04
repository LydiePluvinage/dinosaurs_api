import { QueryResult } from 'pg';
import IDiet from './IDiet';
import IEra from './IEra';
import ILocation from './ILocation';

export default interface IDino extends QueryResult {
  idDino: number;
  name: string;
  maxSize: number;
  maxWeight: number;
  imageURL: string;
  era: IEra;
  location: ILocation;
  diet: IDiet;
}
