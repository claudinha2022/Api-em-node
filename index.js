const express = require('express');
const app = express();
const conexao = require('./conexao');

app.get('/nomes/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT nome, telefone, email FROM nomes WHERE id = ${id}`;
  conexao.query(query, (err, results) => {
    if (err) {
      throw err
    } else {
      res.send(results[0]);
    }

});
});
console.log(conexao)
app.listen(3000, () => {
  console.log('API rodando na porta 3000!');
});