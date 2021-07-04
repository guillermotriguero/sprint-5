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

function cargarChuckNorris() {

    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(res => document.querySelector('#chiste').innerHTML = res.value);
}

function otroChiste() {
    const random = Math.random();
    console.log(random);

    if (random < 0.5) {
        cargarChiste()
    } else {
        cargarChuckNorris()
    }
}


// VERSIÓN CON ARROW FUNCTION

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