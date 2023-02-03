const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load env variables
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
