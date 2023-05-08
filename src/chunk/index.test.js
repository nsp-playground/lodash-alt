import { chunk } from '..';

describe('chunk', () => {
	it('chunks an array of length 4 into groups of 2', () => {
		expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
			['a', 'b'],
			['c', 'd'],
		]);
	});

	it('chunks an array of length 4 into groups of 3', () => {
		expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
	});

	it('chunks an array of length 1 into a single group', () => {
		expect(chunk(['a'], 2)).toEqual([['a']]);
	});

	it('chunks an empty array into an empty array', () => {
		expect(chunk([], 2)).toEqual([]);
	});
});
