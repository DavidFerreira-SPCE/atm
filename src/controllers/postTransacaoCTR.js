const pool = require('../config/db');

const incluirTransacao = async (req, res) => {
    const { descricao, valor, tipo } = req.params;
    try {
        const { add } = await pool.query('INSERT INTO transacoes VALUES descricao = $1, valor = $2, tipo = $3 RETURNING *',
            [ descricao, valor, tipo ]
        );
        res.status(200).json(add.rows)
    } catch (err) {
        console.error('Falha ao registrar as informações', err);
        res.status(500).json({ error: 'Falha em cadastrar a transação' });
    }
};