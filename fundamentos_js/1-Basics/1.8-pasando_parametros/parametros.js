var Jaime = {
    nombre: 'Jaime',
    apellido: 'Cárdenas',
    edad: 25,
    peso: 73
};

var Pablo = {
    nombre: 'Pablo',
    apellido: 'Cárdenas',
    edad: 23,
    peso: 60
};

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(Jaime);
imprimirNombreEnMayusculas(Pablo);
/**
 * Los objetos que se pasan por parametros
 * se pasan como referencia
 * esto es, si los modificamos dentro del
 * cuerpo de una funcion su valor se va a ver
 * modificado fuera de dicha funcion
 * 
 * @param {*} persona 
 */
function cumpleaños(persona) {
    persona.edad += 1;
}

//hay que pasarle Jaime.edad
function cumpleaños2(edad) {
    edad += 1;
}

//final
function cumpleaños3(persona) {
    return{
        ...persona,
        edad: persona.edad += 1
    };
}
