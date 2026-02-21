# 🔗 URL Shortener Fullstack

Projeto fullstack de **encurtador de links** desenvolvido com objetivo de estudo e portfólio.

Permite transformar URLs longas em links curtos compartilháveis e registrar métricas básicas de uso.

---

# 🚀 Tecnologias utilizadas

## Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Nanoid

## Frontend
- HTML
- CSS
- JavaScript

---

# 📦 Funcionalidades

✅ Criar links encurtados

✅ Redirecionar para URL original

✅ Evitar duplicação de URLs

✅ Contador de cliques

✅ Interface simples e responsiva

---

# 🧠 Arquitetura do projeto

```
url-shortener/
 ├─ backend/
 │   ├─ src/
 │   │   ├─ controllers/
 │   │   ├─ models/
 │   │   ├─ routes/
 │   │   └─ server.js
 │   └─ package.json
 │
 ├─ frontend/
 │   ├─ index.html
 │   ├─ style.css
 │   └─ script.js
 │
 └─ README.md
```

---

# ⚙️ Como rodar o projeto localmente

## 1️⃣ Clonar repositório

```
git clone <URL_DO_REPO>
```

---

## 2️⃣ Backend

Entrar na pasta backend:

```
cd backend
```

Instalar dependências:

```
npm install
```

Criar arquivo `.env`:

```
MONGO_URI=sua_string_mongo
```

Rodar servidor:

```
npm run dev
```

Servidor ficará em:

```
http://localhost:5000
```

---

## 3️⃣ Frontend

Abrir pasta frontend e executar com Live Server

ou simplesmente abrir `index.html`.

---

## 🔗 Como testar localmente

1. Clone o repositório  
2. Entre na pasta backend e rode `npm install`  
3. Crie `.env` com MONGO_URI  
4. Rode `npm run dev`  
5. Abra frontend/index.html no navegador  

---

# 🌐 Exemplo de uso

1. Inserir URL
2. Clicar em encurtar
3. Copiar link gerado
4. Acessar link curto para redirecionamento

---

# 🔒 Segurança

- Credenciais protegidas via `.env`
- `.gitignore` configurado
- Validação de dados no backend

---

# 📈 Melhorias futuras

- Autenticação de usuários
- Dashboard de métricas
- QR Code automático
- Expiração de links
- Deploy completo

---

# 👨‍💻 Autor

Projeto desenvolvido para fins educacionais e construção de portfólio.

---

⭐ Se este projeto te ajudou, considere deixar uma estrela no repositório.

