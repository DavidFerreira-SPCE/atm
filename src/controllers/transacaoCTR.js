const pool = require('../config/db.js');


const getByIDTransacao = async (req, res) => {
  const { id } = req.params;

  try {
    // 1. A desestruturação correta busca por 'rows' e 'rowCount' no resultado da query.
    // O objeto retornado por pool.query não possui uma propriedade chamada 'verify'.
    const { rows, rowCount } = await pool.query('SELECT * FROM transacoes WHERE id = $1', [id]);

    // 2. É uma boa prática verificar se alguma linha foi retornada.
    // Se rowCount for 0, significa que não há transação com o ID fornecido.
    if (rowCount === 0) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    }

    // 3. Como buscamos por um ID único, retornamos apenas o primeiro objeto do array 'rows',
    // em vez de retornar um array com um único elemento.
    const transacao = rows[0];
    return res.status(200).json(transacao);

  } catch (err) {
    // Melhorando o log de erro para incluir o ID que falhou, facilitando a depuração.
    console.error(`Falha ao buscar a transação com ID ${id}:`, err);

    // Mantendo a resposta de erro genérica para o cliente por segurança.
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
};
const getTransacao = async (_, res) => {
  try {
    const list = await pool.query('SELECT * FROM transacoes');
    res.status(200).json(list.rows);
  } catch (err) {
    console.error('Falha em listar as transações', err);
    res.status(500).json({ error: 'Falha ao gerar todas as transações' });
  }
};

const createResumoFin = async (req, res) => {
  try {
    const entResult = await pool.query("SELECT SUM(valor) as total_entrada FROM transacoes WHERE tipo = 'Entrada'");
    const totalEntrada = entResult.rows[0].total_entrada || 0; // Se o valor for null, define como 0 !!

    const saiResult = await pool.query("SELECT SUM(valor) as total_saida FROM transacoes WHERE tipo = 'Saida'");
    const totalSaida = saiResult.rows[0].total_saida || 0; // Se o valor for null, define como 0 !!

    const saldo = totalEntrada - totalSaida;

    res.status(200).json({
      total_entrada: totalEntrada,
      total_saida: totalSaida,
      saldo: saldo
    });
  } catch (err) {
    console.error('Erro em somar as contas ', err);
    res.status(500).json({ error: 'Falha na requisição' });
  }
};

const postTransacao = async (req, res) => {
  const { descricao, valor, tipo } = req.body;
  try {
    const add = await pool.query('INSERT INTO transacoes (descricao, valor, tipo) VALUES ($1, $2, $3) RETURNING *',
      [descricao, valor, tipo]
    );
    res.status(200).json(add.rows[0])
  } catch (err) {
    console.error('Falha ao registrar as informações', err);
    res.status(500).json({ error: 'Falha em cadastrar a transação' });
  }
};

module.exports = { getByIDTransacao, getTransacao, postTransacao, createResumoFin }




