const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get( url, opts, function (persona) {
        console.log(`Hola soy ${persona.name} el numero ${id}`);
        if (callback) {
            callback();
        }
    });
}

/**
 * aqui perdemos el paralelismo de los rquest pero
 * a traves de la funcion callback nos aseguramos 
 * que van a venir en el orden que queramos
 * 
 * pero cuidado con el callback HELL!!!
 */

console.log('---------------------------------------------------');

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7, function () {
                            obtenerPersonaje(8);
                        });
                    });
                });
            });
        });
    });
});



function obtenerPersonaje2(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get( url, opts, callback).fail( () => console.log('sucedió algun error') );
}

//callback hell
obtenerPersonaje2(1, function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`);
    obtenerPersonaje2(2, function () {
        console.log(`Hola yo soy ${personaje.name}`);
        obtenerPersonaje2(3, function () {
            console.log(`Hola yo soy ${personaje.name}`);
            obtenerPersonaje2(4, function () {
                console.log(`Hola yo soy ${personaje.name}`);
                obtenerPersonaje2(5, function () {
                    console.log(`Hola yo soy ${personaje.name}`);
                    obtenerPersonaje2(6, function () {
                        console.log(`Hola yo soy ${personaje.name}`);
                        obtenerPersonaje2(7, function () {
                            console.log(`Hola yo soy ${personaje.name}`);
                            obtenerPersonaje2(8, function (personaje) {
                                console.log(`Hola yo soy ${personaje.name}`);
                            });
                        });
                    });
                });
            });
        });
    });
});
