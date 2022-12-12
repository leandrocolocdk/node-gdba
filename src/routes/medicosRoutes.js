
const router = require('express').Router();

const medicosController = require('../controller/medicosController');
const validate = require('../middlewares/validate');
const medicoScheme = require('../middlewares/schemes/medico.scheme')

const decodeJWT = require("../middlewares/decodeJWT");

router.get('/', medicosController.listar);
router.post('/', validate(medicoScheme.crearMedico), decodeJWT, medicosController.crear);


router.get('/tratamientos', decodeJWT, medicosController.listaTratamientos);

router.get('/:idMedico', medicosController.listarInfo);


module.exports = router;