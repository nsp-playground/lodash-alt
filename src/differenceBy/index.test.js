import { differenceBy } from '..';

describe('differenceBy', () => {
	test('returns array with filtered values by iterating with Math.floor', () => {
		const result = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
		expect(result).toEqual([1.2]);
	});

	// TODO: temporary disable unit test to account for objects in array
	// eslint-disable-next-line jest/no-disabled-tests
	test.skip('returns array with filtered values by iterating with property shorthand', () => {
		const result = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
		expect(result).toEqual([{ x: 2 }]);
	});

	test('returns empty array when all values are excluded', () => {
		const result = differenceBy([1, 2, 3], [1, 2, 3], (value) => value);
		expect(result).toEqual([]);
	});

	test('returns original array when no values are excluded', () => {
		const result = differenceBy([1, 2, 3], [], (value) => value);
		expect(result).toEqual([1, 2, 3]);
	});

	test('returns empty array when original array is empty', () => {
		const result = differenceBy([], [1, 2, 3], (value) => value);
		expect(result).toEqual([]);
	});

	test('returns empty array when no parameters are provided', () => {
		const result = differenceBy();
		expect(result).toEqual([]);
	});
});
