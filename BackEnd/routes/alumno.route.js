const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    alumnoRegistro,
    alumnoLogin,
} = require("../components/alumno.component");
const upload = multer();
router.post("/", upload.none(), alumnoLogin);
router.put(
    "/",
    upload.none(),
    alumnoRegistro,
    alumnoLogin
);

module.exports = router;
