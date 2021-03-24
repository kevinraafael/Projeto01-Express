const express = require("express"); // Chamando o Express

const server = express(); // criando o servidor e  retorna um servidor

server.get("/", (req, res) => {
  // Req requisicao e rees resṕonder
  res.send("<h1>home</h1>");
});

server.get("/contato", (req, res) => {
  res.send("<h1>Oi</h1");
});

//rota pro post
server.post("/contato", (req, res) => {
  res.send("Funciona");
});

server.listen(5500, () => {
  console.log("Servidor de pé em  http://127.0.0.1:5500/Servidor/");
  console.log("Pra desligar o nosso servidor: ctrl +c");
}); // Colocar o servidor de pé e espera no minimo 1 parametro , mas utilizaremos  2 parametros a porta local e a função - essa que será executada quando ele estiver de pé
//Se executar assim da um erro ,dessa forma precisamos do npm init.

// O package Json criado pelo npm init , ele cuida de todas as informações
//minímas do nosso projeto e também cuida quais são os projetos que temos dependencia.

//Após isso instalamos o express
//7 19 https://www.youtube.com/watch?v=4sa5Ojk727c

//se abrir o local host assim , apresentara o erro cannot get
//Dessa forma precisamos incluir  algume que responda o get - linha 5
