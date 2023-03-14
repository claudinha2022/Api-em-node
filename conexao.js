const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123',

database: 'apiclaudia'
  
});

conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o MySQL: ', err);
  } else {
    console.log('Conexão estabelecida com o MySQL!');
  }
});

module.exports = conexao;
