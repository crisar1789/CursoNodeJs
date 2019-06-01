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

const argv = require('yargs')
            .command('inscribir', 'Inscribir un estudiante a un curso', opciones)
            .argv

module.exports = {
    argv
};