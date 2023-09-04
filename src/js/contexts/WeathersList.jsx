/**
 * This context holds list of all weathers, after getting all data from APIs
 */

import { createContext, useContext, useReducer } from "react";

const WeathersList = createContext([]);

const WeathersListDispatch = createContext([]);

/* Example weather structure
{
	id: 0,
	name: "Kraków",
	temperature: "13",
	windSpeed: "20",
	cloudCover: "34",
	shortwaveRadiation: "6",
	precipitation: "66234",
},
*/
const initialWeathers = [];

export function WeathersManager({ children }) {
	const [cities, dispatch] = useReducer(weathersReducer, initialWeathers);

	return (
		<WeathersList.Provider value={cities}>
			<WeathersListDispatch.Provider value={dispatch}>
				{children}
			</WeathersListDispatch.Provider>
		</WeathersList.Provider>
	);
}

export function getWeathersList() {
	return useContext(WeathersList);
}
export function useWeathersListDispatcher() {
	return useContext(WeathersListDispatch);
}

function weathersReducer(weathers, action) {
	switch (action.type) {
		case "add": {
			return [
				...weathers,
				{
					id: action.id,
					name: action.name,
					temperature: action.temperature,
					windSpeed: action.windSpeed,
					cloudCover: action.cloudCover,
					shortwaveRadiation: action.shortwaveRadiation,
					precipitation: action.precipitation,
				},
			];
		}
		case "remove": {
			return weathers.filter((weather) => weather.name !== action.name);
		}
		case "clearList": {
			return [];
		}
		case "sortID": {
			return weathers.sort(function (a, b) {
				return a.id - b.id;
			});
		}
		case "sortNameAsc": {
			return weathers.sort(function (a, b) {
				return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
			});
		}
		case "sortNameDesc": {
			return weathers.sort(function (a, b) {
				return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
			});
		}
		case "sortTemperatureAsc": {
			return weathers.sort(function (a, b) {
				return a.temperature - b.temperature;
			});
		}
		case "sortTemperatureDesc": {
			return weathers.sort(function (a, b) {
				return b.temperature - a.temperature;
			});
		}
		case "sortWindSpeedAsc": {
			return weathers.sort(function (a, b) {
				return a.windSpeed - b.windSpeed;
			});
		}
		case "sortWindSpeedDesc": {
			return weathers.sort(function (a, b) {
				return b.windSpeed - a.windSpeed;
			});
		}
		case "sortcloudCoverAsc": {
			return weathers.sort(function (a, b) {
				return a.cloudCover - b.cloudCover;
			});
		}
		case "sortcloudCoverDesc": {
			return weathers.sort(function (a, b) {
				return b.cloudCover - a.cloudCover;
			});
		}
		case "sortshortwaveRadiationAsc": {
			return weathers.sort(function (a, b) {
				return a.shortwaveRadiation - b.shortwaveRadiation;
			});
		}
		case "sortshortwaveRadiationDesc": {
			return weathers.sort(function (a, b) {
				return b.shortwaveRadiation - a.shortwaveRadiation;
			});
		}
		case "sortprecipitationAsc": {
			return weathers.sort(function (a, b) {
				return a.precipitation - b.precipitation;
			});
		}
		case "sortprecipitationDesc": {
			return weathers.sort(function (a, b) {
				return b.precipitation - a.precipitation;
			});
		}
		case "sortscoreAsc": {
			return weathers.sort(function (a, b) {
				return a.score - b.score;
			});
		}
		case "sortscoreDesc": {
			return weathers.sort(function (a, b) {
				return b.score - a.score;
			});
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
