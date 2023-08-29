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
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}