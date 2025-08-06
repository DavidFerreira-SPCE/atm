const express = require('express')
const router = express.Router();



const { getByIDTransacao, getTransacao, postTransacao, createResumoFin } = require('./../controllers/transacaoCTR');

router.get('/transacao',getTransacao)
router.get('/transacao/:id',getByIDTransacao)
router.get('/resumo',createResumoFin)
router.post('/transacao',postTransacao)

module.exports = router