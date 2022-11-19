
const router = require('express').Router();

const medicosController = require('../controller/medicosController');
const validate = require('../middlewares/validate');
const medicoScheme= require('../middlewares/schemes/medico.scheme')

router.get('/', medicosController.listar)
router.post('/', validate(medicoScheme.crearMedico),medicosController.crear)

router.get('/:idMedico',  medicosController.listarInfo)

module.exports = router;