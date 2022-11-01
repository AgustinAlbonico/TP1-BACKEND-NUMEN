const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/', routes);

app.listen(port, (error) => {
    if(error){
        console.log("Ocurrio un error")
    } else {
        console.log("Servidor corriendo en el puerto: " + port)
    }
})