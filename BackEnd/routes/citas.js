const express = require("express");
const router = express.Router();
const multer = require("multer");
const { citaRegistro, getCitas, getCitaByAlumno } = require("../components/cita.component");
const upload = multer();

router.get("/", upload.none(), getCitas);
router.get("/:id", upload.none(), getCitaByAlumno);
router.put("/", upload.none(), citaRegistro);

module.exports = router;
