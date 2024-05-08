import express from 'express';

const host = '127.0.0.1';
const port = 3000;
const app = express();

app.get('/Helloworld', (req, res) => {
  res.send('Hello World');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
