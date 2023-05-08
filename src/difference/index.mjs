/**
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @param {...Array} [values] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
export function difference(array, ...values) {
	const excludeSet = new Set(values.flat());
	return array.filter((value) => !excludeSet.has(value));
}
