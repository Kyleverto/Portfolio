const mongoose = require("mongoose");
const logger = require("./logger.js");
require("colors");

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    logger.error(`Error: ${err.message}`);
    process.exit(-1);
  }
};

module.exports = connectDB;
