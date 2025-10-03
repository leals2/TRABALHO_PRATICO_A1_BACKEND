const express = require("express");
const app = express();
//---------------------------------------------------------------------------------------------------------------
//intermediários:
const cors = require("cors");
//---------------------------------------------------------------------------------------------------------------
//habilitando o browser para mandar uma requisição:
app.use(cors());
//---------------------------------------------------------------------------------------------------------------
// habilita receber json como corpo de requisição:
app.use(express.json());
//---------------------------------------------------------------------------------------------------------------
app.use((req, res, next) => {
  console.log("---### LOG da Requisição ###---");
  console.log("TIME: ", new Date().toLocaleString());
  console.log("METODO: ", res.method);
  console.log("ROTA: ", res.url);
  next();
});
//---------------------------------------------------------------------------------------------------------------
// Roteadores:
const Tabela_Contato = require("./routes/tabela_contatos");
app.use(Tabela_Contato);

const Tabela_Empresa = require("./routes/tabela_empresas");
app.use(Tabela_Empresa);
//---------------------------------------------------------------------------------------------------------------
// executa:
app.listen(3000, () => {
  console.log("Api rodando em http://localhost:3000");
});
