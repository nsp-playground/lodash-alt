/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array - The array to process.
 * @param {number} [size=1] - The length of each chunk.
 * @returns {Array} Returns the new array of chunks.
 */
export function chunk(array, size = 1) {
	const chunkedArray = [];
	let index = 0;

	while (index < array.length) {
		chunkedArray.push(array.slice(index, index + size));
		index += size;
	}

	return chunkedArray;
}
