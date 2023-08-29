import { getPreList } from "../contexts/PreList";
import getCityCoords from "../apis/geocoding";
import getCoordsWeather from "../apis/weatherFetching";

export default function DataFetcher() {
	const originalPreList = getPreList();

	//generate list of weathers in given cities
	function generateReadyList() {
		const preList = originalPreList;

		async function getWeathers(cityName) {
			console.log("getting weather for first city: " + cityName);
			const coords = await getCityCoords(cityName);

			let weather = await getCoordsWeather(coords);
			weather["cityName"] = cityName;
			console.log(weather);
		}

		(async () => {
			for (const city of preList) {
				await getWeathers(city.name);
			}
		})();
	}

	function handleClick() {
		generateReadyList();
		return;
	}
	return (
		<button onClick={handleClick} className="button">
			Fetch data
		</button>
	);
}
