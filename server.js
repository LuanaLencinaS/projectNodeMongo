const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});


// Conexão ao banco de dados
mongoose.connect(process.env.DATABASE, {  useNewUrlParser: true, useUnifiedTopology: true });
//indica ao mongo que pode usar ecmas6
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.error("Error:"+error.message);
})

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log("Servidor rodando na porta: " + server.address().port);
});