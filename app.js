const express = require('express');
const { sayHello } = require('./greetingsModule');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  const greeting = sayHello();
  res.send(greeting);
});

app.get('/Bye', (req, res) => {
  const greeting_2 = sayBye();
  res.send(greeting_2);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
