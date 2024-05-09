import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const host = '127.0.0.1';
const port = 3000;
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}, at ${new Date()}`);
  next();
});

app.get('/Helloworld', (req, res) => {
  // res.type('application/json');
  // res.send('hello world');
  throw new Error('This is a test error');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
