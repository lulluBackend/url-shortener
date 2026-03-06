# URL Shortener

Projeto Fullstack de encurtador de URLs simples desenvolvido com Node.js, Express e MySQL.
Este projeto foi criado com fins de estudo e para testar umas coisas aí.
Dessa vez não possui ORM.

---

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- mysql2
- dotenv
- nanoid
- HTML + JavaScript (frontend simples)

---

## Estrutura do Projeto
```
url-shortener
│
├── public
│   └── index.html
│   └── script.js
│   └── style.css
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── urlController.js
│   │
│   └── routes
│       └── urlRoutes.js
│
├── .env.example
├── database.sql
├── package.json
├── server.js
└── README.md
```
---

## Instalação

Clone o repositório:

git clone https://github.com/lulluBackend/url-shortener

Entre na pasta do projeto:

cd url-shortener

Instale as dependências:

npm install

---

## Configuração

Crie um arquivo `.env` baseado no `.env.example`.

Exemplo de configuração:

PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=url_shortener

---

## Executando o projeto

Rodar em modo normal:

npm start

Rodar em modo desenvolvimento:

npm run dev

A aplicação estará disponível em:

http://localhost:3000

---

## Funcionalidades

- Encurtamento de URLs
- Redirecionamento para a URL original
- Integração com banco de dados MySQL
- Geração de códigos curtos usando nanoid
