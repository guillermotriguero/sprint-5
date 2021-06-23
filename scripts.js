// document.querySelector('#cargarChiste').addEventListener('click', cargarChiste());

function cargarChiste() {

    fetch('https://icanhazdadjoke.com/',
        {
            headers: {
                'Accept': 'application/json'
            },
            method: "GET",
        })
        .then(res => res.json())
        .then(res => document.querySelector('#chiste').innerHTML = res.joke);
}


// VERSIÓN CON ARROW FUNCTION?

// const cargarChiste = () => {

//     fetch('https://icanhazdadjoke.com/',
//         {
//             headers: {
//                 'Accept': 'application/json'
//             },
//             method: "GET", // a lo mejor no hace falta, comprobar
//         })
//         .then(res => res.json())
//         .then(res => console.log(res.joke));
// }

// Fetch: para recuperar info de fuente externa de forma asíncrona



// MISMA FUNCIÓN PERO CON ASYNC, TAMBIÉN FUNCIONA, ES EXACTAMENTE LO MISMO QUE LA VERSIÓN CON THEN:

// async function cargarChiste() {
//     const result = await fetch('https://icanhazdadjoke.com/',
//         {
//             headers: {
//                 'Accept': 'application/json'
//             },
//             method: "GET",
//         });
//     const res = await result.json();
//     console.log(res.joke);
// }



    // Hemos llamado a fetch() con la URL a la que queremos acceder como parámetro.Esta llamada nos devuelve una promesa.
    // El método then() de esa promesa nos entrega un objeto response.
    // A partir de este objeto llamamos al método json() para obtener el cuerpo de la respuesta.Este método json() nos devuelve otra promesa que se resolverá cuando se haya obtenido el contenido.
    // El método then() de esta segunda promesa recibe el cuerpo devuelto por la promesa anterior y hace un log de ella.
