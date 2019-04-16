const router = require("express").Router();
const fornecedorController = require('./fornecedor.controller');

router.use('/fornecedor', fornecedorController);

module.exports = router;