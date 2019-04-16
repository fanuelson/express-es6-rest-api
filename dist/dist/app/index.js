"use strict";

var _logger = _interopRequireDefault(require("./core/utils/logger"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var express = require("express");

var app = express();

var components = require('./components');

var SERVER_PORT = process.env.SERVER_PORT || 3000;

_logger["default"].info("Starting application env=".concat(process.env.NODE_ENV)); // Loading routes and middlewares (interceptors and handlers)


app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/api', components);
app.use(function (err, req, res, next) {
  res.status(err.httpStatus || 500);

  if (err.payload) {
    res.send(err);
  } else {
    res.send("Internal Server Error");
  }

  next(err);
}); // Bootstraping application

app.listen(SERVER_PORT, function () {
  _logger["default"].info("Server is now running on port ".concat(SERVER_PORT));
}).on("error", _logger["default"].error);
module.exports = app;