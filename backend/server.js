require("dotenv").config();
const http = require("http");
const connectDB = require("./config/db.js");
const logger = require("./config/logger.js");

const server = http.createServer((req, res) => {
  logger.http(req.method + ": " + req.url);

  if (req.url == "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, World!\n");
    res.write("You requested: " + req.url);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("ERROR 404: Not Found\n");
    res.write("You requested: " + req.url);
    res.end();
  }
});

connectDB()
  .then(() => {
    server.listen(process.env.PORT || 8000, () => {
      logger.info(`Server listening on port ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    logger.error(err);
  });
