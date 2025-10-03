const express = require("express");
const router = express.Router();

let empresa = [
  {
    id: 1,
    nome: "Tech Solutions",
    telefone: "1133224455",
    email: "empresa@techsolutions.com",
    cnpj: "12.345.678/0001-95",
  },
  {
    id: 2,
    nome: "Agro Mais",
    telefone: "1133112299",
    email: "suporte@agromais.com",
    cnpj: "98.765.432/0001-09",
  },
  {
    id: 3,
    nome: "Educa Brasil",
    telefone: "1144556677",
    email: "info@educabrasil.com",
    cnpj: "45.987.321/0001-10",
  },
  {
    id: 4,
    nome: "Saúde & Vida",
    telefone: "1155667788",
    email: "empresa@saudevida.com",
    cnpj: "56.123.789/0001-04",
  },
  {
    id: 5,
    nome: "ConstruPrime",
    telefone: "1166778899",
    email: "comercial@construprime.com",
    cnpj: "32.198.654/0001-70",
  },
];

//---------------------------------------------------------------------------------------------------------------

// --- Rota POST: Cadastrar Nova Empresa ---
router.post("/empresa", (req, res, next) => {
  const { nome, cnpj, email, telefone } = req.body;

  // Validação de campos obrigatórios
  if (!nome || !cnpj || !email || !telefone) {
    return res
      .status(400)
      .json({ error: "nome, cnpj, email, telefone são obrigatorios!" });
  }

  // Validação de CNPJ único
  const empresaExistente = empresas.find((empresa) => empresa.cnpj == cnpj);
  if (empresaExistente) {
    return res.status(409).json({ erro: "CNPJ já cadastrado!" });
  }

  // Criação do NOVA EMPRESA
  const novaEmpresa = {
    id: Date.now(), // Usando timestamp como ID provisório
    nome,
    cnpj,
    email,
    telefone,
  };

  empresas.push(novaEmpresa);
  res
    .status(201)
    .json({ message: "empresa cadastrado com sucesso!", novoempresa });
});

//---------------------------------------------------------------------------------------------------------------

// --- Rota GET: Listar Todas as Empresas ---
router.get("/empresas", (req, res, next) => {
  res.json(empresas);
});

//---------------------------------------------------------------------------------------------------------------

// --- Rota GET: Buscar Empresa pelo ID ---
router.get("/empresas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const empresa = empresas.find((empresa) => empresa.id == idRecebido);

  if (!empresa) {
    return res.status(404).json({ error: "Empresa não encontrada" });
  }

  res.json(empresa);
});

//---------------------------------------------------------------------------------------------------------------

// --- Rota PUT: Atualizar Empresa pelo ID ---
router.put("/emoresas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  // Incluímos 'telefone' para permitir a edição
  const { nome, email, telefone } = req.body;

  // Validação de campos obrigatórios para atualização
  if (!nome || !email || !telefone) {
    return res
      .status(400)
      .json({ error: "nome, email, telefone são obrigatorios" });
  }

  // Encontrar a Empresa
  const empresa = empresas.find((empresa) => empresa.id == idRecebido);
  if (!empresa) {
    return res.status(404).json({ error: "Empresa não encontrado!" });
  }

  // Atualização dos dados
  empresa.nome = nome;
  empresa.email = email;
  empresa.telefone = telefone; // Adicionado o campo telefone

  res.json({ message: "Dados da Empresa atualizados com sucesso!" });
});

//---------------------------------------------------------------------------------------------------------------

// --- Rota DELETE: Excluir Empresa por ID ---
router.delete("/empresas/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const empresa = empresas.find((empresa) => empresa.id == idRecebido);

  if (!empresa) {
    return res.status(404).json({ error: "Empresa Não encontrada!" });
  }

  // Sobrescrever a lista, removendo o aluno com o id recebido
  empresas = empresas.filter((empresa) => empresa.id != idRecebido);

  res.json({ message: "empresa excluído com sucesso" });
});

module.exports = router;