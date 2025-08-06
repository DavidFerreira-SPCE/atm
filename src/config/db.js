const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'atm',
    password: 'wcc@2023',
    port: 5432,
});

pool.connect()
    .then(() => console.log('Connectado ao Banco...'))
    .catch(err => console.error('Algo deu errado, tente novamente...', err));

module.exports = pool; 