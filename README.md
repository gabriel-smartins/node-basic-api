# 🚀 API em Node.js (sem bibliotecas externas)

Este projeto é uma **API construída apenas com módulos nativos do Node.js**, sem o uso de bibliotecas externas.  
O objetivo principal foi **fixar os conceitos fundamentais de Node.js e JavaScript no backend**, entendendo como o Node funciona por baixo dos panos sem depender de frameworks.

---

## 📚 Tecnologias Utilizadas
- [Node.js](https://nodejs.org) (módulos nativos: `http`, `fs`, `url`, entre outros)

---

## ⚙️ Requisitos
Antes de começar, você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/en/) (versão **18.x** ou superior)  
- [Git](https://git-scm.com/) (opcional, apenas para clonar o repositório)

---

## ▶️ Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git

2. Entre no diretório do projeto:
   ```bash
   cd node-basic-api
3. Inicie o servidor
   ```bash
   npm run dev
   
## 📡 Rotas da API
Usuários
- GET /users → Lista todos os usuários
- POST /users → Cria um novo usuário
- PUT /users/:id → Atualiza um usuário pelo ID
- DELETE /users/:id → Remove um usuário pelo ID

## 📝 Observações
- Este projeto foi feito para fins de estudo e prática.
- Não foram utilizadas bibliotecas externas para reforçar os conceitos básicos de Node.js.
- Os dados podem estar sendo salvos em arquivo .json utilizando o módulo fs para simular um banco de dados.
- Se trata de um projeto mais antigo, mas como por se tratar de um marco importante no aprendizado, e mostra conceitos fundamentais do desenvolvimento em Node, decidi por versionar.
