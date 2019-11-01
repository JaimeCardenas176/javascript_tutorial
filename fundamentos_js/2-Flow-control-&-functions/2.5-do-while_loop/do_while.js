var contador = 0;

const llueve = () => Math.random() < 0.25;

/**
 * La diferencia entre el boocle while y el do-while
 * es que el codigo encerrado dentro del do-while se
 * ejecuta al menos una vez, despues comprueba la 
 * condicion y si se cumple vuelve a ejecutarse
 * tantas veces sea necesario hasta que dicha
 * condicion no se satisfaga.
 */
do {
    contador++;
    //comprueba si no llueve y si no aumenta el contador
} while (!llueve);

console.log(`fui a ver si llovía ${contador} veces`);