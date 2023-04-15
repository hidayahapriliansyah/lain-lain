const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.get('/hello', (req, res) => {
  res.status(200).json({
    msg: 'test success',
  });
});

module.exports = app;
