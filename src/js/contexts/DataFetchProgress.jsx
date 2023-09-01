/**
 * This context holds progress number and max progress with fetching data via APIs
 */

import { createContext, useContext, useReducer } from "react";

const FetchProgress = createContext([]);

const FetchProgressDispatch = createContext([]);

export function FetchProgressManager({ children }) {
	const [progressData, dispatch] = useReducer(progressReducer, {
		progress: 0,
		max: 0,
	});

	return (
		<FetchProgress.Provider value={progressData}>
			<FetchProgressDispatch.Provider value={dispatch}>
				{children}
			</FetchProgressDispatch.Provider>
		</FetchProgress.Provider>
	);
}

export function getFetchProgress() {
	return useContext(FetchProgress);
}
export function useFetchProgressDispatcher() {
	return useContext(FetchProgressDispatch);
}

function progressReducer(progress, action) {
	switch (action.type) {
		case "changeProgress": {
			return { progress: action.newProgress, max: progress.max };
		}
		case "changeMax": {
			return { progress: progress.progress, max: action.newMaxProgress };
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
