const express = require('express');
const calculator = require('./calculator');

const app = express();

app.get('/add', (req, res) => {
  const { value1, value2 } = req.query;

  res.json({
    result: calculator.add(parseInt(value1), parseInt(value2)),
  });
});

app.get('/subtract', (req, res) => {
  const { value1, value2 } = req.query;

  res.json({
    result: calculator.subtract(parseInt(value1), parseInt(value2)),
  });
});

module.exports = app;
