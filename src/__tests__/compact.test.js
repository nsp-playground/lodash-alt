import { compact } from '..';

test('removes falsy values from array', () => {
	expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});

test('returns empty array when input is empty', () => {
	expect(compact([])).toEqual([]);
});

test('throws error when input is not an array', () => {
	expect(() => compact('not an array')).toThrow(TypeError);
});
