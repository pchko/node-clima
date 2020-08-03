const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
	direccion:{
		alias: 'd',
		desc: 'Direccion de la Ciudad',
		demmand: true
	}
}).argv;


const getInfo = async(address) => {

	try{

		const coordenates = await place.getCoordenates(address);
		const clima = await weather.getWeather(coordenates.lat, coordenates.lng);

		return `La temperatura en ${address} es de ${clima.main.temp - 273.15}°C`;
	}catch (e){
		return new Error(`No se pudo encontrar la direccion ${address}`);
	}
}

getInfo(argv.d).then( console.log ).catch( console.log );