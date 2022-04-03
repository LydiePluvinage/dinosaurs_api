import { QueryResult } from 'pg';
import connection from '../db-config';
import IEra from '../interfaces/IEra';

// gets all eras
async function getAll(): Promise<IEra[]> {
  const results: QueryResult = await connection.query('SELECT * FROM eras');
  return results.rows;
}

export default { getAll };
