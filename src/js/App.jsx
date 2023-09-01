import ListCreator from "./elements/ListCreator";
import WeathersTable from "./elements/WeathersTable";
import { ListsManager } from "./contexts/PreList";
import { WeathersManager } from "./contexts/WeathersList";
import { FetchProgressManager } from "./contexts/DataFetchProgress";

function App() {
	return (
		<div className="app">
			<WeathersManager>
				<FetchProgressManager>
					<ListsManager>
						<ListCreator />
					</ListsManager>
				</FetchProgressManager>

				<WeathersTable />
			</WeathersManager>
		</div>
	);
}

export default App;
