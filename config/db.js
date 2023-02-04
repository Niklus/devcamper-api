const mongoose = require('mongoose');

const connectDB = async (URI) => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.blue.underline.bold
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
