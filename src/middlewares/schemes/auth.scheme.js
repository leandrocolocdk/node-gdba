const Joi = require('joi');

let login = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required(),
})

let registrarse = Joi.object({
    nombre: Joi.string().optional(),
    apellido: Joi.string().optional(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required(),
    dni: Joi.number().optional(),
    especialidad: Joi.string().optional(),
    tiempo_trabajando: Joi.string().optional(),
})

module.exports = {
    login, registrarse
}