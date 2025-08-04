const express = require('express');
const app = express();
const pool = require('./config/db');

app.use(express.json());
module.exports = app