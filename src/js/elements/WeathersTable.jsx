import WeathersTableHeadings from "./WeathersTableHeadings";
import WeatherRow from "./WeatherRow";
import { getWeathersList } from "../contexts/WeathersList";
import { useState } from "react";

export default function WeathersTable() {
	const weathersList = getWeathersList();

	/**
	 * this state keeps info which sorting is enabled, there are 2 options for every column:
	 * nameAsc, nameDesc
	 * temperatureAsc, temperatureDesc
	 * etc.
	 */
	const [currentSorting, setSorting] = useState("");

	return (
		<div className="weathers-table">
			<WeathersTableHeadings
				currentSorting={currentSorting}
				setSorting={setSorting}
			/>
			{weathersList.map((weather) => (
				<WeatherRow
					key={weather.id}
					name={weather.name}
					temperature={weather.temperature}
					windSpeed={weather.windSpeed}
				/>
			))}
		</div>
	);
}
