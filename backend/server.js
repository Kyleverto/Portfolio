const http = require("http");
const dotenv = require("dotenv").config();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  logger.info("Server listening...");
});
