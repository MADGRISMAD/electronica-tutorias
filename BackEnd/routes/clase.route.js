const ClaseController = require('../controllers/clase.controller');
const router = require('express').Router();

router.post('/', ClaseController.createClase);
router.get('/', ClaseController.getClases);
router.get('/:id', ClaseController.getClase);
router.put('/:id', ClaseController.updateClase);
router.delete('/:id', ClaseController.deleteClase);

module.exports = router;