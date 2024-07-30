import express from 'express';

import postgraphileMiddleware from './postgraphile';

const app = express();
const port = process.env.PORT || 5000;

app.use(postgraphileMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api/graphiql`);
});
