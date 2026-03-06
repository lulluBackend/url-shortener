const mysql = require("mysql2/promise")
require("dotenv").config()

async function initializeDatabase() {

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  })

  await connection.query(`
    CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}
  `)

  await connection.query(`
    USE ${process.env.DB_NAME}
  `)

  await connection.query(`
    CREATE TABLE IF NOT EXISTS urls (
      id INT AUTO_INCREMENT PRIMARY KEY,
      original_url TEXT NOT NULL,
      short_code VARCHAR(10) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  await connection.end()

}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
})

initializeDatabase()
  .then(() => console.log("Banco de dados pronto"))
  .catch(err => console.error("Erro ao inicializar banco:", err))

module.exports = pool