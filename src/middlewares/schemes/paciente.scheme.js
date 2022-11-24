const Joi = require('joi');

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.number().optional(),
    email: Joi.string().email({ tlds: { allow: false } }).optional(),
})

module.exports = {
    crearPaciente
}