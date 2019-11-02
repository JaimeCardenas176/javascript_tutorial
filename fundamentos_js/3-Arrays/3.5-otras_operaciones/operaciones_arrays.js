var jaime = {
	nombre: 'Jaime',
	apellido: 'Cárdenas',
	altura: 1.64,
	peso: 70
}

var pablo = {
	nombre: 'Pablo',
	apellido: 'Cárdenas',
	altura: 1.61,
	peso: 62
}

var paco = {
	nombre: 'Paco',
	apellido: 'Rodriguez',
	altura: 1.75,
	peso: 75
}

var manuel = {
	nombre: 'Manuel',
	apellido: 'Gonzalez',
	altura: 1.80,
	peso: 80
}

var juan = {
	nombre: 'Juan',
	apellido: 'Romero',
	altura: 1.77,
	peso: 78
}

var miguel = {
	nombre: 'Miguel',
	apellido: 'Castro',
	altura: 1.81,
	peso: 83
}

var personas = [jaime, pablo, paco, manuel, juan, miguel];

console.log('Array inicial :')
console.log(personas);

//hasta ahora hemos visto los metodos filter, map y reduce

//1.Encontrar un objeto en un Array - devuelve un objeto

const objetoEncontrado = personas.find((persona) => {
	return persona.name = 'Jaime';
})

console.log('encontrando un objeto concreto: '+objetoEncontrado.nombre);

//2.Existe un objeto tal que.. (condiciones) - devuelve booleano
const contieneGenteAlta = personas.some((persona) => {
	return persona.altura > 1.80;
})

console.log('tiene alguien una altura mayor de 1.80? '+contieneGenteAlta);


//3.Todos los objetos cumplen que.. (condiciones) - devuelve booleano
const esGentePesada = personas.every((persona) => {
	return persona.peso >= 62;
})

console.log('pesan todos al menos 62kg o mas? '+esGentePesada);

//4.La lista contiene este objeto? - devuelve booleano
const estaPaco = personas.includes(paco);

console.log('está Paco en el array? '+estaPaco);

// 5.Añadir y eliminar elementos (al final) de la lista

//inicial
console.log(personas);

//esto eliminara a miguel (por ser el ultimo) de la lista y devuelve el objeto eliminado
console.log(personas.pop());

//y esto volvera a añadirlo a la lista
personas.push(miguel);

console.log(personas);


//mas metodos interesantes para los arrays son shift(), unshift(), indexOf(), join(), concat(), sort(), slice() o splice()