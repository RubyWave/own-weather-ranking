import ListCreator from "./elements/ListCreator";
import WeathersTable from "./elements/WeathersTable";
import { ListsManager } from "./contexts/PreList";
import { WeathersManager } from "./contexts/WeathersList";

function App() {
	return (
		<div className="app">
			<WeathersManager>
				<ListsManager>
					<ListCreator />
				</ListsManager>
				<WeathersTable />
			</WeathersManager>
		</div>
	);
}

export default App;
