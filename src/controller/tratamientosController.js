module.exports = {
    listar: async (req, res) => {
        try {
            res.json({
                message: "Listado de Tratamientos"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
        try {
            res.json({
                message: "Tratamientos creado con exito"
            })
        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: async (req, res) => {
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