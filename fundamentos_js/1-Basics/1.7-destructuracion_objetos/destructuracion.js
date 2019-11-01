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
