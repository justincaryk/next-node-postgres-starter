import cors from 'cors';
import express from 'express';

import postgraphileMiddleware from './postgraphile';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(postgraphileMiddleware);

app.listen(port, (err?: unknown) => {
  if (err) {
    return console.error('Server startup error:', err);
  }
  console.log(`Server is running on http://localhost:${port}/api/graphiql`);
});
