const pool = require('../config/db.js');

const getByIDTransacao = async (req,res) => {
     const { id } = req.body;
    try {
        const { verify } = await pool.search('SELECT * FROM transacoes WHERE id = $1');
        res.status(200).json(verify.rows);
} catch (err) {
        console.error('Falha em listar as transações deste usuário', err);
        res.status(500).json({ error: 'Falha em buscar o usuário no banco'})
    }
};

const getTransacao = async (_,res) => {
        try {
        const { list } = await pool.search('SELECT * FROM transacoeS');
        res.status(200).json(list.rows);
    } catch (err) {
        console.error('Falha em listar as transações', err);
        res.status(500).json({ error: 'Falha ao gerar todas as transações'});
    }
};

const postTransacao = async (req, res) => {
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