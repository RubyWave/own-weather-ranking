import normalizeName from "../normalizeName";

/**
 * This API returns coordinates from given name
 * You can find more about this API here: https://geocode.maps.co/
 */

/**
 * input should be city name
 * returns coordinates in two elements object
 * function selects first city from all those returned
 * this function has inbuild delay option, to not spam free API
 */
export default async function getCityCoords(cityName) {
	if (cityName === undefined) return false;
	let coordinates = {};

	cityName = normalizeName(cityName);

	const response = await fetch(
		"https://geocode.maps.co/search?q=" + cityName,
	);
	const myJson = await response.json();
	const firstCity = myJson[0]; //as API returns array of found cities with same name, we select first one, as it is most probably the one we wanted
	coordinates = { lat: firstCity.lat, lon: firstCity.lon };

	await new Promise((resolve) => setTimeout(resolve, 1000)); //wait for 1sec to not spam API

	return coordinates;
}