var jaime = {
	nombre: 'Jaime',
	apellido: 'Cárdenas',
	altura: 1.64
}

var pablo = {
	nombre: 'Pablo',
	apellido: 'Cárdenas',
	altura: 1.61
}

var paco = {
	nombre: 'Paco',
	apellido: 'Rodriguez',
	altura: 1.75
}

var manuel = {
	nombre: 'Manuel',
	apellido: 'Gonzalez',
	altura: 1.80
}

var juan = {
	nombre: 'Juan',
	apellido: 'Romero',
	altura: 1.77
}

var miguel = {
	nombre: 'Miguel',
	apellido: 'Castro',
	altura: 1.81
}

var personas = [jaime, pablo, paco, manuel, juan, miguel];

console.log(personas);

const esAlta = (persona) => {
	return persona.altura >= 1.80;
}

const personasAltas = personas.filter(esAlta);

const personasBajas = personas.filter( (persona) => {
	return persona.altura < 1.65;
});
