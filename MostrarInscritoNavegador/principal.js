const {argv} = require('./datos.js');
const express = require('express');
const app = express();
const funciones = require('./inscripcion.js');

let texto = '';

if(argv._[0] == 'inscribir'){
    app.listen(3000);
    texto = funciones.inscribir(argv);
    app.get('/', function(req, res) {
        res.send(texto)
    });
}else{
    const inscribir = require ('./informacion_cursos');
}

