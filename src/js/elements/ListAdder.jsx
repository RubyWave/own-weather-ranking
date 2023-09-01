import { useState } from "react";
import { usePreListDispatcher, getPreList } from "../contexts/PreList";
import getFreeID from "../returnFreeID";

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
