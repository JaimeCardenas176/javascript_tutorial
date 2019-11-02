//esta funcion se va a ejecutar cuando creemos una persona (prototipo)
function Persona(nombre, apellido, altura) {
    
    // attributo objeto que se esta creando = variable que se recibe por parametro
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

}

//creando una funcion para el prototipo persona
Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.ssoyAlto = function () {
    return this.altura > 1.80;
}


var jaime = new Persona('Jaime', 'Cárdenas', 1.79);

var pepe = new Persona('Pepe', 'Garcia', 1.89);
var carlos = new Persona('Carlos', 'Perez',  1.69);

jaime.saludar();
console.log(jaime.soyAlto());

//creando otro prototipo con herencia

//funcion que hace la herencia (deprecated)
function herencia (prototipoHijo, prototipoPadre) {
    var fn = function () {}
        fn.prototype = prototipoPadre.prototype;
        prototipoHijo.prototype = new fn;
        prototipoHijo.prototype.constructor = prototipoHijo;

}

//aqui creamos el neuvo prototipo
function Programador (nombre, apodo) {
    this.nombre=nombre;
    this.apodo=apodo;
}
herencia(Programador, Persona);

Programador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} pero me dicen ${this.apodo} y soy programador`);
}

var pepe = new Programador('Pepe', 'Loko', 1.89);

console.log(pepe.saludar());

console.log(jaime.prototype);
console.log(pepe.prototype);
console.log(pepe.soyAlto());
