/**
 * This API returns weather from given coordinates
 * You can find more about this API here: https://geocode.maps.co/
 */

/**
 * input should be city coordinates
 * returns weather in array
 * this function has inbuild delay option, to not spam free API
 */
export default async function getCoordsWeather(cityCoords) {
	if (cityCoords === undefined) return false;
	let weather = {};

	const response = await fetch(
		"https://api.open-meteo.com/v1/forecast?latitude=" +
			cityCoords.lat +
			"&longitude=" +
			cityCoords.lon +
			"&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m",
	);
	const myJson = await response.json();
	weather = myJson;

	await new Promise((resolve) => setTimeout(resolve, 1000)); //wait for 1sec to not spam API

	return weather;
}