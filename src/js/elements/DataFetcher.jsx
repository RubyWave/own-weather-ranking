import { getPreList } from "../contexts/PreList";
import normalizeName from "../normalizeName";

export default function DataFetcher() {
	const originalPreList = getPreList();

	//generate list of weathers in given cities
	function generateReadyList() {
		const preList = originalPreList;
		let curentListPosition = 1;

		async function getWeatherForSingleCity() {
			let cityName = preList[curentListPosition].name;
			if (cityName === undefined) return;

			cityName = normalizeName(cityName);

			const response = await fetch(
				"https://geocode.maps.co/search?q=" + cityName,
			);
			const myJson = await response.json(); //extract JSON from the http response
			// do something with myJson
			console.log(myJson);
		}
		getWeatherForSingleCity();
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
