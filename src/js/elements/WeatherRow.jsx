import closeIcon from "../../../public/images/close-icon.svg";
import { useWeathersListDispatcher } from "../contexts/WeathersList";
import { getScore } from "../contexts/ScoreSettings";

export default function WeatherRow({
	name,
	temperature,
	windSpeed,
	cloudCover,
	shortwaveRadiation,
	precipitation,
}) {
	const dispatch = useWeathersListDispatcher();
	const rankingCategories = getScore();

	function handleClick() {
		dispatch({
			type: "remove",
			name: name,
		});
	}

	/**
	 * Return score of the weather in current city; max is 10 and min is 0; every category is responsible of 1/5 of the score
	 */
	function calculateScore() {
		let finalScore = 0;
		rankingCategories.forEach((category) => {
			switch (category.label) {
				case "Temperature":
					finalScore += calculateSinglescore(category, temperature);

					break;
				case "Wind Speed":
					finalScore += calculateSinglescore(category, windSpeed);

					break;
				case "Cloud Cover":
					finalScore += calculateSinglescore(category, cloudCover);

					break;

				case "Shortwave Radiation":
					finalScore += calculateSinglescore(
						category,
						shortwaveRadiation,
					);
					break;

				case "Precipitation":
					finalScore += calculateSinglescore(category, precipitation);
					break;
			}
		});
		return Math.round(finalScore * 100) / 100;
	}

	/**
	 * Returns value between 0 and 2
	 */
	function calculateSinglescore(category, current) {
		const diffrence = Math.abs(category.current - current);
		const range = Math.abs(category.min) + Math.abs(category.max);
		const liknenessOfCurrentToBest = 100 - (diffrence / range) * 100;

		return (liknenessOfCurrentToBest / 50) * category.weight;
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
			<span className="weather-row__wind-speed">{calculateScore()}</span>
		</div>
	);
}
