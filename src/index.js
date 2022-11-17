const express = require('express');
const globalConst = require('./const/globalConst');
const routerConfig = require('./routes/routesIndex')
const logger= require('morgan')

const configApi = (app) => {
    app.use(express.json()); // permite que express entienda json
    app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios enviados por post
    app.use(logger('dev'))
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
