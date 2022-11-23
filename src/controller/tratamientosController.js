module.exports = {
    listar: (req, res,next) => {
        try {
            res.json({
                message: "Listado de Tratamientos"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    crear: (req, res,next) => {
        try {
            res.json({
                message: "Tratamientos creado con exito"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

    listarInfo: (req, res,next) => {
        const id = req.params.idTratamiento;
        try {
            res.json({
                message: "Informacion del Tratamiento " + id
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    },

}