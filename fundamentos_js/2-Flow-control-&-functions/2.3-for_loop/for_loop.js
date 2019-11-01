var Jaime = {
    nombre:'Jaime',
    apellido: 'Cárdenas',
    edad: 25,
    peso: 73
}

console.log(`Al inicio del año ${Jaime.nombre} pesa ${Jaime.peso}Kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

const aumentoDePeso = persona => {
    persona.peso +=INCREMENTO_PESO; 
}

const perdidaDePeso = persona => {
    persona.peso -=INCREMENTO_PESO; 
}

for(var i = 1; i <= DIAS_DEL_AÑO; i++) {
    
    //valor aleatorio (entre 0 y 1)
    var random = Math.random();

    if(random < 0.25) {
        aumentoDePeso(Jaime);
    } else if(random < 0.5) {
        perdidaDePeso(Jaime);
    }
}

console.log(`Al final del año ${Jaime.nombre} pesa ${Jaime.peso.toFixed(2)}Kg`);