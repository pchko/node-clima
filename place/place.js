const axios = require('axios');

const getCoordenates = async (address) => {

	const instance = axios.create({
		baseURL: encodeURI(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBtKk9YjpJZ37N71Gp2BCa_V6rMLbJlpKk&address=${address}`),
	});


	const response = await instance.get();

	if(response.data.results.length === 0)
		throw new Error(`No hay resultados para ${address}`);

	const place = response.data.results[0];
	
	return {
		address,
		lat: place.geometry.location.lat,
		lng: place.geometry.location.lng
	}
};

module.exports = {
	getCoordenates
}
