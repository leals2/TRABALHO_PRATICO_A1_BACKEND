# 📇 API de Gerenciamento de Contatos e Empresas
API desenvolvida em Node.js para cadastro, atualização, listagem e exclusão de contatos e empresas.

## 🚀 Tecnologias utilizadas
- Node.js;
- Express;
- CORS;
- Nodemon.

## 📥 Instalação e execução

### 1. Clone este repositório:
```bash
git clone <https://github.com/Sostines17/TRABALHO_PRATICO_A1_BACKEND.git>
```
### 2. Instale as dependências:
npm install express cors
npm install --save-dev nodemon
3. No arquivo package.json, em "scripts", configure:
"scripts": {
  "start": "nodemon index.js"
}
### 4. Execute o projeto:
npm start


## 📌 Endpoints

### CONTATOS:

`GET /contatos` → Lista todos os contatos
`GET /contatos/{id}` → Busca contato pelo ID
`POST /contatos` → Cria um novo contato
    Request:`{
    "nome": "Contato Novo",
    "cpf": "999.999.999.99",
    "telefone": "61999999999",
    "email": "contato.novo@email.com"
    }
    `Response:`{
    "message": "Contato cadastrado com sucesso!",
    "novoContato": {
        "id": 1759513518194,
        "nome": "Contato Novo",
        "cpf": "999.999.999.99",
        "email": "contato.novo@email.com",
        "telefone": "61999999999"
    }
    }`
`PUT /contatos/{id}` → Atualiza um contato existente
`DELETE /contatos/{id}` → Remove um contato

### EMPRESAS:
`GET /empresas` → Lista todas as empresas
`GET /empresas/{id}` → Busca empresa pelo ID
`POST /empresas` → Cria uma nova empresa
    Request:`{
    "nome": "Nova Empresa",
    "telefone": "61992299229",
    "email": "empresa@novaempresa.com",
    "cnpj": "55.123.456/0002-03"
    }`
    Response:`{
  "message": "Empresa cadastrada com sucesso!",
  "novaEmpresa": {
        "id": 1759514918847,
        "nome": "Nova Empresa",
        "telefone": "61992299229",
        "email": "empresa@novaempresa.com",
        "cnpj": "55.123.456/0002-03"
    }
    }`
`PUT /empresas/{id}` → Atualiza uma empresa existente
`DELETE /empresas/{id}` → Remove uma empresa


👥 Integrantes:

Sóstines da Silva – Montagem das estruturas, correções e implementação da autenticação

Yasmim Leal – Documentação dos endpoints

João Pedro de Sena – Construção das tabelas
