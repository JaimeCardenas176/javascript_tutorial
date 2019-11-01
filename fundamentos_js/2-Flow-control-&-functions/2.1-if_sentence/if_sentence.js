//Objeto Persona
var Jaime = {
    nombre:'Jaime',
    apellido: 'Cárdenas',
    edad: 25,
    peso: 73,
    ingeniero: true,
    cantante: false,
    cocinero: false,
    policia:false,
    piloto_de_drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniero) {
        console.log('Ingeniero');
    }else{
        console.log('no Ingeniero');
    }
    if (persona.cantante) {
        console.log('Cantante');
    }
    if (persona.cocinero) {
        console.log('Cocinero');
    }
    if (persona.policia) {
        console.log('Policia');
    }
    if (persona.piloto_de_drone) {
        console.log('Piloto de drones');
    }
}