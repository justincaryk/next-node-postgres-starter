import { resolve } from 'path';

import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../../.env') });

export const dbConfig = {
  CLIENT: process.env.CLIENT,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DATABASE: process.env.DATABASE || 'postgres',
  PG_USER: process.env.PG_USER || 'postgres',
  PG_PASSWORD: process.env.PG_PASSWORD || 'test1234',
  PG_PORT: Number(process.env.PG_PORT) || 5432,
  PG_SCHEMA: ['public', process.env.PG_SCHEMA ?? 'private'],
  JWT_SECRET: process.env.JWT_SECRET || '1234',
  OWNER_CONNECTION_STRING: process.env.OWNER_CONNECTION_STRING,
};
