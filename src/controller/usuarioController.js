// FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

const models = require("../database/models/index")
const errors = require("../const/error")

module.exports = {

    listar: async (req, res, next) => {
        try {
            const users = await models.usuario.findAll({
                attributes:{exclude:["password"]}
            })

            res.json({
                success: true,
                data: {
                    usuarios: users
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            // console.log(req.params.idUsuario)
            const user = await models.usuario.findOne({
                where: {
                    id: req.params.idUsuario
                },attributes:{exclude:["password"]}
            },
            )
            if (!user) return next(errors.UsuarioInexistente)

            res.json({
                success: true,
                data: {
                    usuario: user
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const user = await models.usuario.create(req.body)

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    subirArchivo: async (req, res, next) => {
        try {
            // si soy admin deberia poder cambiar a todos...

            const { id } = res.locals.usuario;
            // console.log(res.locals.usuario)
            //verifico si existe el usuario, solo subo al que tengo en el token.

            const usuario = await models.usuario.findOne({
                where: {
                    id: id
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente)


            // busco el archivo del usuario
            const ar = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: id,
                    nombre: req.body.nombre
                }
            })
            if (!ar) { // si el archivo no existe, lo creo

                const archivo = await models.archivo_usuario.create({
                    nombre: req.body.nombre, //nombre para identificar el archivo por si un usuario tiene varios archivos
                    file: req.file ? req.file.filename : null, //en el campo file se guarda el nombre del archivo
                    original_name: req.file ? req.file.originalname : null, //en el campo original_name se guarda el nombre original del archivo
                    usuarioId: id
                })

            }


            res.json({
                success: true,
                data: {
                    message: "archivo cargado"
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    descargarArchivo: async (req, res, next) => {
        try {

            // verifico si existe el usuario
            const usuario = await models.usuario.findOne({
                where: {
                    id: req.body.usuarioId
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente)

            // verifico si existe el archivo
            const archivo = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })
            if (!archivo) return next(errors.ArchivoInexistente)


            res.download('uploads/archivos-usuarios/' + archivo.file, archivo.original_name) //descarga el archivo

        } catch (err) {
            return next(err)
        }
    }


}