function flattenArray(arr) {
  return arr.flat(Infinity);
}

const input = [1, [2, [3, 4], 5], 6];
const output = flattenArray(input);

console.log("Input:", input);
console.log("Output:", output);

console.log(flattenArray([1, 2, 3]));
console.log(flattenArray([1]));
console.log(flattenArray([[[[1]]]]));
console.log(flattenArray([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]));
console.log(flattenArray([]));
console.log(flattenArray([1, [], [2, []], 3]));
