import { difference } from '..';

describe('difference', () => {
	test('returns an array of values in the first array but not in the second array', () => {
		expect(difference([2, 1], [2, 3])).toEqual([1]);
		expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
		expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
	});

	test('returns the same array if no values to exclude are given', () => {
		const arr = [1, 2, 3];
		expect(difference(arr)).toEqual([1, 2, 3]);
	});

	test('returns a new array even if no values to exclude are given', () => {
		const arr = [1, 2, 3];
		expect(difference(arr)).not.toBe(arr);
	});

	test('handles empty arrays', () => {
		expect(difference([], [1, 2, 3])).toEqual([]);
		expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
		expect(difference([], [])).toEqual([]);
	});

	test('handles arrays with same values but different object references', () => {
		const obj = {};
		const arr1 = [obj];
		const arr2 = [{}];
		const result = difference(arr1, arr2);
		expect(result).toEqual([obj]);
		expect(result[0]).toBe(obj);
	});

	test('handles arrays with NaN values', () => {
		expect(difference([NaN], [NaN])).toEqual([]);
		expect(difference([1, NaN], [2, NaN])).toEqual([1]);
	});

	test('handles arrays with null and undefined values', () => {
		expect(difference([null, undefined], [undefined])).toEqual([null]);
		expect(difference([1, null], [null, undefined])).toEqual([1]);
	});
});
