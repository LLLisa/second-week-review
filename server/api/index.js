const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use('/users', require('./users'));
app.use('/schools', require('./schools'));

// app.use('/', (req, res) => {
//   res.redirect('/users');
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

module.exports = app;
