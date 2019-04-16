"use strict";

var _require = require("winston"),
    createLogger = _require.createLogger,
    format = _require.format,
    transports = _require.transports;

var combine = format.combine,
    timestamp = format.timestamp,
    printf = format.printf,
    colorize = format.colorize;
var formatter = printf(function (info) {
  return "".concat(info.timestamp, " ").concat(info.level, " ::: ").concat(info.message);
});
var logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(colorize({
    level: true
  }), timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }), formatter),
  transports: [new transports.Console()]
});

module.exports.info = function (message) {
  logger.info(message);
};

module.exports.error = function (message) {
  logger.error(message);
};

module.exports.debug = function (message) {
  logger.debug(message);
};