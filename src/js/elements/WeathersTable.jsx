import WeathersTableHeadings from "./WeathersTableHeadings";
import WeatherRow from "./WeatherRow";
import { getWeathersList } from "../contexts/WeathersList";

export default function WeathersTable() {
	const weathersList = getWeathersList();
	console.log(weathersList);
	return (
		<div className="weathers-table">
			<WeathersTableHeadings />
			<ul>
				{weathersList.map((weather) => (
					<WeatherRow
						key={weather.id}
						name={weather.name}
						temperature={weather.temperature}
					/>
				))}
			</ul>
		</div>
	);
}