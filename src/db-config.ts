import 'dotenv/config';
import { Pool } from 'pg';

const connection: Pool = new Pool({
  host: process.env.DB_HOST, // address of the server
  port: Number(process.env.DB_PORT), // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_USER, // user to connect with
  password: process.env.DB_PASSWORD, // user password
  database: process.env.DB_NAME, // database name
});

export default connection;
