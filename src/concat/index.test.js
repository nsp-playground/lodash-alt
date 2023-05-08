import { concat } from '..';

describe('concat', () => {
	it('should concatenate two arrays', () => {
		const arr1 = [1, 2];
		const arr2 = [3, 4];
		const result = concat(arr1, arr2);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it('should concatenate an array and a value', () => {
		const arr1 = [1, 2];
		const result = concat(arr1, 3);
		expect(result).toEqual([1, 2, 3]);
	});

	it('should concatenate multiple arrays and values', () => {
		const arr1 = [1];
		const arr2 = [2];
		const result = concat(arr1, arr2, 3, [4]);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it('should return a new array when only one argument is provided', () => {
		const arr1 = [1, 2];
		const result = concat(arr1);
		expect(result).toEqual([1, 2]);
		expect(result).not.toBe(arr1);
	});

	it('should return an empty array when no arguments are provided', () => {
		const result = concat();
		expect(result).toEqual([]);
	});
});
