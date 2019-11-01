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
    var n = persona.nombre.toUpperCase();
    console.log(n);
}

function imprimirNombreEnMayusculas2({nombre}) {
    var n = nombre.toUpperCase();
    console.log(n);
}

imprimirNombreEnMayusculas(Jaime);
imprimirNombreEnMayusculas(Pablo);
