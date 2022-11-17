
const router = require('express').Router();

const medicosController = require('../controller/medicosController');

router.get('/', medicosController.listar)
router.post('/', medicosController.crear)

router.get('/:idMedico', medicosController.listarInfo)

module.exports = router