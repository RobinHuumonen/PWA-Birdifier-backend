const logger = require("./logger");

const requestLogger = (req, res, nxt) => {
  logger.info("Method:", req.method);
  logger.info("Path:  ", req.path);
  logger.info("Body:  ", req.body);
  logger.info("---");
  nxt();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, req, res, nxt) => {
  logger.error(error.message);
  nxt(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
};