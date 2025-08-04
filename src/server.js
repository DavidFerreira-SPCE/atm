const app = require('./app')

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Conectado servidor em PORT nº' ${PORT}`)
});