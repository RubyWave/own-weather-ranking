import { getPreList } from "../contexts/PreList";
import getCityCoords from "../apis/geocoding";
import getCoordsWeather from "../apis/weatherFetching";
import getFreeID from "../returnFreeID";
import {
	getWeathersList,
	useWeathersListDispatcher,
} from "../contexts/WeathersList";
import { useFetchProgressDispatcher } from "../contexts/DataFetchProgress";

export default function DataFetcher() {
	const originalPreList = getPreList();
	const dispatch = useWeathersListDispatcher();
	const dispatchDataProgress = useFetchProgressDispatcher();
	const existingWeatherList = getWeathersList(); //temporary new list, it is used to get unique IDs every single time

	//generate list of weathers in given cities
	function generateReadyList() {
		const preList = originalPreList;
		let newWeathersList = existingWeatherList;
		let allreadyFetchedCities = 0;

		dispatchDataProgress({
			type: "changeMax",
			newMaxProgress: preList.length,
		});
		dispatchDataProgress({
			type: "changeProgress",
			newProgress: allreadyFetchedCities,
		});

		//clears weathers list for fresh giveaway of IDs
		dispatch({
			type: "clearList",
		});

		/**
		 * Adds given weather to weathers new teporary list
		 */
		function addWeatherToWeathersList(weather, cityID, cityName) {
			//all weathers are given hourly, so we take only first element of hour array TODO:change it to not be hourly
			const temp = weather.hourly.temperature_2m[0];
			const wndSp = weather.hourly.windspeed_10m[0];

			newWeathersList.push({
				id: cityID,
				name: cityName,
				temperature: temp,
				windSpeed: wndSp,
			});
		}

		async function getWeathers(cityName) {
			dispatchDataProgress({
				type: "changeProgress",
				newProgress: allreadyFetchedCities++,
			});
			console.log("getting weather for first city: " + cityName);
			const coords = await getCityCoords(cityName);
			if (coords === false) return; //in case first API didn't found any city

			const weather = await getCoordsWeather(coords);

			let cityID = getFreeID(newWeathersList);
			addWeatherToWeathersList(weather, cityID, cityName);
		}

		(async () => {
			for (const newCity of preList) {
				let nonRequestedCity = true; //this flag will be false if city existed on old list
				existingWeatherList.forEach((oldCity) => {
					if (oldCity.name === newCity.name) {
						nonRequestedCity = false;
						return;
					}
				});
				if (nonRequestedCity) await getWeathers(newCity.name);
			}

			newWeathersList.forEach((newWeather) => {
				//add weathers to context, from temporary new weathers list
				dispatch({
					type: "add",
					id: newWeather.id,
					name: newWeather.name,
					temperature: newWeather.temperature,
					windSpeed: newWeather.windSpeed,
				});
			});
			dispatchDataProgress({
				type: "changeMax",
				newMaxProgress: 0,
			});
			dispatchDataProgress({
				type: "changeProgress",
				newProgress: 0,
			});
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
