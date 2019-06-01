const cu = require ('./cursos');

let p = cu.cursos[0];
let i = cu.cursos[1];
let e = cu.cursos[2];

let mostrarInformacion = () => {
    console.log('---------------------------------------------------------------------------------');
    console.log('------------------------------ CURSOS DISPONIBLES -------------------------------');
    console.log('---------------------------------------------------------------------------------');

    setTimeout(function(){
        console.log('| ' + 'ID: ' + p.id + ' || ' + 'Nombre: ' + p.nombre + ' || ' + 'Duración: ' + p.duracion + ' || ' + 'Valor: ' + p.valor + '  |');
        console.log('---------------------------------------------------------------------------------');
    }, 2000);

    setTimeout(function(){
        console.log('| ' + 'ID: ' + i.id + ' || ' + 'Nombre:      ' + i.nombre + '       || ' + 'Duración: ' + i.duracion + ' || ' + 'Valor: ' + i.valor + ' |');
        console.log('---------------------------------------------------------------------------------');
    }, 4000);

    setTimeout(function(){
        console.log('| ' + 'ID: ' + e.id + ' || ' + 'Nombre:   ' + e.nombre + '    || ' + 'Duración: ' + e.duracion + '  || ' + 'Valor: ' + e.valor + '  |');
        console.log('---------------------------------------------------------------------------------');
    }, 6000);
};

mostrarInformacion();

module.exports = {
    p, i, e
};