
const models = require('../database/models/index')
const errors = require('../const/error');

module.exports = {
    listar: async (req, res, next) => {
        try {
            const medicos = await models.medico.findAll({
                include: [{
                    model: models.tratamiento,
                    include: [{
                        model: models.paciente
                    }]
                }]
            });

            res.json({
                succes: true,
                message: "Listado de Medicos",
                data: {
                    medicos: medicos
                }
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const medico = await models.medico.create(req.body)

            res.json({
                succes: true,
                message: "Medico creado con exito",
                data: {
                    id: medico.id
                }
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const id = req.params.idMedico;
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico,

                },
                include: [{
                    model: models.tratamiento,
                    include: [{
                        model: models.paciente
                    }]
                }]
            });

            if (!medico) return next(errors.MedicoInexistente)

            res.json({
                succes: true,
                message: "Informacion del Médico " + id,
                data: {
                    medico: medico
                }
            })
        } catch (err) {
            console.log(err)
        }
    },

    // Listo los tratamientos del medico logueado
    listaTratamientos: async (req, res, next) => {

        try {
            const { id } = res.locals.usuario;
            // console.log(res.locals.usuario)
            // console.log(">>>>>>>>>>>>>>")

            // busco si es medico
            const medico = await models.medico.findOne({
                where: {
                    usuarioId: id
                },
            });
            // console.log(medico)
            // console.log(">>>>>>>>>>>>>>")

            if (!medico) {
                return next(errors.NoEsMedico)
            } else {
                const tratamientos = await models.tratamiento.findAll({
                    where: {
                        medicoId: medico.id
                    },
                    include: [{
                        model: models.paciente,
                        include: [{
                            model: models.usuario
                        }]
                    }]
                });

                return res.json({
                    succes: true,
                    message: "Listado de tratamientos para el medico: " + medico.id,
                    data: {
                        tratamientos: tratamientos
                    }
                });
            }

            // const tratamientos = await models.medico.findAll({
            //     where:{
            //         id: id
            //     },
            //     include: [{
            //         model: models.tratamiento,
            //         include: [{
            //             model: models.paciente
            //         }]
            //     }]
            // });
            // if (!tratamientos) return next(errors.TratamientoInexistente)

            // res.json({
            //     succes: true,
            //     message: "Listado de tratamientos para el medico: " + id,
            //     data: {
            //         tratamientos: tratamientos
            //     }
            // })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

}