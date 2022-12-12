const models = require('../database/models/index');
const errors = require('../const/error');

const bcrypt = require('bcrypt');
const signJWT = require('../middlewares/signJWT');

module.exports = {
    login: async (req, res, next) => {
        try {

            const user = await models.usuario.findOne({
                where: { email: req.body.email }
            })
            // paciente 
            // medico 

            var passCoincide = false;
            if (user) {
                passCoincide = bcrypt.compareSync(req.body.password, user.password);
            }

            if (!user || !passCoincide) {
                return next(errors.CredencialesInvalidas)
            }

            res.json({
                success: true,
                data: {
                    token: signJWT(user),
                    id: user.id,
                    roleId: user.roleId // este es medio al dope
                }
            })

        } catch (err) {
            return next(err)
        }

    },

    registrarse: async (req, res, next) => {
        try {
            req.body.password = bcrypt.hashSync(req.body.password, 10);

            const user = await models.usuario.create(req.body)

            // si es medico
            if (req.body.especialidad || req.body.tiempo_trabajando) {
                const { horas_trabajando, especialidad } = req.body;
                const idMedico = await models.medico.create({
                    horas_trabajando,
                    especialidad,
                    usuarioId: user.id
                })

                return res.json({
                    success: true,
                    data: {
                        // token: signJWT(user),
                        idUser: user.id,
                        idMedico: idMedico
                    }
                })
            }

            // si es paciente
            const paciente = await models.paciente.create({
                obra_social: req.body.obra_social,
                usuarioId: user.id
            })

            return res.json({
                success: true,
                data: {
                    // token: signJWT(user),
                    idUsuario: user.id,
                    paciente: paciente
                }
            })

        } catch (err) {
            return next(err)
        }

    }
}