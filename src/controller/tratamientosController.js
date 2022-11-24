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

    crear: async (req, res,next) => {
        try {
            const paciente = await models.tratamiento.create(req.body);

            await models.tratamiento.create({
                pacienteId: paciente.id,
                medicoId: req.body.medicoId
            })

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