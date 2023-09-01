import closeIcon from "../../../public/images/close-icon.svg";
import { useWeathersListDispatcher } from "../contexts/WeathersList";

export default function WeatherRow({ name, temperature, windSpeed }) {
	const dispatch = useWeathersListDispatcher();

	function handleClick(e) {
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
		</div>
	);
}
