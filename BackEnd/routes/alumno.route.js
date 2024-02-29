const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    alumnoRegistro,
    alumnoLogin,
} = require("../controllers/alumno.controller");
const upload = multer();
router.post("/login", upload.none(), alumnoLogin);
router.put(
    "/",
    upload.none(),
    alumnoRegistro,
    alumnoLogin
);



module.exports = router;
