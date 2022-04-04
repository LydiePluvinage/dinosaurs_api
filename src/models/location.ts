import { QueryResult } from 'pg';
import connection from '../db-config';
import ILocation from '../interfaces/ILocation';

// gets all locations
async function getAll(): Promise<ILocation[]> {
  const results: QueryResult = await connection.query(
    'SELECT * FROM locations'
  );
  return results.rows;
}

export default { getAll };
