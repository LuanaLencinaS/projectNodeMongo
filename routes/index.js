const express = require('express');

//rotas
const router = express.Router();

router.get('/', (req, res) => {
  let obj = {
    'pageTitle': 'Titulo teste'
  };

  res.render('home', obj);
})

router.get('/teste', (req, res) => {
  let obj = {
    'nome': req.query.nome,
    'idade': req.query.idade,
    'mostrar': true,
    'filmes': [
      { nome: 'Aladin', nota: 9 },
      { nome: 'Enrolados', nota: 10 },
    ],
    interesses: ['Node', 'JS', 'CSS', 'Vue', 'PHP'],
    testeHTML: '<strong>with ❤️</strong>'
  };

  res.render('testeMST', obj);
})

router.get('/teste2', (req, res) => {
  let nome = req.query.nome;
  let sobrenome = req.query.sobrenome;

  let resposta = {
    nomeCompleto: nome + ' ' +  sobrenome
  }

  //pega tudo dos parametros e envia como reposta em formato json
  res.json(req.query);
  //res.json(resposta);

  //res.send('Olá ' + nome +'. Você tem ' + idade + ' anos.');

  //GET: req.query
  //POST: req.body
  // PARAMETROS DA URL: req.params

  //Envio: res.send ou res.json
});

router.get('/posts/:slug', (req, res) => {
  let slug = req.params.slug;

  //titulo: Seja Bem Vindo!
  //slug: seja-bem-vindo

  res.send(`Slug do post: ${slug}`);
})

router.get('/sobre', (req, res) => {
  res.send('Página Sobre');
});

module.exports = router;