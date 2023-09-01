import ListAdder from "./ListAdder";
import ListLister from "./ListLister";
import DataFetcher from "./DataFetcher";
import DataFetchProgressBar from "./DataFetchProgressBar";

export default function ListCreator() {
	return (
		<div className="list-creator">
			<DataFetchProgressBar />
			<DataFetcher />
			<ListAdder />
			<ListLister />
		</div>
	);
}
