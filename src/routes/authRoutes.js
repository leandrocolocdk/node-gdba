const router = require("express").Router();
const authController = require('../controller/authController');
const validate = require('../middlewares/validate');
const authScheme = require('../middlewares/schemes/auth.scheme');

router.post('/login', validate(authScheme.login), authController.login);
router.post('/signup',
    // validate(authScheme.registrarse), 
    authController.registrarse);

module.exports = router;