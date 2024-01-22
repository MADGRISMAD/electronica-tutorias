const express = require("express");
const router = express.Router();
const { alumnoLogin } = require("../components/login");
const multer = require("multer");
const upload = multer();
router.post("/login", upload.none(), alumnoLogin, async (req, res) => {
    res.redirect("/alumnos");
});

module.exports = router;
