const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server run in http://localhost:1245/');
});
