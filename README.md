# lodash-alt

A series of Lodash specific functions with their implementation without having to install lodash as a 3rd-party package

## Development

...

## How To Use?

Unlike in Lodash, you no longer need to install a 3rd-party package, just scroll down to the function that you need, go to it's "Source Code" and just copy the implementation into your code. All the functions should have documentation added based JSDoc standards. Plus, all these functions have been tested as well, but if you want to copy over the test files, feel free to do so.

The idea is instead of installing any external packages, just copy over the code you need and if needed feel free to update it based on your needs. If you do want to go in the route of installing Lodash, that's a perfectly legit option and in that case, this library is functions is useless for your needs.

## Functions

### **chunk**

[Source Code](./src/chunk.mjs)

> Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.

#### Arguments

1. `array` (`Array`): The array to process.
2. `[size=1]` (`number`): The length of each chunk.

#### Returns

(`Array`): Returns the new array of chunks.

#### Example

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

### References

- [Using ES Modules with Jest](https://www.sammeechward.com/jest-and-esmodules)
