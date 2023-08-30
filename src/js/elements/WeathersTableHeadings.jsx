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
				<span>Wind speed</span>
				{sortingArrowDisplay("windSpeedAsc", "windSpeedDesc")}
			</div>
		</div>
	);
}
