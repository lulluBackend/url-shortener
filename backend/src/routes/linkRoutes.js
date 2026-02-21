const express = require("express");
const router = express.Router();

const controller = require("../controllers/linkController");

router.post("/shorten", controller.shorten);
router.get("/r/:code", controller.redirect);

module.exports = router;