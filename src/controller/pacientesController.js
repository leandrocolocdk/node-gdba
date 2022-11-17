module.exports = {
    listar: async (req, res) => {
        try {
            res.json({
                message: "Listado de Pacientes"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {

    },

    listarInfo: async (req, res) => {
        const id = req.params.idPaciente;
        try {
            res.json({
                message: "Informacion del Paciente " + id
            })
        } catch (err) {
            console.log(err)
        }
    },

}