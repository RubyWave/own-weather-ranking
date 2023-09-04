import ListCreator from "./elements/ListCreator";
import WeathersTable from "./elements/WeathersTable";
import RankingSettings from "./elements/RankingSettings";
import { ListsManager } from "./contexts/PreList";
import { WeathersManager } from "./contexts/WeathersList";
import { FetchProgressManager } from "./contexts/DataFetchProgress";
import { ScoreManager } from "./contexts/ScoreSettings";

function App() {
	return (
		<div className="app">
			<h1>Your weather ranking</h1>
			<ScoreManager>
				<WeathersManager>
					<FetchProgressManager>
						<ListsManager>
							<ListCreator />
						</ListsManager>
					</FetchProgressManager>
					<RankingSettings />
					<WeathersTable />
				</WeathersManager>
			</ScoreManager>
		</div>
	);
}

export default App;
