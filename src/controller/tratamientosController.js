const models = require('../database/models/index');
const errors = require('../const/error');

module.exports = {
    listar: async (req, res,next) => {
        try {
            const tratamientos = await models.tratamiento.findAll()

            res.json({
                success: true,
                data: {
                    message: "Listado de Tratamientos",
                    tratamientos: tratamientos
                }
            })

        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    crear: async (req, res,next) => {
        try {

            const tratamiento = await models.tratamiento.create({
                pacienteId: req.body.pacienteId,
                medicoId: req.body.medicoId
            })

            res.json({
                success: true,
                data: {
                    message: "Tratamientos creado con exito",
                    tratamiento: tratamiento
                }
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    listarInfo: async (req, res,next) => {
        try {
            const id = req.params.idTratamiento;
            const tratamiento = await models.tratamiento.findOne({
                where:{ id: id}
            })
            if (!tratamiento) return next(errors.TratamientoInexistente);

            res.json({
                success: true,
                data: {
                    message: "Tratamiento " + id,
                    tratamiento: tratamiento
                }
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    listarXMedicos: (req, res,next) => {
        try {
            res.json({
                message: "Tratamientos para el medico"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    listarXPaciente: (req, res,next) => {
        try {
            res.json({
                message: "Tratamientos para el usuario"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

}