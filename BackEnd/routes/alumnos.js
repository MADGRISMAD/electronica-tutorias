const express = require("express");
const router = express.Router();
const { alumnoLogin } = require("../components/login");
const multer = require("multer");
const { alumnoRegistro } = require("../components/alumnoRegistro");
const upload = multer();
router.post("/login", upload.none(), alumnoLogin, async (req, res) => {
    res.sendStatus(200);
});
router.post("/registro", upload.none(), alumnoRegistro, alumnoLogin,  async (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
