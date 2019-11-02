class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto () {
        return this.altura > 1.80;
    }
}

var jaime = new Persona('Jaime', 'Cárdenas', 1.79);
var pepe = new Persona('Pepe', 'Garcia', 1.89);
var carlos = new Persona('Carlos', 'Perez', 1.69);

jaime.saludar();
console.log(jaime.soyAlto());

//creando otro prototipo con herencia
//aqui creamos el neuvo prototipo
class Programador extends Persona{
    constructor(nombre, apellido, altura, apodo) {
        super(nombre, apellido, altura);
        this.apodo = apodo;
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} pero me dicen ${this.apodo} y soy programador`);
    }
}

var pepe = new Programador('Pepe','Garcia', 1.89, 'Loko');

console.log(jaime.class);
console.log(pepe.class);
console.log(pepe.soyAlto());

