import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send({ message: 'Hello nanote!' });
});

app.listen(8080, () => {
  console.log('server is running on port 8080');
});
