import { QueryResult } from 'pg';
import connection from '../db-config';
import IDino from '../interfaces/IDino';

interface IFilter {
  diet: number | undefined;
  era: number | undefined;
  location: number | undefined;
  name: string | undefined;
  size: number | undefined;
  weight: number | undefined;
}

// gets all dinos
async function getAll(filters?: IFilter): Promise<IDino[]> {
  let sql: string = 'SELECT * FROM "dinos"';
  let sqlValues: Array<string | number> = [];
  let values: number = 1;

  if (filters) {
    if (filters.diet) {
      sql += ` WHERE "idDiet" = $${values}`;
      values++;
      sqlValues.push(filters.diet);
    }
    if (filters.era) {
      if (values === 1) {
        sql += ` WHERE "idEra" = $${values}`;
      } else {
        sql += ` AND "idEra" = $${values}`;
      }
      values++;
      sqlValues.push(filters.era);
    }
    if (filters.location) {
      if (values === 1) {
        sql += ` WHERE "idLocation" = $${values}`;
      } else {
        sql += ` AND "idLocation" = $${values}`;
      }
      values++;
      sqlValues.push(filters.location);
    }
    if (filters.name) {
      if (values === 1) {
        sql += ` WHERE LOWER("name") LIKE $${values}`;
      } else {
        sql += ` AND LOWER("name") LIKE $${values}`;
      }
      values++;
      sqlValues.push('%' + filters.name.toLowerCase() + '%');
    }
    if (filters.size) {
      if (values === 1) {
        sql += `WHERE "maxSize" <= $${values}`;
      } else {
        sql += ` AND "maxSize" <= $${values}`;
      }
      values++;
      sqlValues.push(filters.size);
    }
    if (filters.weight) {
      if (values === 1) {
        sql += `WHERE "maxWeight" <= $${values} `;
      } else {
        sql += ` AND "maxWeight <= $${values}`;
      }
      values++;
      sqlValues.push(filters.weight);
    }
  }

  const results: QueryResult = await connection.query(sql, sqlValues);
  return results.rows;
}

// get one dino by id
async function getOne(idDino: number): Promise<IDino> {
  const results: QueryResult = await connection.query(
    'SELECT * FROM dinos WHERE "idDino" = $1',
    [idDino]
  );
  return results.rows[0];
}

export default { getAll, getOne };
