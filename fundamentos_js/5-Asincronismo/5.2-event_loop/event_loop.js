/**
 * javascript no esta pensado para hacer varias cosas al mismo tiempo
 * no es multihilo (como por ejemplo java) por muchos nucleos que tenga
 * tu ordenador solo ejecuta una tarea a la vez.
 * Pero puede delegar la ejecucion de ciertas funciones a otro procesos
 * (esto se llama event loop)
 * La manera en la que los programas se ejecutan en js es la siguiente:
 * 
 * Se ejecuta el programa principall y cuando se encuentra una
 * funcion de callback lo almacena en un lugar llamado *callstack*
 * donde va almacenando las funciones segun el orden de ejecución de
 * nuestro programa
 * 
 * cuando termina de ejecutar la funcion se saca
 * 
 * un callback es una funcion que se ejecutara cuando
 * vuelva la respuesta (del servidor...)
 * entonces pasa a la *cola de tareas*
 * 
 * cuando termina de ejecutarse el programa principal, entonces
 * js va a buscar las funciones que tiene en la cola de tareas, hay
 * que tener cuidado de no generar aqui uncuello de botella por que
 * podriamos bloquear el event loop.
 */




//Este orden de ejecucion seria el normal
console.log('orden de ejecucion normal');

console.log('a');

console.log('b');

console.log('c');

console.log('=========================');

//hacemos uso de setTimeout()
console.log('usando setTimeout() para imprimir la letra b');

console.log('a');

//setTimeout recibe una funcion de callback, y un tiempo de espera en ms.
setTimeout(() => console.log('b'), 2000);

console.log('c');

console.log('=========================');

console.log('setTimeout 0');

console.log('a');

//setTimeout recibe una funcion de callback, y un tiempo de espera en ms.
setTimeout(() => console.log('b'), 0);

console.log('c');

console.log('=========================');

console.log('bloqueando el event loop');

setTimeout(() => console.log('d'), 2000);
/**
 * 2000 ms es el delay minimo, pero estamos bloqueando el event loop
 * con el bucle de 1000000 de iteraciones entonces tardara mas en ejecutarse
 */
for (var i = 0; i < 1000000; i++) {

}
