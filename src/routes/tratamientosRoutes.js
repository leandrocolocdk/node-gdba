const router = require('express').Router();

const tratamientosController = require('../controller/tratamientosController');

router.get('/', tratamientosController.listar)
router.post('/', tratamientosController.crear)

router.get('/:idTratamiento', tratamientosController.listarInfo)

module.exports = router