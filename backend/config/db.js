const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const logger = require("./logger.js");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    logger.error(`Error: ${err.message}`);
    process.exit(-1);
  }
};

module.exports = connectDB;
