const router = require('express').Router();

const tratamientosController = require('../controller/tratamientosController');
const validate = require('../middlewares/validate');
const tratamientoScheme = require('../middlewares/schemes/tratamiento.scheme')
const { isAdmin } = require('../middlewares/auth'); // isAdmin depende de decodeJWT
const decodeJWT = require("../middlewares/decodeJWT");

router.get('/',decodeJWT, isAdmin, tratamientosController.listar)
router.post('/', decodeJWT, 
// isAdmin,
 validate(tratamientoScheme.crearTratamiento), tratamientosController.crear)

router.get('/:idTratamiento',decodeJWT, isAdmin, tratamientosController.listarInfo)

module.exports = router;