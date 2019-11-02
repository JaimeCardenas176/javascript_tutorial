class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fnc) {
        var nombre = this.nombre;
        var apellido = this.apellido;
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if (fnc) {
            fnc(nombre, apellido);
        }

    }

    soyAlto () {
        return this.altura > 1.80;
    }
}

var jaime = new Persona('Jaime', 'Cárdenas', 1.79);
var carlos = new Persona('Carlos', 'Perez', 1.69);

jaime.saludar();
console.log(jaime.soyAlto());

class Programador extends Persona{
    constructor(nombre, apellido, altura, apodo) {
        super(nombre, apellido, altura);
        this.apodo = apodo;
    }

    saludar(fn) {
        var {nombre, apodo } = this;

        console.log(`Hola me llamo ${nombre} pero me dicen ${apodo} y soy programador`);
        if (fn) {
            fn(nombre, apodo, true);
        }
    }
}

//esta funcion la pasaremos como parametro en el metodo saludar
function responderSaludo (nombre, apellido, esProg) {
    console.log(`Buenos dias ${nombre} ${apellido}`);
    if (esProg) {
        console.log(`anda no sabia que eras programador`);
    }
}

var pepe = new Programador('Pepe','Garcia', 1.89, 'Loko');

console.log(jaime.class);
console.log(pepe.class);

carlos.saludar(responderSaludo);
jaime.saludar();
pepe.saludar(responderSaludo);
console.log(pepe.soyAlto());