import closeIcon from "../../../public/images/close-icon.svg";
import { useWeathersListDispatcher } from "../contexts/WeathersList";

export default function WeatherRow({
	name,
	temperature,
	windSpeed,
	cloudCover,
	shortwaveRadiation,
	precipitation,
	score,
}) {
	const dispatch = useWeathersListDispatcher();

	function handleClick() {
		dispatch({
			type: "remove",
			name: name,
		});
	}
	return (
		<div className="tab-row weather-row">
			<div className="weather-row__name">
				<span>{name}</span>
				<img
					className="weather-row__remover"
					onClick={handleClick}
					src={closeIcon}
				/>{" "}
			</div>
			<span className="weather-row__temperature">{temperature} °C</span>
			<span className="weather-row__wind-speed">{windSpeed} km/h</span>
			<span className="weather-row__wind-speed">{cloudCover}%</span>
			<span className="weather-row__wind-speed">
				{shortwaveRadiation} W/m²
			</span>
			<span className="weather-row__wind-speed">{precipitation} mm</span>
			<span className="weather-row__wind-speed">{score}</span>
		</div>
	);
}
