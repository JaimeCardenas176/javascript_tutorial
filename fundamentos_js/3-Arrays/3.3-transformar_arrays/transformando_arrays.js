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

console.log(personas);

const imc = (persona) => {
	var imc = (persona.peso/(persona.altura*persona.altura)).toFixed(2);
	return persona = {
		...persona,
		imc: imc
	};
}

const alturaCms = persona => ({
	...persona,
	altura: persona.altura*100
})

const personasIMC = personas.map(imc);

console.log(personasIMC);
console.log(personas);
