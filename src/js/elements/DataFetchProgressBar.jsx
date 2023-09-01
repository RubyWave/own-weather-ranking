import ProgressBar from "@ramonak/react-progress-bar";
import { getFetchProgress } from "../contexts/DataFetchProgress";

export default function DataFetchProgressBar() {
	const progress = getFetchProgress();

	function showBar() {
		if (
			progress.progress === progress.max ||
			progress.progress === progress.max
		) {
			return null;
		} else {
			return (
				<ProgressBar
					completed={progress.progress + ""}
					maxCompleted={progress.max}
					className="data-fetch-progressbar"
				/>
			);
		}
	}
	return showBar();
}
