import { useState } from "react";
import { usePreListDispatcher, getPreList } from "../contexts/PreList";

export default function ListAdder() {
	const [textInput, setTextInput] = useState("");
	const dispatch = usePreListDispatcher();
	const cities = getPreList();

	function handleEnterKeyInput(e) {
		if (e.key === "Enter") {
			handleClick();
		}
	}

	function handleNameChange(e) {
		setTextInput(e.target.value);
		return;
	}

	function handleClick() {
		let newID = getFreeID(cities);
		setTextInput("");
		dispatch({ type: "add", id: newID, name: textInput });
		return;
	}

	/**
	 * Returns first free ID that can be asigned to a city. Function is required, as cities can be removed from the list freeing id.
	 */
	function getFreeID(array) {
		const sortedArray = array.slice().sort(function (a, b) {
			return a.id - b.id;
		});
		let previousId = -1;
		for (let element of sortedArray) {
			if (element.id != previousId + 1) {
				// Found a gap.
				return previousId + 1;
			}
			previousId = element.id;
		}

		// Found no gaps.
		return previousId + 1;
	}

	return (
		<div className="list-adder">
			<input
				type="text"
				onChange={handleNameChange}
				value={textInput}
				onKeyUp={handleEnterKeyInput}
			></input>
			<button onClick={handleClick} className="button">
				Add city
			</button>
		</div>
	);
}
