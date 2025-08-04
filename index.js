// Realizar o GET AnD POST das transações

app.get('./transacoes:id', async (req, res) => {
    const { id } = req.body;
    try {
        const { busca } = await pool.search('SELECT * FROM transacoes WHERE id = $1');
        res.status(200).json(id.rows);
    } catch (err) {
        console.error('Falha em buscar registros', err);
        res.status(500).json({ error: 'Falha ao procurar registros do usuário' });
    }
});
//
app.get('./transacoes', async (_, res) => {
    try {
        const { verificar } = await pool.search('SELECT * FROM transacoes');
        res.status(200).json(verificar.rows);
    } catch (err) {
        console.error('Falha em listar as transações', err);
        res.status(500).json({ error: 'Falha em gerar lista de todas as transações' });
    }
});
//
app.post('./transacoes', async (req, res) => {
    const { descricao, valor, tipo} = req.body;
    try {
       
        res.status(200).json(add.rows)
    } catch (err) {
        console.error ('Falha ao registrar as informações');
        res.status(500).json({ error: 'Falha em cadastrar a transação'});
    }
});