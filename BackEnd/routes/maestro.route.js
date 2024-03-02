const MaestroController = require('../controllers/maestro.controller');
const router = require('express').Router();

router.post('/', MaestroController.createMaestro);
router.get('/', MaestroController.getMaestros);
router.get('/:id', MaestroController.getMaestro);
router.put('/:id', MaestroController.updateMaestro);
router.delete('/:id', MaestroController.deleteMaestro);

module.exports = router;
