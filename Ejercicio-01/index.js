const express = require('express');
const dotEnv = require('dotenv');
const routes = require('./routes');

dotEnv.config();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT, (error) => {
    if(error){
        console.log("Ocurrio un error")
    } else {
        console.log("Servidor corriendo en el puerto: " + process.env.PORT)
    }
})