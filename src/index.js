const express = require('express');
const globalConst = require('./const/globalConst');
const routerConfig = require('./routes/routesIndex')

const configApi = (app) => {
    app.use(express.json()); // permite que express entienda json
    app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios enviados por post

    return;
}

const configRouter = (app) => {
    app.use('/api', routerConfig.rutasInit())
}

const init = () => {
    const app = express();
    configApi(app);
    configRouter(app);

    app.listen(globalConst.PORT)
    console.log("Aplicacion se está escuchando en el puerto: "+ globalConst.PORT);
}


init();


// app.get('/', function (req, res) {
//     res.send('Hola Mundo desde express.');
// })

// app.get('/:nombre', function (req, res) {
//     res.send('Hola '+ req.params.nombre);
// })

// app.post('/', function (req, res) {
//     res.send('Hola '+ req.body.nombre);
// })
