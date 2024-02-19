const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    citaRegistro,
    getCitas,
    getCitaByAlumno,
    updateCita,
} = require("../components/cita.component");
const verifySession = require("../middleware/verifySession");
const { verifyAlumno, verifyMaestro } = require("../middleware/verifyType");
const upload = multer();

router.get("/", verifySession, verifyMaestro, upload.none(), getCitas);
router.get("/:id", verifySession, verifyAlumno, upload.none(), getCitaByAlumno);
router.post("/:id", verifySession, verifyAlumno, upload.none(), updateCita);
router.put("/", verifySession, verifyAlumno, upload.none(), citaRegistro);

module.exports = router;
