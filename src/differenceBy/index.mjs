/**
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @param {...Array} [values] - The values to exclude.
 * @param {Function} [iteratee=_.identity] - The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
export function differenceBy(array, ...values) {
	if (!array || !Array.isArray(array)) return [];
	const iteratee =
		typeof values[values.length - 1] === 'function'
			? values.pop()
			: (value) => value;
	const excludeSet = new Set(values.flat().map(iteratee));
	return array.filter((value) => !excludeSet.has(iteratee(value)));
}
