module.exports = {
    listar: async (req, res) => {

    },

    crear: async (req, res) => {

    },

    listarInfo: async (req, res) => {

    },

    prueba: async (req, res) => {
        try {
            console.log('Ejecutando prueba')
            res.json({
                message: "Hola desde prueba controller"
            })
        } catch (err){
            console.log(err)
        }
    },

}