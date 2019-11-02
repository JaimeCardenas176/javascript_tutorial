//esta funcion se va a ejecutar cuando creemos una persona (prototipo)
function Persona(nombre, apellido, altura) {
    //this va a hacer referencia al objeto que se acaba de construit
    
    // attributo objeto que se esta creando = variable que se recibe por parametro
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    // cunado llamamos a la funcion con la palabra 'new' implicitamente hace return this
    //return this;

    //tambien se pueden crear funciones dentro de la funcion constructora
    this.soyAlto = function soyAlto() {
        return this.altura > 1.80;
    }
}

//creando una funcion para el prototipo persona
Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

//la palabra new seguida de un prototipo crea un objeto del tipo del prototipo dado (objeto)
var jaime = new Persona('Jaime', 'Cárdenas', 1.79);

var pepe = new Persona('Pepe', 'Garcia', 1.69);
var carlos = new Persona('Carlos', 'Perez',  1.89);

jaime.saludar();
console.log(jaime.soyAlto());