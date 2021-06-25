// Nota para mí: abajo está esa función de otras dos formas distintas

// Geolocalizador:

function getIP() {

}

function meteo() {

    // let ciudad = [];

    // Documentación: https://www.weatherapi.com/docs/
    // En Request Parameters se especifica que como mínimo hemos de poner "key" y "q"(localización)

    // He de conseguir:
    // 1) Extraer de la función getIP la LAT-LON
    // 2) Pasarla a la URL de aquí en un formato como el que aparece:


    // DUDAS PABLO: CÓMO RECOJO EL CAMPO CIUDAD DE AQUÍ PARA ENVIARLO ASÍ:

    // let weather = "http://api.weatherapi.com/v1/current.json?key=b9882342463f4a06b15145254212306&lang=es&q=" + geoLoc();


    // function geoLoc() {
    //     let weather;
    //     fetch('http://ip-api.com/json?fields=status,city,lat,lon',
    //         {
    //             method: "GET",
    //         })
    //         .then(res => res.json())
    //         .then(res => console.log(res.city))
    //         .then(res => weather = res.city);
    //     return weather;
    // }

    let weather = "http://api.weatherapi.com/v1/current.json?key=b9882342463f4a06b15145254212306&lang=es&q=" + "Barcelona";
    fetch(weather)
        .then(res => res.json())
        // .then(res => {
        //     console.log(res);
        // })
        .then(res => document.querySelector('#meteo').innerHTML = "El tiempo hoy en " + res.location.name + ": " + res.current.condition.text);

}
