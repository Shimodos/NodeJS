import express from 'express';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('User router middleware');
  next();
});

userRouter.post('/login', (req, res) => {
  res.type('application/json');
  res.send('login');
});

userRouter.post('/register', (req, res) => {
  res.type('application/json');
  res.send('register');
});

export { userRouter };
