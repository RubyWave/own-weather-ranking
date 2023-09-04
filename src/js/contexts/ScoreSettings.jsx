/**
 * This context holds settings for calculating score
 */

import { createContext, useContext, useReducer } from "react";

const Score = createContext([]);
const ScoreDispatch = createContext([]);
const rankingCategories = [
	{
		label: "Temperature",
		min: -50,
		max: 100,
		unit: "°C",
		current: 25,
		defaultValue: 25,
	},
	{
		label: "Wind Speed",
		min: 0,
		max: 45,
		unit: "km/h",
		current: 6,
		defaultValue: 6,
	},
	{
		label: "Cloud Cover",
		min: 0,
		max: 100,
		unit: "%",
		current: 15,
		defaultValue: 15,
	},
	{
		label: "Shortwave Radiation",
		min: 0,
		max: 2500,
		unit: "W/m²",
		current: 0,
		defaultValue: 0,
	},
	{
		label: "Precipitation",
		min: 0,
		max: 2500,
		unit: "mm",
		current: 0,
		defaultValue: 0,
	},
];

export function ScoreManager({ children }) {
	const [scoreData, dispatch] = useReducer(scoreReducer, rankingCategories);

	return (
		<Score.Provider value={scoreData}>
			<ScoreDispatch.Provider value={dispatch}>
				{children}
			</ScoreDispatch.Provider>
		</Score.Provider>
	);
}

export function getScore() {
	return useContext(Score);
}
export function useScoreDispatcher() {
	return useContext(ScoreDispatch);
}

function scoreReducer(scores, action) {
	switch (action.type) {
		case "changeScore": {
			return scores.map((singleScore) =>
				singleScore.label === action.label
					? { ...singleScore, current: action.newValue }
					: singleScore,
			);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
