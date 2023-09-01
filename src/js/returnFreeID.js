/**
 * Returns first free ID that can be asigned to a city. Function is required, as cities can be removed from the list freeing id.
 */
export default function getFreeID(array) {
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
