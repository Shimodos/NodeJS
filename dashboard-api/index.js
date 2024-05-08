import express from 'express';
import { userRouter } from './users/users.js';

const host = '127.0.0.1';
const port = 3000;
const app = express();

app.get('/Helloworld', (req, res) => {
  res.type('application/json');
  res.send('hello world');
});

app.use('/users', userRouter);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
