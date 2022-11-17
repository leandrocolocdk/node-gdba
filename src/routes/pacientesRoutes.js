
const router = require('express').Router();

const pacientesController = require('../controller/pacientesController');


router.get('/', pacientesController.listar)
router.post('/', pacientesController.crear)

router.get('/:idPaciente', pacientesController.listarInfo)

module.exports = router