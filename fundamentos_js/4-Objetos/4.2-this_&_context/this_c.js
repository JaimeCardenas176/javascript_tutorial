//esta funcion se va a ejecutar cuando creemos una persona (prototipo)
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    //tambien se pueden crear funciones dentro de la funcion constructora
    this.soyAlto = function soyAlto() {
        return this.altura > 1.80;
    }
}

/**
 * Esto no va a funcionar por que dentro de las funciones
 * flecha el contexto del puntero 'this' cambia en este
 * caso *'this'* toma el valor del entorno de fuera de la
 * función que es el navegador (donde se ejecuta js)
 * entonces *'this'* es equivalente a *'window'* que no tiene
 * attributos 'nombre' ni 'apellido'
 */
Persona.prototype.saludar =  () => console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);

/**
 * Esta si va a funcionar correctamente por que el contexto
 * del puntero *'this'* en este caso es el *'prototipo Persona'*
 * que si tiene atributos que coincidan con los que estám buscandose
 */
Persona.prototype.saludar2 = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} 2`);
}

//la palabra new seguida de un prototipo crea un objeto del tipo del prototipo dado (objeto)
var jaime = new Persona('Jaime', 'Cárdenas', 1.79);

var pepe = new Persona('Pepe', 'Garcia', 1.69);
var carlos = new Persona('Carlos', 'Perez',  1.89);

jaime.saludar();
console.log(jaime.soyAlto());
jaime.saludar2();