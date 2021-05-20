const express = require('express');
const mustache = require('mustache-express');
const router = require('./routes/index');
const helpers = require('./helpers');
const errorHandler = require('./handlers/errorHandler');

//middleware


//Configurações
const app = express();

// Informações padrão
app.use((req, res, next) => {
  //cria variáveis globais
  res.locals.h = helpers;
  res.locals.teste = '123';
  next();
});

//permite requisições post
app.use(express.json());

app.use('/', router);

//middleware handler 404
app.use(errorHandler.notFound);

app.engine('mustache', mustache(__dirname+'/views/includes', '.mustache'));
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

module.exports = app;