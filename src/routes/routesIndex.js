
const { Router } = require('express');

const usuariosRoutes = require('./usuariosRoutes')
const pacientesRoutes = require('./pacientesRoutes')
const medicosRoutes = require('./medicosRoutes')
const tratamientosRoutes = require('./tratamientosRoutes')
const authRoutes = require('./authRoutes')

const decodeJWT = require("../middlewares/decodeJWT");

const rutasInit = () => {
    const router = Router();

    router.use("/usuarios",
        decodeJWT,
        usuariosRoutes);
    router.use("/pacientes",
        decodeJWT,
        pacientesRoutes);
    router.use("/medicos",
        decodeJWT,
        medicosRoutes);
    router.use("/tratamientos",
        decodeJWT,
        tratamientosRoutes);

    return router;
}

const rutasAuth = () => {

    const router = Router();
    router.use('/auth', authRoutes);

    return router
}

module.exports = { rutasInit, rutasAuth }