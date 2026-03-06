require("dotenv").config()

const express = require("express")
const cors = require("cors")
const path = require("path")

const urlRoutes = require("./src/routes/urlRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", urlRoutes)

app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})