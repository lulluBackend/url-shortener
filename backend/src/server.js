require('dotenv').config();

const linkRoutes = require("./routes/linkRoutes");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", linkRoutes);

mongoose.connect("mongodb+srv://lulluPk_db_user:LDA7sTrAGxnaP5MK@cluster0.2uqh5ft.mongodb.net/urlshortener?retryWrites=true&w=majority")
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API rodando");
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.error("Erro ao conectar:", err));