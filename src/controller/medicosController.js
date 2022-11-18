
const models = require('../database/models/index')

module.exports = {
    listar: async (req, res) => {
        try {
            const medicos = await models.medico.findAll();

            res.json({
                succes: true,
                message: "Listado de Medicos",
                data: {
                    medicos: medicos
                }
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
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
        }
    },

    listarInfo: async (req, res) => {
        try {
            const id = req.params.idMedico;
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                }
            });
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