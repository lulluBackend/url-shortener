require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const linkRoutes = require("./routes/linkRoutes");

const app = express();

// ===== MIDDLEWARES =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== ROTAS =====
app.use("/api", linkRoutes);

app.get("/", (req, res) => {
  res.send("API rodando");
});

// ===== CONEXÃO MONGO (APENAS VIA .ENV) =====
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.error("Erro ao conectar:", err));

// ===== START SERVER =====
app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});