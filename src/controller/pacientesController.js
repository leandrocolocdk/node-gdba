
const models = require('../database/models/index');
const errors = require('../const/error');

module.exports = {
    listar: async (req, res, next) => {
        try {
            const pacientes = await models.paciente.findAll({
                include: [{
                    model: models.tratamiento,
                    include: [{
                        model: models.medico
                    }]
                }]
            });

            res.json({
                message: "Listado de Pacientes",
                data: {
                    pacientes: pacientes
                }
            })
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
            const paciente = await models.paciente.create(req.body);

            await models.tratamiento.create({
                pacienteId: paciente.id,
                medicoId: req.body.medicoId
            })

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

    editar: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findByPk(req.body,req.params.id);
            !paciente
                ? res.status(200).json({ message: "No existe paciente con ese ID" })
                : res.status(200).json(paciente);
        } catch (err) {
            console.log(err)
            next(err);
        }
    },

    eliminar: async (req, res, next) => {
        try {
        const id = req.params.id;
            const entry = await models.paciente.destroy({
                where: {
                  id,
                },
              });

            if (!entry) {
                res.status(200).json({ message: "No existe paciente con ese ID" });
            }

            await deleteById(id);
            res.status(200).json({ message: "Paciente eliminado" });
        } catch (err) {
            console.log(err)
            next(err);
        }
    },

}