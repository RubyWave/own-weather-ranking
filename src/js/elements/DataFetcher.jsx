import { getPreList } from "../contexts/PreList";
import getCityCoords from "../apis/geocoding";
import getCoordsWeather from "../apis/weatherFetching";
import { useWeathersListDispatcher } from "../contexts/WeathersList";

export default function DataFetcher() {
	const originalPreList = getPreList();
	const dispatch = useWeathersListDispatcher();

	/**
	 * Adds given weather to weathers list via dispatcher
	 */
	function addWeatherToWeathersList(weather, cityID, cityName) {
		//all weathers are given hourly, so we take only first element of hour array TODO:change it to not be hourly
		const temp = weather.hourly.temperature_2m[0];
		const wndSp = weather.hourly.windspeed_10m[0];

		dispatch({
			type: "add",
			id: cityID,
			name: cityName,
			temperature: temp,
			windSpeed: wndSp,
		});
	}

	//generate list of weathers in given cities
	function generateReadyList() {
		const preList = originalPreList;

		async function getWeathers(cityName, cityID) {
			console.log("getting weather for first city: " + cityName);
			const coords = await getCityCoords(cityName);
			if (coords == false) return; //in case first API didn't found any city

			const weather = await getCoordsWeather(coords);

			addWeatherToWeathersList(weather, cityID, cityName);
		}

		(async () => {
			for (const city of preList) {
				await getWeathers(city.name, city.id);
			}
		})();
	}

	function handleClick() {
		generateReadyList();
		return;
	}
	return (
		<button onClick={handleClick} className="button">
			Fetch data
		</button>
	);
}
