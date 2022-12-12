
const models = require('../database/models/index');
const errors = require('../const/error');

module.exports = {
    listar: async (req, res, next) => {
        try {
            // --si soy admin muestro todos
            const { roleId } = res.locals.usuario;
            // console.log(res.locals.usuario)
            // console.log(roleId)
            if (roleId === 1) {
                // console.log("es admin")
                const pacientes = await models.paciente.findAll({
                    include: [{
                        model: models.tratamiento,
                        include: [{
                            model: models.medico
                        }]
                    }]
                });

                res.json({
                    message: "Listado de todos los Pacientes (admin)",
                    data: {
                        pacientes: pacientes
                    }
                })
            } else {
                // si soy medico solo los de ese medico
                const { id } = res.locals.usuario;
                // console.log(">>>>>>>>>>>>> No es admin, es medico",res.locals.usuario)
                console.log(id)
                const idMedico = await models.medico.findOne({
                    where: { usuarioId: id }
                });

                if (idMedico === null) {
                    return res.json({
                        message: "No tiene pacientes",
                    })
                }

                const pacientes = await models.paciente.findOne({
                    where: { usuarioId: id }
                });
                console.log(pacientes)
                // const pacientes = await models.paciente.findAll({
                //     where:{
                //         id: idMedico
                //     },
                //     include: [{
                //         model: models.tratamiento,

                //     }]
                // });

                res.json({
                    message: "Listado de Pacientes",
                    data: {
                        pacientes: pacientes
                    }
                })
            }
        } catch (err) {
            console.log(err)
            return next(err)
        }
    },

    crear: async (req, res, next) => {

        try {
            const medico = await models.medico.findByPk(req.body.medicoId)
            if (!medico) {
                return res.json({
                    message: "No existe un medico con ese ID"
                })
            }
            // const paciente = await models.paciente.create(req.body);
            // console.log(paciente)
            // if (paciente === null){

            // }
            // await models.tratamiento.create({
            //     pacienteId: paciente.id,
            //     medicoId: req.body.medicoId
            // })

            res.json({
                message: "Paciente creado con exito"
            })
        } catch (err) {
            console.log(err)
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const id = req.params.idPaciente;
            // console.log("id >>>>> ",id)
            const paciente = await models.paciente.findOne({
                where: {
                    id: id
                },
                include: [{
                    model: models.tratamiento,
                    include: [{
                        model: models.medico
                    }]
                }]
            })
            if (!paciente) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    // editar: async (req, res, next) => {
    //     try {
    //         const paciente = await models.paciente.findByPk(req.body,req.params.id);
    //         !paciente
    //             ? res.status(200).json({ message: "No existe paciente con ese ID" })
    //             : res.status(200).json(paciente);
    //     } catch (err) {
    //         console.log(err)
    //         next(err);
    //     }
    // },

    // eliminar: async (req, res, next) => {
    //     try {
    //     const id = req.params.id;
    //         const entry = await models.paciente.destroy({
    //             where: {
    //               id,
    //             },
    //           });

    //         if (!entry) {
    //             res.status(200).json({ message: "No existe paciente con ese ID" });
    //         }

    //         await deleteById(id);
    //         res.status(200).json({ message: "Paciente eliminado" });
    //     } catch (err) {
    //         console.log(err)
    //         next(err);
    //     }
    // },

    listaTratamientos: async (req, res, next) => {
        try {
            
            const { id } = res.locals.usuario;
            const paciente = await models.paciente.findOne({
                where: {
                    usuarioId: id
                },
                // include: [{
                //     model: models.tratamiento,
                //     include: [{
                //         model: models.medico
                //     }]
                // }]
            });

            if (!paciente) {
                return next(errors.NoEsPaciente)
            } else {
                const tratamientos = await models.tratamiento.findAll({
                    where: {
                        pacienteId: paciente.id
                    },
                    include: [{
                        model: models.medico,
                    }]
                });

                return res.json({
                    succes: true,
                    message: "Listado de tratamientos para el paciente: " + paciente.id,
                    data: {
                        tratamientos: tratamientos
                    }
                });
            }

        } catch (err) {
            console.log(err)
            next(err)
        }
    },

}