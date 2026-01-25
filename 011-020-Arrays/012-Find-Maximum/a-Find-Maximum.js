function findMax(arr) {
  if (arr.length === 0) return 0;

  const numbers = arr.filter((item) => !isNaN(item) && item !== "").map(Number);

  if (numbers.length === 0) return "You need to pass numbers";

  return Math.max(...numbers);
}

console.log("=== Test Cases ===");
console.log("Normal array [10, 4, 2, 23, 15]:", findMax([10, 4, 2, 23, 15])); // 23
console.log("Empty array []:", findMax([])); // 0
console.log("All strings ['apple', 'banana']:", findMax(["apple", "banana"])); // "You need to pass numbers"
console.log(
  "Mixed [10, 'hello', 23, '150', 5]:",
  findMax([10, "hello", 23, "150", 5])
); // 150
console.log(
  "Floats and ints [3.14, 7, 2.5, 12, 8.9]:",
  findMax([3.14, 7, 2.5, 12, 8.9])
); // 12
console.log(
  "Floats and strings [1.5, 'test', 4.7, 'hello', 2.3]:",
  findMax([1.5, "test", 4.7, "hello", 2.3])
); // 4.7
