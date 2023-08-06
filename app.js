const express = require('express');
const { sayHello } = require('./greetingsModule');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  const greeting = sayHello();
  res.send(greeting);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
