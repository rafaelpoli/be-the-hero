const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

/*
* ROTA / RECURSO
* 
* Métodos HTTP
* GET: Buscar/Listar informações no backend
* POST: Envia/Cria informações no backend
* PUT: Altera informações no backend
* DELETE: Deleta informações no Backend
*
*
* TIPOS DE PARÂMETROS
* 
* Query Params: Parâmetros nomeados enviado na rota após "?" (Filtros, Paginação) (index.js?nome=Rafael)
* Route Params: Parâmetros utilizados para identificar recursos (/users/:id)
* Request Body: Corpo da requisição, utilizado para criar/alterar recursos
*
*/

/*
* SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
* nonSQL: MongoDB, CouchDB, etc
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users).select('*').where()  -> Nesse caso utiliza JS para manipular o BD
* 
*
* Exemplos de uso:
* const params = request.query //Obtem os dados dos query params. (?nome=Rafael)
* const routeparams = request.params //Obtem o dado do id (users/1) sendo id=1
* const bodyparams = request.body // Enviado dados em JSON pelo POST para modificar recursos
*
*/



