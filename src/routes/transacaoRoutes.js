const express = require('express')
const router = express.router();

const { getByIDTransacao, getTransacao, postTransacao } = require('./../controllers/transacaoCTR');

const { route } = require('./../app')

router.get('/',getTransacao)
router.get('/:id',getByIDTransacao)
router.post('/',postTransacao)

module.exports = router