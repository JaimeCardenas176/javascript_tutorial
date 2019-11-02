var jaime = {
	nombre: 'Jaime',
	apellido: 'Cárdenas',
	altura: 1.72
}

var pablo = {
	nombre: 'Pablo',
	apellido: 'Cárdenas',
	altura: 1.69
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

//recorriendo un array con un for
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(i+1+`. ${persona.nombre} mide ${persona.altura} metros`);
}

//otra manera de iterar un array
personas.forEach( (p) => console.log(`${p.nombre} mide ${p.altura} mts`) ); 