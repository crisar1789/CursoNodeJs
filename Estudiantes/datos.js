const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const opciones = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const promEst = {
    nombre
}

const argv = require('yargs')
            .command('crear','Crear un estudiante', opciones)
            .command('promEst','Buscar un estudiante y mostrar su promedio', promEst)
            .command('promEst','Muestra los estudiantes que tiene promedio de 3 o más')
            .argv

module.exports = {
    argv
};