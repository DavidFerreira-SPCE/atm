const express = require('express')
const router = express.Router();



const { getByIDTransacao, getTransacao, postTransacao } = require('./../controllers/transacaoCTR');

router.get('/',getTransacao)
router.get('/:id',getByIDTransacao)
router.post('/',postTransacao)

module.exports = router