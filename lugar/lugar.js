const axios = require('axios');




const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL }`,
        //timeout: 1000,
        headers: { 'X-RapidAPI-Key': '6ac4450d85mshcc9c1d792f9da17p1370c6jsn1c276575c914' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }
    //console.log('Datos son: ', resp.data);

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    // .then(resp => {
    //     console.log(resp.data.Results[0]);

    // })
    // .catch(err => {
    //     console.log('Error', err);

    // });

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}