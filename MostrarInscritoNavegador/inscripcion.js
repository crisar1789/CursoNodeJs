const cu = require ('./cursos');
const fs = require ('fs');

const opciones = {
    id_curso: {
        demand: true,
        alias: 'i'
    },
    nombre_interesado: {
        demand: true,
        alias: 'n'
    },
    numero_documento: {
        demand: true,
        alias: 'c'
    }
}

function inscribir(interesado) {

    let ident = interesado.id_curso;

    let curso = cu.cursos.find(dato =>  dato.id == ident);

    let texto = '';

    if(curso != undefined){
        texto = 'ID Curso: ' + curso.id + ' || ' + 'Nombre: ' + curso.nombre + ' || ' + 'Duración: ' + curso.duracion + ' || ' + 'Valor: ' + curso.valor + ' || ' + 'Nombre estudiante: ' + interesado.nombre_interesado + ' || ' + 'Cédula:' + interesado.numero_documento;
    }else{
        texto = 'El curso no existe';
    }

    return texto;
}

module.exports = {
    inscribir
}

