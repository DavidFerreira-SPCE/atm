const express = require('express');
const app = express();
const pool = require('./config/db.js');
const transacaoRoutes = require('./routes/transacaoRoutes.js');

app.use(express.json());
app.use('/transacoes', transacaoRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Conectado servidor em PORT nº' ${PORT}`)
});