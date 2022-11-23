
const models = require('../database/models/index')
const errors = require('../const/error');

module.exports = {
    listar: async (req, res,next) => {
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

    crear: async (req, res,next) => {
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


}