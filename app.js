/*
Uso de la API: City-Geo-Location:
https://rapidapi.com/dev132/api/city-geo-location-lookup
hay que registrarse para usarla
Header:
X-RapidAPI-Key: 6ac4450d85mshcc9c1d792f9da17p1370c6jsn1c276575c914

Get: https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Santiago


La idea de la App es hacer que
    node app -d Santiago Chile
y devuelva


Se debe instalar el package de AXIOS para hacer peticiones http
https://www.npmjs.com/package/axios

npm i axios


*/
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// para obtener datos de ubicación de una ciudad
// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => { console.log(resp) })
//     .catch(err => console.log(err))




//argv.direccion
// clima.getClima(-33.459999, -70.639999)
//     .then(resp => console.log("El clima es: ", resp))
//     .catch(err => console.log(err))


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)