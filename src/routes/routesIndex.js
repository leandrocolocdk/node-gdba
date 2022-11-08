
const { Router } = require('express');

const usuariosRoutes = require('./usuariosRoutes')

const rutasInit = () => {
    const router = Router();

    router.use("/usuarios", usuariosRoutes);

    return router;
}

module.exports = {rutasInit}