const express = require('express');
const app = express();
const pool = require('./src/config/db');

app.use(express.json());
module.exports = app