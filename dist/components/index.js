"use strict";

var router = require("express").Router();

var fornecedor = require('./fornecedor');

router.use(fornecedor);
module.exports = router;