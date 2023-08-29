import ListCreator from "./elements/ListCreator";
import { ListsManager } from "./contexts/PreList";

function App() {
	return (
		<div className="app">
			<ListsManager>
				<ListCreator />
			</ListsManager>
		</div>
	);
}

export default App;
