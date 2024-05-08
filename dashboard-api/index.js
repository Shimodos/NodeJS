import express from 'express';

const host = '127.0.0.1';
const port = 3000;
const app = express();

app.all('/Helloworld', (req, res, next) => {
  console.log('Accessing the secret section ...');
  next();
});

const cb = (req, res, next) => {
  console.log('CB1');
};

app
  .route('/user')
  .get('/Helloworld', cb, (req, res) => {
    res.send('Hello World');
  })
  .post('/Helloworld', cb, (req, res) => {
    res.send('Hello World1');
  });

app.post('/Helloworld', cb, (req, res) => {
  res.send('Hello World2');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
