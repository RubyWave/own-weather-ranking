import ListCreator from "./elements/ListCreator";
import {ListsManager} from "./contexts/PreList";
import {createContext, useContext, useReducer} from 'react';

function App() {

    return (
        <div className="app">
            <ListsManager>
                <ListCreator/>
            </ListsManager>
        </div>
    );
}

export default App;