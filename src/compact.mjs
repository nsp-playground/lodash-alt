/**
 * Creates an array with all falsy values removed. The values false, null, 0, "", undefined, and NaN are falsy.
 *
 * @param {Array} array - The array to compact.
 * @returns {Array} - Returns the new array of filtered values.
 */
export function compact(array) {
	if (!Array.isArray(array)) {
		throw new TypeError('Expected an array as the first argument');
	}
	return array.filter(Boolean);
}
