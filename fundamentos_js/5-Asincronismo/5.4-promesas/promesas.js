/**
 * Una promesa es un valor que aun no conocemos
 * algo que guarda un valor cuando una accion 
 * asincrona suceda y tienen tres estados.
 * 
 * PENDING: cuando se crea y se espera que se
 * resuelva.
 * 
 * FULFILLED: si se resuelve exitosamente.
 * 
 * REJECTED: si ocurre algun error en la accion
 * asincrona.
 * 
 * las promesas no siempre funcionan de manera
 * asincrona pero no siempre es asi pueden
 * resolverse de manera sincrona a veces
 * 
 * 
 * para botener el valor de la resolucion de la
 * promesa pordemos llamar a .then(val) que devuelve
 * el valor esperado
 * y el .catch(err) en caso de que salga mal para
 * recoger el error
 */



const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };


function obtenerPersonaje(id) {
    return new Promise((resolve ,reject) => {
        
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        
        $.get(url, opts, function (data) {
            resolve(data);
        
        }).fail( () => {
            reject(id)
        });
    });  
}

function onError(id) {
    console.log(`sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
    .then( function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`);
    })
    .catch((id) => onError(id));


//Promesas encadenadas

obtenerPersonaje(1)
    .then( (personaje1) => {
        console.log(`El personaje es ${personaje1.name}`);
        //en la resolucion de la promesa devolvemos otra promesa
        return obtenerPersonaje(2);
    })
    .then( personaje2 => {
        console.log(`El personaje es ${personaje2.name}`);
        return obtenerPersonaje(3);
    })
    .then( personaje3 => {
        console.log(`El personaje es ${personaje3.name}`);
        return obtenerPersonaje(4);
    })
    .then( personaje4 => {
        console.log(`El personaje es ${personaje4.name}`);
        return obtenerPersonaje(5);
    })
    .then( personaje5 => {
        console.log(`El personaje es ${personaje5.name}`);
    })
    .catch(onError);