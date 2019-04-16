const router = require("express").Router();
const fornecedorService = require('./fornecedor.service');

router.get('/', (req, res) => {
    res.status(200).send(fornecedorService.getAll());
})

module.exports = router;