const Joi = require('joi');

let crearTratamiento = Joi.object({
    medicoId: Joi.number().required(),
    pacienteId: Joi.number().required(),
})

module.exports = {
    crearTratamiento
}