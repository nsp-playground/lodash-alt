/**
 * Creates a new array concatenating `array` with any additional arrays and/or values.
 *
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 */
export function concat(array = [], ...values) {
	return array.concat(...values);
}
