module.exports = {
    listar: (req, res) => {
        try {
            res.json({
                message: "Listado de Pacientes"
            })
        } catch (err) {
            console.log(err)
        }
    },

    crear: (req, res) => {

    },

    listarInfo: (req, res) => {
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