import { QueryResult } from 'pg';

export default interface ILocation extends QueryResult {
  idLocation: number;
  name: string;
}
