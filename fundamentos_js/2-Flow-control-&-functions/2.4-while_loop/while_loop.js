var Jaime = {
    nombre:'Jaime',
    apellido: 'Cárdenas',
    edad: 25,
    peso: 73
}

console.log(`Al inicio del reto ${Jaime.nombre} pesa ${Jaime.peso}Kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

const aumentoDePeso = persona => { persona.peso +=INCREMENTO_PESO; }

const perdidaDePeso = persona => { persona.peso -=INCREMENTO_PESO; }

const comeBastante = () => Math.random() < 0.3;

const haceDeporte = () => Math.random() < 0.4;

const PESO_IDEAL = Jaime.peso - 3;

var dias = 0;

while (Jaime.peso > PESO_IDEAL ) {

    if (comeBastante()) {
        aumentoDePeso(Jaime);
    }
    if (haceDeporte()) {
        perdidaDePeso(Jaime);
    }
    dias +=1;
}

console.log(`Pasaron ${dias} hasta que ${Jaime.nombre} adelgazo 3kg;`)