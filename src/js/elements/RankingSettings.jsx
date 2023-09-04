import ScoreSlider from "./ScoreSlider";
import { getScore } from "../contexts/ScoreSettings";

export default function ListLister() {
	const rankingCategories = getScore();

	return (
		<div className="score-settings">
			<h2 className="score-settings__title">Ranking settings</h2>
			{rankingCategories.map((category, i) => (
				<ScoreSlider
					key={i}
					label={category.label}
					min={category.min}
					max={category.max}
					unit={category.unit}
					defaultValue={category.defaultValue}
					defaultWeight={category.defaultWeight}
				/>
			))}
		</div>
	);
}
