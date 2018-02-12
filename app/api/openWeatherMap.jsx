import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?APPID=b1ceec6806b78351636f519b1ea5444b&units=metric';

module.exports = {
    getTemp(location) {
        let encodedLocation = encodeURIComponent(location)
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                console.log(res.data)
                return res.data.main.temp;
            }
        }, function (err) {
            throw new Error('Unable to fetch weather for that location');
        });
    }
}