const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    alumnoRegistro,
    alumnoLogin,
} = require("../components/alumno.component");
    const { getCitasByAlumno } = require("../services/cita.service");
const upload = multer();
router.post("/", upload.none(), alumnoLogin);
router.put(
    "/",
    upload.none(),
    alumnoRegistro,
    alumnoLogin
);

router.get("/",  async function (req,res) {
        // Get the alumnos that has a cita in 30 minutes
        alumnos = getCitasByAlumno();
    
        res.send(alumnos);
    });

module.exports = router;
