const fs = require('fs');

let listaEstudiantes = [];

const crear = (estudiante) => {
    listar();

    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    }

    let duplicado = listaEstudiantes.find(dato => dato.nombre == estudiante.nombre);

    if (!duplicado){
        listaEstudiantes.push(est);
        guardar();
    } else {
        console.log('El estudiante ' + estudiante.nombre + ' ya se encuentra registrado');
    }
    
}

const listar = () => {
    try {
        listaEstudiantes = JSON.parse(fs.readFileSync('estudiantes.json'));
    } catch(error){
        listaEstudiantes = [];
    }
}

const guardar = () => {

    fs.writeFile('estudiantes.json', JSON.stringify(listaEstudiantes), (err) => {
        if(err) throw (err);
        console.log('Se ha creado el archivo');
    })
}

const promEstudiante = (nombre) => {
    listar();
    
    let est = listaEstudiantes.find(dato => dato.nombre == nombre);

    if(est){
        console.log('El promedio del estudiante es: ' + (est.matematicas+est.ingles+est.programacion)/3);
    } else{
        console.log('El estudaiante no existe');
    }
}

const promEstudiantesGanado = () => {
    listar();
    
    let lista = listaEstudiantes.forEach(est => {
        let promedio = (est.matematicas+est.ingles+est.programacion)/3;

        if(promedio >= 3){
            console.log('El estudiante: ' + est.nombre + ' tiene un promedio de : ' + promedio);
        }
    });
}

module.exports = {
    crear,
    promEstudiante,
    promEstudiantesGanado
}