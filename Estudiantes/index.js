const {argv} = require('./datos.js');
const funciones = require('./funciones.js');

switch (argv._[0]) {
    case 'crear':
        funciones.crear(argv);
        break;

    case 'promEst':
        funciones.promEstudiante(argv.nombre);
        break;

    case 'promMasTres':
        funciones.promEstudiantesGanado();
        break;

    default:
        console.log('Debe ingresr una operación válida');
        break;
}