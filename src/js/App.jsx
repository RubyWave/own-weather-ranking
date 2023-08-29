import ListCreator from "./elements/ListCreator";
import { ListsManager } from "./contexts/PreList";
import { WeathersManager } from "./contexts/WeathersList";

function App() {
	return (
		<div className="app">
			<WeathersManager>
				<ListsManager>
					<ListCreator />
				</ListsManager>
			</WeathersManager>
		</div>
	);
}

export default App;
