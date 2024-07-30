import express from 'express';
import { postgraphile } from 'postgraphile';
import { dbConfig } from '../config/database';

const app = express();

app.use(
  postgraphile(
    `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
    'public',
    {
      graphiql: true,
      enhanceGraphiql: true,
    },
  ),
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
