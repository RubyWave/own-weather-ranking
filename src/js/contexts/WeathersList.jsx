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
				},
			];
		}
		case "remove": {
			return weathers.filter((weather) => weather.id !== action.id);
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
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
