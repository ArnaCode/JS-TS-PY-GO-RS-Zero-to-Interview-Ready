function reverseArray<T>(arr: T[]): T[] {
  const length = arr.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }

  return arr;
}

// Test Case 1: Normal case with given input
console.log(
  "=== TEST CASE 1: Input === [1, 2, 3, 4, 5] --- Output === ",
  reverseArray([1, 2, 3, 4, 5])
); // Prints: [5, 4, 3, 2, 1]

// Test Case 2: Empty array
console.log("=== TEST CASE 2: Input === [] --- Output === ", reverseArray([])); // Prints: []

// Test Case 3: Single element array
console.log(
  "=== TEST CASE 3: Input === [42] --- Output === ",
  reverseArray([42])
); // Prints: [42]

// Test Case 4: Two elements
console.log(
  "=== TEST CASE 4: Input === ['first', 'second'] --- Output === ",
  reverseArray(["first", "second"])
); // Prints: ['second', 'first']

// Test Case 5: Array with duplicates
console.log(
  "=== TEST CASE 5: Input === [1, 2, 2, 3, 2, 1] --- Output === ",
  reverseArray([1, 2, 2, 3, 2, 1])
); // Prints: [1, 2, 3, 2, 2, 1]

// Test Case 6: Mixed data types
console.log(
  "=== TEST CASE 6: Input === [1, 'hello', true, null, undefined] --- Output === ",
  reverseArray([1, "hello", true, null, undefined])
); // Prints: [undefined, null, true, 'hello', 1]
