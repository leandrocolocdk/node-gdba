
const { Router } = require('express');

const pacientesRoutes = require('./pacientesRoutes')
const medicosRoutes = require('./medicosRoutes')
const tratamientosRoutes = require('./tratamientosRoutes')

const rutasInit = () => {
    const router = Router();

    router.use("/pacientes", pacientesRoutes);
    router.use("/medicos", medicosRoutes);
    router.use("/tratamientos", tratamientosRoutes);

    return router;
}

module.exports = {rutasInit}