import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  database: process.env.DATABASE as string,
  user: process.env.PG_USER as string,
  password: process.env.PG_PASSWORD as string,
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.PG_PORT as string, 10),
};
