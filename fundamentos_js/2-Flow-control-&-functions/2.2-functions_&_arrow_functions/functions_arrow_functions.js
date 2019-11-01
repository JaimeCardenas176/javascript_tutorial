//Objeto Persona
var Jaime = {
    nombre:'Jaime',
    apellido: 'Cárdenas',
    edad: 25,
    peso: 73,
}

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad2 = function(persona) {
    return persona.edad >=MAYORIA_DE_EDAD;
}

const esMayorDeEdad3 = persona => persona.edad >=MAYORIA_DE_EDAD;

const esMayorDeEdad4 = ({edad}) => {
    edad >=MAYORIA_DE_EDAD;
}

function esMayorDeEdad(persona) {
    return persona.edad >=MAYORIA_DE_EDAD;
}

function imprimirMayoriaDeEdad(persona) {
    if(esMayorDeEdad3(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

const permitirAcceso = persona => !esMayorDeEdad(persona) ? console.log('Acceso denegado') : console.log('puedes pasar');