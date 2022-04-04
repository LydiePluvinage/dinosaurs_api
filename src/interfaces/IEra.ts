import { QueryResult } from 'pg';

export default interface IEra extends QueryResult {
  idEra: number;
  name: string;
}
