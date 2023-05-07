# lodash-alt
A series of Lodash specific functions with their implementation without having to install lodash as a 3rd-party package

## Functions

### **chunk**

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