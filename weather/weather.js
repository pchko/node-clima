const axios = require('axios');

const getWeather = async (lat, lng) => {

	const instance = axios.create({
		baseURL: encodeURI(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f4d711e9d60a9010c1d345418ae57867`),
	});

	const response = await instance.get();

	if(response.data.length === 0)
		throw new Error(`No hay resultados para ${address}`);

	const weather = response.data;

	return weather;
};

module.exports = {
	getWeather
}
