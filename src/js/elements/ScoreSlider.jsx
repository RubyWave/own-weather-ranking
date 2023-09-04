import Slider from "react-input-slider";
import { useState } from "react";
import { useScoreDispatcher } from "../contexts/ScoreSettings";

export default function ScoreSlider({
	label,
	min,
	max,
	unit,
	defaultValue,
	defaultWeight,
}) {
	const [stateX, setStateX] = useState({ x: defaultValue });
	const [stateY, setStateY] = useState({ x: defaultWeight });
	const dispatch = useScoreDispatcher();

	return (
		<div className="single-slider">
			<div className="single-slider__curent-value">
				{stateX.x} {unit}
			</div>
			<div className="single-slider__wrapper">
				<div className="single-slider__min">
					{min} {unit}
				</div>
				<Slider
					axis="x"
					x={stateX.x}
					xmin={min}
					xmax={max}
					onChange={({ x }) => {
						setStateX((state) => ({ ...state, x }));
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
			<div className="single-slider__wrapper">
				<div className="single-slider__min">weight</div>
				<Slider
					axis="x"
					x={stateY.x}
					xmin={0}
					xmax={1}
					xstep={0.01}
					onChange={({ x }) => {
						setStateY((state) => ({ ...state, x }));
						dispatch({
							type: "changeWeight",
							label: label,
							newValue: x,
						});
					}}
				/>
				<div className="single-slider__max">{stateY.x}</div>
			</div>

			<div className="single-slider__label">{label}</div>
		</div>
	);
}
