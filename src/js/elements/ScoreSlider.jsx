import Slider from "react-input-slider";
import { useState } from "react";
import { useScoreDispatcher } from "../contexts/ScoreSettings";

export default function ScoreSlider({ label, min, max, unit, defaultValue }) {
	const [state, setState] = useState({ x: defaultValue });
	const dispatch = useScoreDispatcher();

	return (
		<div className="single-slider">
			<div className="single-slider__curent-value">
				{state.x} {unit}
			</div>
			<div className="single-slider__wrapper">
				<div className="single-slider__min">
					{min} {unit}
				</div>
				<Slider
					axis="x"
					x={state.x}
					xmin={min}
					xmax={max}
					onChange={({ x }) => {
						setState((state) => ({ ...state, x }));
						dispatch({
							type: "changeScore",
							label: label,
							newValue: x,
						});
					}}
				/>
				<div className="single-slider__max">
					{max} {unit}
				</div>
			</div>

			<div className="single-slider__label">{label}</div>
		</div>
	);
}
