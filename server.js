const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  require('dotenv').config();
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

const { PORT, MONGO_URI } = process.env;

// Connect to database
connectDB(MONGO_URI);

app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

app.listen(PORT, () => {
  console.log(
    `Server running in ${NODE_ENV} mode on port: ${PORT}`.yellow.bold
  );
});
