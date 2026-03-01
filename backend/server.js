const http = require("http");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db.js");
const logger = require("./config/logger.js");

const server = http.createServer(app);

connectDB()
  .then(() => {
    server.listen(process.env.PORT || 8000, () => {
      logger.info(`Server listening on port ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    logger.error(err);
  });
