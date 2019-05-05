const axios = require('axios');

const getClima = async(lat, lng) => {

    const appid = '4a2b8737428d9ae7294cd7bb245ba88d';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${appid}&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}