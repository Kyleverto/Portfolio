const winston = require("winston");

const levels = {
  silent: 0,
  error: 1,
  warn: 2,
  http: 3,
  info: 4,
  debug: 5,
  verbose: 6,
};

const colors = {
  error: "red",
  warn: "yellow",
  http: "cyan",
  info: "green",
  debug: "blue",
  verbose: "grey",
};

const traceErrors = winston.format(function traceErrors(info) {
  if (info instanceof Error) {
    info.message = info.stack;
  }
  return info;
});

const toJsonString = winston.format(function toJsonString(info) {
  if (typeof info.message !== "string") {
    info.message = JSON.stringify(info.message);
  }
  return info;
});

const logger = winston.createLogger({
  levels,
  level: process.env.LOG_LEVEL,
  format: winston.format.combine(
    traceErrors(),
    toJsonString(),
    winston.format.cli({ levels, colors }),
  ),
  transports: new winston.transports.Console(),
});

logger.httpStream = {
  write(message) {
    logger.http(message);
  },
};

module.exports = logger;
