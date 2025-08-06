
#   º Uma Api de conta bancária º

Esta API possui como finalidade realizar a movimentação de valores de uma conta bancária do usuário, informando benefícios (entradas) e despesas (saidas) realizadas pelo mesmo, como também retornando o saldo atual da conta.


## Documentação da API com todas as funções

#### Criar um novo registro bancário
```http
  POST /transacao
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `descricao` | `string` | **Obrigatório**. Campo reservado para informar qual a origem do valor no campo a seguir. |
| `valor` | `int` | **Obrigatório**. Campo dedicado apenas para informar a quantidade. |
| `tipo` | `string` | **Obrigatório**. Campo para informar se é Beneficio (Entrada) ou Despesa (Saida). |

#### Procurar um registro na conta do usuário

```http
  GET /transacao/:{id}
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório**. Campo para informar o número do registro. |


#### Listar todos os registros na conta do usuário
```http
  GET /transacao
```

#### Somar todos os movimentos e visualizar o saldo
```http
  GET /resumo
```
## Tecnologias usadas

**Back-end:** 
* Node.js: Um ambiente que permite executar código JavaScript do lado do servidor.
* Express: O Framework que foi instalado para fazer a inserção dos dados com a API.
* PostgreSQL: É o banco de dados que foi utilizado para esta API, faz a conexão com a biblioteca Pg.



# Instalação
# Como realizar o procedimento de uso

Realize o clone desse projeto
```
git clone https://github.com/DavidFerreira-SPCE/atm.git
```
Faça a navegação até o diretório
```bash
cd atm
```

Instale todas as dependências do projeto
```
npm install
```

Inicie o Servidor
```
npm start
```