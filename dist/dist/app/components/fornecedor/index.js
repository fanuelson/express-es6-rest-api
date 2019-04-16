"use strict";

var router = require("express").Router();

var fornecedorController = require('./fornecedor.controller');

router.use('/fornecedor', fornecedorController);
module.exports = router;