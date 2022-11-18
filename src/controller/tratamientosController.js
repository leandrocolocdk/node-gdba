module.exports = {
    listar: (req, res) => {
        try {
            res.json({
                message: "Listado de Tratamientos"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: (req, res) => {
        try {
            res.json({
                message: "Tratamientos creado con exito"
            })
        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: (req, res) => {
        const id = req.params.idTratamiento;
        try {
            res.json({
                message: "Informacion del Tratamiento " + id
            })
        } catch (err) {
            console.log(err)
        }
    },

}