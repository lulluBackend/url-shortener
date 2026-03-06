const pool = require("../config/db")
const { nanoid } = require("nanoid")

exports.createShortUrl = async (req, res) => {
  try {

    const { originalUrl } = req.body

    if (!originalUrl) {
      return res.status(400).json({
        error: "Coloque um link"
      })
    }

   
    const [existing] = await pool.query(
      "SELECT short_code FROM urls WHERE original_url = ?",
      [originalUrl]
    )

    if (existing.length > 0) {

      const shortUrl = `${req.protocol}://${req.get("host")}/api/${existing[0].short_code}`

      return res.json({
        shortUrl
      })
    }

   
    const shortCode = nanoid(6)

    await pool.query(
      "INSERT INTO urls (original_url, short_code) VALUES (?, ?)",
      [originalUrl, shortCode]
    )

    const shortUrl = `${req.protocol}://${req.get("host")}/api/${shortCode}`

    res.json({
      shortUrl
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: "Erro ao criar URL curta"
    })

  }
}


exports.redirectUrl = async (req, res) => {

  try {

    const { code } = req.params

    const [rows] = await pool.query(
      "SELECT original_url FROM urls WHERE short_code = ?",
      [code]
    )

    if (rows.length === 0) {
      return res.status(404).send("URL não encontrada")
    }

    res.redirect(rows[0].original_url)

  } catch (error) {

    console.error(error)

    res.status(500).send("Erro interno")

  }

}