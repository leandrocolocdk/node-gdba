module.exports = {
    listar: async (req, res) => {
        try {
            res.json({
                message: "Listado de Medicos"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
        try {
            res.json({
                message: "Medico creado con exito"
            })
        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: async (req, res) => {
        const id = req.params.idMedico;
        try {
            res.json({
                message: "Informacion del Médico" + id
            })
        } catch (err) {
            console.log(err)
        }
    },


}