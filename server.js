const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/*
* RUTAS
*/

const users = require('./routes/userRoutes');

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true,
}));


app.use(cors());
app.disable('x-powered-by');
app.set('port', port);
/*
* LLAMANDO A LAS RUTAS
*/
users(app);

server.listen(port, '192.168.1.27' || 'localhost', function() {
    console.log('Aplicación de NodeJs' + port + 'iniciada...')
});

module.exports = {
    app: app,
    server: server
} //Es para poder usar estas variables en otros archivos 