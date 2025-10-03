const express = require("express");
const router = express.Router();

let contatos = [
  {
    id: 1,
    nome: "Ana Souza",
    cpf: "012.345.678.01",
    telefone: "11987654321",
    email: "ana.souza@email.com",
  },
  {
    id: 2,
    nome: "João Pereira",
    cpf: "012.345.678.02",
    telefone: "21988776655",
    email: "joao.pereira@email.com",
  },
  {
    id: 3,
    nome: "Maria Oliveira",
    cpf: "012.345.678.03",
    telefone: "31991234567",
    email: "maria.oliveira@email.com",
  },
  {
    id: 4,
    nome: "Lucas Fernandes",
    cpf: "012.345.678.04",
    telefone: "11993335555",
    email: "lucas.fernandes@email.com",
  },
  {
    id: 5,
    nome: "Camila Santos",
    cpf: "012.345.678.05",
    telefone: "41997776644",
    email: "camila.santos@email.com",
  },
];

//----------------------------------------------------------------------------------------------------------
// --- Rota POST: Cadastrar Novo Contato ---
router.post("/contatos", (req, res, next) => {
  const { nome, cpf, telefone, email } = req.body;

  // Validação de campos obrigatórios
  if (!nome || !cpf || !telefone || !email) {
    return res
      .status(400)
      .json({ error: "nome, cpf, telefone, email são obrigatorios!" });
  }

  // Validação de CPF único
  const contato = contatos.find((contato) => contato.cpf == cpf);
  if (contato) {
    return res.status(409).json({ erro: "CPF já cadastrado!" });
  }

  // Criação do novo Contato
  const novoContato = {
    id: Date.now(),
    nome,
    cpf,
    email,
    telefone,
  };

  contatos.push(novoContato);
  res
    .status(201)
    .json({ message: "Contato cadastrado com sucesso!", novoContato });
});

//---------------------------------------------------------------------------------------------------------

// --- Rota GET: Listar Todos os Contatos ---
router.get("/contatos", (req, res, next) => {
  res.json(contatos);
});

//---------------------------------------------------------------------------------------------------------

// --- Rota GET: Buscar Contato por ID ---
router.get("/contatos/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const contato = contatos.find((c) => c.id == idRecebido);

  if (!contato) {
    return res.status(404).json({ error: "Contato não encontrado" });
  }

  res.json(contato);
});

//---------------------------------------------------------------------------------------------------------

// --- Rota PUT: Atualizar Contato por ID ---
router.put("/contatos/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  // Incluímos 'telefone' para permitir a edição
  const { nome, email, telefone } = req.body;

  // Validação de campos obrigatórios para atualização
  if (!nome || !email || !telefone) {
    return res
      .status(400)
      .json({ error: "nome, email, telefone são obrigatorios" });
  }

  // Encontrar o contato
  const contato = contatos.find((contato) => contato.id == idRecebido);
  if (!contato) {
    return res.status(404).json({ error: "Contato não encontrado!" });
  }

  // Atualização dos dados
  contato.nome = nome;
  contato.email = email;
  contato.telefone = telefone; // Adicionado o campo telefone

  res.json({ message: "Dados do contato atualizados com sucesso!" });
});

//--------------------------------------------------------------------------------------------------------

// --- Rota DELETE: Excluir Contato por ID ---
router.delete("/contatos/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const contato = contatos.find((contato) => contato.id == idRecebido);

  if (!contato) {
    return res.status(404).json({ error: "Contato Não encontrado!" });
  }

  // Sobrescrever a lista, removendo o Contato com o id recebido
  contatos = contatos.filter((contato) => contato.id != idRecebido);

  res.json({ message: "Contato excluído com sucesso" });
});

module.exports = router;
