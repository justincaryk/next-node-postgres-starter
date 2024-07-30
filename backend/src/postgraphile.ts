import { Pool } from 'pg';
import { postgraphile } from 'postgraphile';

import { dbConfig } from '../config/database';

const pool = new Pool({
  database: dbConfig.DATABASE,
  host: dbConfig.DB_HOST,
  port: dbConfig.PG_PORT,
  user: dbConfig.PG_USER,
  password: dbConfig.PG_PASSWORD,
});

export { pool as pg };

export default postgraphile(pool, dbConfig.PG_SCHEMA, {
  // watchPg: true, // Need extension for this to work properly
  jwtSecret: dbConfig.JWT_SECRET,
  jwtPgTypeIdentifier: 'public.jwt_token',
  graphiql: true,
  enhanceGraphiql: true,
  dynamicJson: true,
  pgDefaultRole: 'anonymous_user',
  graphqlRoute: '/api/graphql',
  graphiqlRoute: '/api/graphiql',
  retryOnInitFail: true,
  ownerConnectionString: dbConfig.OWNER_CONNECTION_STRING,
});

