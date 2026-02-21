require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const linkRoutes = require("./routes/linkRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", linkRoutes);

// SERVIR FRONTEND
app.use(express.static(path.join(__dirname, "../../frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.error("Erro ao conectar:", err));

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});