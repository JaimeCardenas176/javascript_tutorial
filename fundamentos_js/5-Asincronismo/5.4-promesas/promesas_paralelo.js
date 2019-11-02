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
       

var ids = [1, 2, 3, 4, 5, 6,];
var promesas = ids.map( (id) => obtenerPersonaje(id));

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError);

//-------------------------------------------------------

function obtenerPersonajeId(id){
    return new Promise( (resolve, reject) => {
        fetch(`${API_URL}${PEOPLE_URL.replace(':id',id)}`)
        .then( res => resolve(res.json())) 
        .catch(err => {  
            var error = `${err} Reference id #${id}`;
            reject(error);
        })
    })
}


//async y await
async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6,];
    var promesas2 = ids.map( (id) => obtenerPersonajeId(id));

    try{
        var personajes = await Promise.all(promesas2);
        console.log(personajes);
    } catch(id) {
        onError(id);
    }
 }

obtenerPersonajes();