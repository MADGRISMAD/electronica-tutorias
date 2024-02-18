const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    alumnoRegistro,
    alumnoLogin,
} = require("../components/alumno.component");
const upload = multer();
router.post("/", upload.none(), alumnoLogin, async (req, res) => {
    return res.sendStatus(200);
});
router.put(
    "/",
    upload.none(),
    alumnoRegistro,
    alumnoLogin,
    async (req, res) => {
        return res.sendStatus(200);
    }
);

module.exports = router;
