import arrowAsc from "../../../public/images/arrow-down-sort-asc.svg";
import arrowDesc from "../../../public/images/arrow-down-sort-desc.svg";
import { useWeathersListDispatcher } from "../contexts/WeathersList";

export default function WeathersTableHeadings(props) {
	const dispatch = useWeathersListDispatcher();

	function changeNameSorting() {
		if (props.currentSorting === "nameAsc") {
			props.setSorting("nameDesc");
			dispatch({
				type: "sortNameDesc",
			});
		} else if (props.currentSorting === "nameDesc") {
			props.setSorting("");
			dispatch({
				type: "sortID",
			});
		} else {
			props.setSorting("nameAsc");
			dispatch({
				type: "sortNameAsc",
			});
		}
	}

	function changeTemperatureSorting() {
		if (props.currentSorting === "temperatureAsc") {
			props.setSorting("temperatureDesc");
			dispatch({
				type: "sortTemperatureDesc",
			});
		} else if (props.currentSorting === "temperatureDesc") {
			props.setSorting("");
			dispatch({
				type: "sortID",
			});
		} else {
			props.setSorting("temperatureAsc");
			dispatch({
				type: "sortTemperatureAsc",
			});
		}
	}

	function changeWindSpeedSorting() {
		if (props.currentSorting === "windSpeedAsc") {
			props.setSorting("windSpeedDesc");
			dispatch({
				type: "sortWindSpeedDesc",
			});
		} else if (props.currentSorting === "windSpeedDesc") {
			props.setSorting("");
			dispatch({
				type: "sortID",
			});
		} else {
			props.setSorting("windSpeedAsc");
			dispatch({
				type: "sortWindSpeedAsc",
			});
		}
	}
	function changeCloudCoverSorting() {
		if (props.currentSorting === "cloudCoverAsc") {
			props.setSorting("cloudCoverDesc");
			dispatch({
				type: "sortcloudCoverDesc",
			});
		} else if (props.currentSorting === "cloudCoverDesc") {
			props.setSorting("");
			dispatch({
				type: "sortID",
			});
		} else {
			props.setSorting("cloudCoverAsc");
			dispatch({
				type: "sortcloudCoverAsc",
			});
		}
	}
	function changeShortwaveRadiationSorting() {
		if (props.currentSorting === "shortwaveRadiationAsc") {
			props.setSorting("shortwaveRadiationDesc");
			dispatch({
				type: "sortshortwaveRadiationDesc",
			});
		} else if (props.currentSorting === "shortwaveRadiationDesc") {
			props.setSorting("");
			dispatch({
				type: "sortID",
			});
		} else {
			props.setSorting("shortwaveRadiationAsc");
			dispatch({
				type: "sortshortwaveRadiationAsc",
			});
		}
	}
	function changePrecipitationSorting() {
		if (props.currentSorting === "precipitationAsc") {
			props.setSorting("precipitationDesc");
			dispatch({
				type: "sortprecipitationDesc",
			});
		} else if (props.currentSorting === "precipitationDesc") {
			props.setSorting("");
			dispatch({
				type: "sortID",
			});
		} else {
			props.setSorting("precipitationAsc");
			dispatch({
				type: "sortprecipitationAsc",
			});
		}
	}
	function changeScoreSorting() {
		if (props.currentSorting === "scoreAsc") {
			props.setSorting("scoreDesc");
			dispatch({
				type: "sortscoreDesc",
			});
		} else if (props.currentSorting === "scoreDesc") {
			props.setSorting("");
			dispatch({
				type: "sortID",
			});
		} else {
			props.setSorting("scoreAsc");
			dispatch({
				type: "sortscoreAsc",
			});
		}
	}

	function sortingArrowDisplay(ascName, descName) {
		if (props.currentSorting === ascName) {
			return (
				<img
					className="weathers-table-heading__sort-image"
					src={arrowAsc}
				/>
			);
		} else if (props.currentSorting === descName) {
			return (
				<img
					className="weathers-table-heading__sort-image"
					src={arrowDesc}
				/>
			);
		}
	}

	return (
		<div className="tab-row weathers-table-heading">
			<div
				className="weathers-table-heading__name-column"
				onClick={changeNameSorting}
			>
				<span>City</span>
				{sortingArrowDisplay("nameAsc", "nameDesc")}
			</div>
			<div
				className="weathers-table-heading__temperature-column"
				onClick={changeTemperatureSorting}
			>
				<span>Temperature</span>
				{sortingArrowDisplay("temperatureAsc", "temperatureDesc")}
			</div>
			<div
				className="weathers-table-heading__wind-speed-column"
				onClick={changeWindSpeedSorting}
			>
				<span>Wind Speed</span>
				{sortingArrowDisplay("windSpeedAsc", "windSpeedDesc")}
			</div>
			<div
				className="weathers-table-heading__cloud-cover-column"
				onClick={changeCloudCoverSorting}
			>
				<span>Cloud Cover</span>
				{sortingArrowDisplay("cloudCoverAsc", "cloudCoverDesc")}
			</div>
			<div
				className="weathers-table-heading__shortwave-radiation-column"
				onClick={changeShortwaveRadiationSorting}
			>
				<span>Shortwave Radiation</span>
				{sortingArrowDisplay(
					"shortwaveRadiationAsc",
					"shortwaveRadiationDesc",
				)}
			</div>
			<div
				className="weathers-table-heading__precipitation-column"
				onClick={changePrecipitationSorting}
			>
				<span>Precipitation</span>
				{sortingArrowDisplay("precipitationAsc", "precipitationDesc")}
			</div>
			<div
				className="weathers-table-heading__score-column"
				onClick={changeScoreSorting}
			>
				<span>Score</span>
				{sortingArrowDisplay("scoreAsc", "scoreDesc")}
			</div>
		</div>
	);
}
