const router = require("express").Router();
const fornecedor = require('./fornecedor');

router.use(fornecedor);

module.exports = router;