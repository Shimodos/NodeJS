import express from 'express';

const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
  res.type('application/json');
  res.send('login');
});

userRouter.post('/register', (req, res) => {
  res.type('application/json');
  res.send('register');
});

export { userRouter };
