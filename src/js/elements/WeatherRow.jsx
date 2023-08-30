export default function WeatherRow({ name, temperature, windSpeed }) {
	return (
		<div className="tab-row weather-row">
			<span className="weather-row__name">{name} </span>
			<span className="weather-row__temperature">{temperature} </span>
			<span className="weather-row__wind-speed">{windSpeed} </span>
		</div>
	);
}
