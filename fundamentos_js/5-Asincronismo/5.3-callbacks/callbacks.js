const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;

$.get( lukeUrl, opts, function ( data ) {
    /**
     * arguments es una palabra reservada, devuelve
     * un array con los parametros de la funcion
     */
    console.log(arguments);
    console.log(`Hola yo soy ${data.name}`);
})


//===========
const onPeopleResponse = (persona) => {
    console.log(`Hola yo soy ${persona.name}`);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get( url, opts, onPeopleResponse);
}

/**
 * aqui vamos a ver como funciona el asincronismo
 * nosotros sabemos en que orden hacemos los request
 * pero no en que orden nos van a llegar
 * 
 * no esta garantizado que el orden en el que los
 * pedimos sea el orden en el que nos llegaran
 */
obtenerPersonaje(1);
obtenerPersonaje(4);
obtenerPersonaje(5);
