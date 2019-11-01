var x = 4, y = '4';

/**
 *  ==
 * toma los dos valores que estamos
 * comparando a un mismo tipo de dato
 * y entonces checkea los valores
 */
console.log(x==y);
//devolverta true


/**
 * ===
 * hace comparacion de tipo y ademas
 * del valor, solo devuelve true sii
 * las dos variables tiene el mismo
 * tipo y el mismo valor
 */
console.log(x===y);
//devolvera false

var Jaime = {
    nombre:'Jaime'
};

var otraPersona = {
    nombre:'Jaime'
};

/**
 * Aqui estamos comparando objetos (no valores primitivos)
 * entonces lo que hace JS es preguntar por la referencia
 * en memoria a la variable que estamos utilizando
 * 
 */
console.log(Jaime == otraPersona);
//esto devuelve false


/**
 * aqui pasa exactamente lo mismo que en el caso anterior
 */
console.log(Jaime === otraPersona);
//esto devuelve false


var otroJaime = Jaime;

console.log(Jaime == otraJaime)

/**
 * aqui si va a devolver true por que otroJaime
 * contiene como valor la referencia en memoria
 * a Jaime, que es el objeto que le hemos pasado
 * (apunta a la misma posicion de memoria)
 */
console.log(Jaime === otraJaime);
//devuelve true

/**
 * aqui estamos creando explicitamente
 * un nuevo objeto aunque estemos
 * desglosando los attributos de Jaime
 */
var otraPersona2 = {
    ...Jaime
};


console.log(Jaime == otraPersona2);


console.log(Jaime === otraPersona2);

console.log(Jaime);
console.log(otroJaime);
console.log(otraPersona);

otroJaime.nombre = 'Pedro';


console.log(Jaime);
console.log(otroJaime);
console.log(otraPersona);

otraPersona.nombre = 'Pablo'

console.log(Jaime);
console.log(otroJaime);
console.log(otraPersona);


