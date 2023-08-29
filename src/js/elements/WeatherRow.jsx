export default function WeatherRow({ name, temperature }) {
	return (
		<li className="weather-row">
			<span className="weather-row__name">{name} </span>
			<span className="weather-row__temperature">{temperature} </span>
		</li>
	);
}
