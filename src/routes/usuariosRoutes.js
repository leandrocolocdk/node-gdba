
const router= require('express').Router();

const usuariosController = require('../controller/usuariosController');

router.get('/',usuariosController.prueba)
router.post('/',usuariosController.crear)

router.get('/:idUsuaurio',usuariosController.listarInfo)

module.exports = router