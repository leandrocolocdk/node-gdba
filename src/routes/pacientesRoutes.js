
const router = require('express').Router();

const pacientesController = require('../controller/pacientesController');
const validate = require('../middlewares/validate');
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')

router.get('/', pacientesController.listar)
router.post('/', 
// validate(pacienteScheme.crearPaciente),
 pacientesController.crear)

router.get('/:idPaciente', pacientesController.listarInfo)
// router.put('/:idPaciente', pacientesController.editar)
// router.delete('/:idPaciente', pacientesController.eliminar)

module.exports = router