/**
 * This context holds list of cities, before it is send via API to retrive data. It will be changed by adding and removing cities in ListCreator element.
 * Here also is reducer, for working on array of cities from context above.
 */

import { createContext, useContext, useReducer } from "react";

const PreList = createContext([]);

const PreListDispatch = createContext([]);

const initialCities = [
	{
		id: 0,
		name: "Rome",
	},
	{
		id: 1,
		name: "Osaka",
	},
	{
		id: 2,
		name: "Huston",
	},
	{
		id: 3,
		name: "Auckland",
	},
	{
		id: 4,
		name: "Cairo",
	},
];

export function ListsManager({ children }) {
	const [cities, dispatch] = useReducer(citiesReducer, initialCities);

	return (
		<PreList.Provider value={cities}>
			<PreListDispatch.Provider value={dispatch}>
				{children}
			</PreListDispatch.Provider>
		</PreList.Provider>
	);
}

export function getPreList() {
	return useContext(PreList);
}
export function usePreListDispatcher() {
	return useContext(PreListDispatch);
}

function citiesReducer(cities, action) {
	switch (action.type) {
		case "add": {
			let cityAddedAlready = false;
			cities.forEach((city) => {
				if (city.name === action.name) cityAddedAlready = true;
			});

			if (cityAddedAlready) return cities;
			return [
				...cities,
				{
					id: action.id,
					name: action.name,
				},
			];
		}
		case "remove": {
			return cities.filter((city) => city.id !== action.id);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
