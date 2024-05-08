import express from 'express';

const host = '127.0.0.1';
const port = 3000;
const app = express();

app.get('/Helloworld', (req, res) => {
  res.cookie('toren', 'zcfasf234234q3413434', {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });
  res.clearCookie('toren', { path: '/' });
  res.type('application/json');
  res.send('hello world');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
