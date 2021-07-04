function geoLoc() {
    fetch('http://ip-api.com/json?fields=status,city,lat,lon',
        {
            method: "GET",
        })
        .then(res => res.json())
        // .then(res => console.log(res.city))
        .then(res => {
            ciudad = res.city;
            meteo(ciudad);
        })
}

function meteo(city) {

    let weather = "http://api.weatherapi.com/v1/current.json?key=b9882342463f4a06b15145254212306&lang=es&q=" + city;
    fetch(weather)
        .then(res => res.json())
        .then(res => {
            // console.log(res.location.name);
            document.querySelector('#meteo').innerHTML = "El tiempo hoy en " + res.location.name + ": " + res.current.condition.text;
        });

    // Documentación: https://www.weatherapi.com/docs/
    // En Request Parameters se especifica que como mínimo hemos de poner "key" y "q"(localización)
}

