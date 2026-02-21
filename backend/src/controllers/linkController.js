const Link = require("../models/Link");
const { nanoid } = require("nanoid");

// criar link curto
exports.shorten = async (req, res) => {
  try {
    console.log("=== DEBUG SHORTEN ===");
    console.log("BODY RECEBIDO:", req.body);

    const url = req.body?.url;

    if (!url) {
      console.log("URL NÃO VEIO NO BODY");
      return res.status(400).json({ error: "URL obrigatória" });
    }

    // ⭐ 1. verificar se já existe
    const existing = await Link.findOne({ originalUrl: url });

    if (existing) {
      console.log("URL JÁ EXISTE:", existing.shortCode);

      return res.json({
        shortUrl: `http://127.0.0.1:5000/api/r/${existing.shortCode}`
      });
    }

    // ⭐ 2. criar novo código apenas se necessário
    const code = nanoid(6);
    console.log("CÓDIGO GERADO:", code);

    const link = await Link.create({
      originalUrl: url,
      shortCode: code
    });

    console.log("LINK SALVO:", link);

    res.json({
      shortUrl: `http://127.0.0.1:5000/api/r/${link.shortCode}`
    });

  } catch (err) {
    console.log("ERRO SHORTEN:", err);
    res.status(500).json({ error: "Erro interno" });
  }
};


// redirecionar
exports.redirect = async (req, res) => {
  try {
    const { code } = req.params;

    console.log("=== DEBUG REDIRECT ===");
    console.log("CODE:", code);

    const link = await Link.findOne({ shortCode: code });

    if (!link) {
      console.log("LINK NÃO ENCONTRADO");
      return res.status(404).send("Link não encontrado");
    }

    link.clicks++;
    await link.save();

    console.log("REDIRECIONANDO PARA:", link.originalUrl);

    res.redirect(link.originalUrl);

  } catch (err) {
    console.log("ERRO REDIRECT:", err);
    res.status(500).send("Erro");
  }
};