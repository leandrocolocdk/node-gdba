const Joi = require('joi');

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.number().optional(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
})

module.exports = {
    crearUsuario
}