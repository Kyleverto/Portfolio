require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db.js");
const logger = require("./config/logger.js");
const port = process.env.PORT || 3000;

const app = express();
app.use(
  morgan(process.env.MORGAN_FORMAT || "dev", { stream: logger.httpStream }),
);
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  logger.http(`${req.method}: ${req.url}`);
  next();
});

app.use("/api/projects", require("./routes/projectRoutes"));

connectDB();

app.listen(port, () => {
  logger.info(`Server listening on port ${port}...`);
});
