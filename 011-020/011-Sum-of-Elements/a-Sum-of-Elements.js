function sumElements(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const numbers = arr.filter((item) => typeof item === "number");

  if (numbers.length === 0) {
    const hasStrings = arr.some((item) => typeof item === "string");
    if (hasStrings) {
      return "Array contains only strings, please add numbers to sum.";
    }

    return 0;
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("=== Test Cases ===");

// Basic test
console.log("Numbers only [1, 2, 3, 4]:", sumElements([1, 2, 3, 4])); // Expected: 10

// Mixed with strings
console.log(
  "Mixed [1, 'hello', 3, 'world']:",
  sumElements([1, "hello", 3, "world"])
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
