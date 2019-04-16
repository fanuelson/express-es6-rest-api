"use strict";

var router = require("express").Router();

var fornecedorService = require('./fornecedor.service');

var GenericError = require('../../core/error/generic-error');

router.get('/', function (req, res) {
  res.status(200).send(fornecedorService.getAll());
});
module.exports = router;