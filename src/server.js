const express = require('express');
const app = express();
const pool = require('./config/db.js');

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Conectado servidor em PORT nº' ${PORT}`)
});