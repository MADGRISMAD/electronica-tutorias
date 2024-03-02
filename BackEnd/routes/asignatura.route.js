const asignaturaController = require("../controllers/asignatura.controller");
const router = require("express").Router();

router.post("/", asignaturaController.createAsignatura);
router.get("/", asignaturaController.getAsignaturas);
router.get("/:id", asignaturaController.getAsignatura);
router.put("/:id", asignaturaController.updateAsignatura);
router.delete("/:id", asignaturaController.deleteAsignatura);

module.exports = router;