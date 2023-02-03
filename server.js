const express = require('express');
const morgan = require('morgan');
const app = express();

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000;

app.use('/api/v1/bootcamps', require('./routes/bootcamps'));

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
