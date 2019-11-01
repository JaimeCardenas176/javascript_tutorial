var nombre = 'Jaime', apellido='Cárdenas'

var nombreMayus = nombre.toUpperCase();
var nombreMinus = nombre.toLowerCase();

var primeraLetra = nombre.charAt(0);
var longitudNombre = nombre.length;

var nombreCompleto = nombre + ' ' + apellido;

//interpolacion de strings
var nombreCompleto2 = `${nombre} ${appellido}`;

var str = nombre.substr(1,2);