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

var peso_total = 0;

for (var i=0; i < personas.length; i++) {
	peso_total_1 += personas[i].peso;
}

const reducer = (pesoT, {peso}) => pesoT + peso;

const pesoTotal_1 = personas.reduce(reducer, 0);

personas.forEach( (p) => {
	peso_total_2 += p.peso;
})

console.log(peso_total);
console.log(peso_total_1);
console.log(peso_total_2);
