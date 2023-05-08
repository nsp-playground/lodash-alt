# lodash-alt

A series of Lodash specific functions with their implementation without having to install lodash as a 3rd-party package

## How To Use?

Unlike in Lodash, you no longer need to install a 3rd-party package, just scroll down to the function that you need, go to it's "Source Code" and just copy the implementation into your code. All the functions should have documentation added based JSDoc standards. Plus, all these functions have been tested as well, but if you want to copy over the test files, feel free to do so.

The idea is instead of installing any external packages, just copy over the code you need and if needed feel free to update it based on your needs. If you do want to go in the route of installing Lodash, that's a perfectly legit option and in that case, this library is functions is useless for your needs.

## Functions

## `chunk(array, [size=1])`

[Source Code](./src/chunk/index.mjs)

> Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.

**Arguments**

- `array` (`Array`): The array to process.
- `[size=1]` (`number`): The length of each chunk.

**Returns**

(`Array`): Returns the new array of chunks.

**Example**

```js
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

## `compact(array)`

[Source Code](./src/compact/index.mjs)

> Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.

**Arguments**

- `array` (`Array`): The array to compact.

**Returns**

- (`Array`): Returns the new array of filtered values.

**Example**

```js
compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

## `concat(array, [...values])`

[Source Code](./src/concat/index.mjs)

> Creates a new array concatenating `array` with any additional arrays and/or values.

**Arguments**

- `array` (Array): The array to concatenate.
- `[values]` (...\*): The values to concatenate.

**Returns**

(Array): Returns the new concatenated array.

**Example**

```js
var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

## `difference(array, [values])`

[Source Code](./src/difference/index.mjs)

> Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

**Arguments**

- `array` (Array): The array to inspect.
- `[values]` (...Array): The values to exclude.

**Returns**

(Array): Returns the new array of filtered values.

**Example**

```js
difference([2, 1], [2, 3]);
// => [1]
```

### References

- [Using ES Modules with Jest](https://www.sammeechward.com/jest-and-esmodules)
