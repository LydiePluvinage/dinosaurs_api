import 'dotenv/config';
import { Client } from 'pg';

const client: Client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

export default client;
