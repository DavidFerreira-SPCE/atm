const pool = require('../config/db.js');


const getByIDTransacao = async (req, res) => {
  const { id } = req.params;

  try {
    const verify = await pool.query('SELECT * FROM transacoes WHERE id = $1', [id]);

    if (verify.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    res.status(200).json(verify.rows[0]);
  } catch (err) {
    console.error('Falha ao listar a transação', err);
    return res.status(500).json({ error: 'Falha ao buscar a transação no banco.' });
  }
};

const getTransacao = async (_,res) => {
        try {
        const list = await pool.query('SELECT * FROM transacoes');
        res.status(200).json(list.rows);
    } catch (err) {
        console.error('Falha em listar as transações', err);
        res.status(500).json({ error: 'Falha ao gerar todas as transações'});
    }
};

const createResumoFin = async(req,res) => {
        try {
            const EntryQuery = await pool.search('') 
            const ExitQuery = await pool.search('')
        } catch (error) {

        }
}

const postTransacao = async (req, res) => {
    const { descricao, valor, tipo } = req.body;
    try {
        const  add  = await pool.query('INSERT INTO transacoes (descricao, valor, tipo) VALUES ($1, $2, $3) RETURNING *',
            [ descricao, valor, tipo ]
        );
        res.status(200).json(add.rows[0])
    } catch (err) {
        console.error('Falha ao registrar as informações', err);
        res.status(500).json({ error: 'Falha em cadastrar a transação' });
    }
};

module.exports = { getByIDTransacao, getTransacao, postTransacao, createResumoFin }