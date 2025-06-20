function sumElements(arr: (number | string)[]): number | string {
  if (arr.length === 0) {
    return 0;
  }

  let sum: number = 0;
  let numberCount: number = 0;
  let hasString: boolean = false;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (typeof item === "number") {
      sum = sum + item;
      numberCount = numberCount + 1;
    } else {
      hasString = true;
    }
  }

  if (numberCount === 0 && hasString) {
    return "Array contains only strings, please add numbers to sum.";
  }

  return sum;
}

console.log("=== Test Cases ===");

// Basic test
console.log("Numbers only [1, 2, 3, 4]:", sumElements([1, 2, 3, 4])); // Expected: 10

// Mixed with strings
console.log(
  "Mixed [45, 'hello', 3, 'world']:",
  sumElements([45, "hello", 3, "world"])
); // Expected: 4

// Mixed with strings
console.log(
  "Mixed [11.5025, '', 83.12, '   ']:",
  sumElements([11.5025, "", 83.12, "   "])
); // Expected: 4

// Only strings
console.log(
  "Only strings ['hello', 'world']:",
  sumElements(["hello", "world"])
); // Expected: message

// Empty array
console.log("Empty array []:", sumElements([])); // Expected: 0

// Single number
console.log("Single number [5]:", sumElements([5])); // Expected: 5

// Single string
console.log("Single string ['hello']:", sumElements(["hello"])); // Expected: message
