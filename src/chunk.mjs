export function chunk(array, size = 1) {
  const chunkedArray = [];
  let index = 0;
  
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }
  
  return chunkedArray;
}
