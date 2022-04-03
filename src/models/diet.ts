import { QueryResult } from 'pg';
import connection from '../db-config';
import IDiet from '../interfaces/IDiet';

// gets all diets
async function getAll(): Promise<IDiet[]> {
  const results: QueryResult = await connection.query('SELECT * FROM diets');
  return results.rows;
}

export default { getAll };
