import { QueryResult } from 'pg';

export default interface IDiet extends QueryResult {
  idDiet: number;
  name: string;
}
