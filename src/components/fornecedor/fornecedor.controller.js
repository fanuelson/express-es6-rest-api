const router = require("express").Router();
const fornecedorService = require('./fornecedor.service');

import {BusinessError} from '../../core/error/business-error';

router.get('/', (req, res) => {
    res.status(200).send(fornecedorService.getAll());
})

module.exports = router;