const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  );
});
