function rotateArray(arr, n) {
  if (arr.length === 0) return arr;

  n = n % arr.length;

  return arr.slice(-n).concat(arr.slice(0, -n));
}

// ========== TEST CASE 1: Original Example ==========
let input = [1, 2, 3, 4];
let rotateBy = 1;
let result = rotateArray(input, rotateBy);
console.log("Input:", input);
console.log("Rotate right by:", rotateBy);
console.log("Output:", result);
console.log("---");

// ========== TEST CASE 2: Rotate by 2 ==========
input = [1, 2, 3, 4, 5];
rotateBy = 2;
result = rotateArray(input, rotateBy);
console.log("Input:", input);
console.log("Rotate right by:", rotateBy);
console.log("Output:", result);
console.log("---");

// ========== TEST CASE 3: Rotate more than array length ==========
input = [1, 2, 3];
rotateBy = 4; // 4 % 3 = 1, so same as rotating by 1
result = rotateArray(input, rotateBy);
console.log("Input:", input);
console.log("Rotate right by:", rotateBy);
console.log("Output:", result);
console.log("---");

// ========== TEST CASE 4: Single element ==========
input = [1];
rotateBy = 5;
result = rotateArray(input, rotateBy);
console.log("Input:", input);
console.log("Rotate right by:", rotateBy);
console.log("Output:", result);
console.log("---");

// ========== TEST CASE 5: Empty array ==========
input = [];
rotateBy = 3;
result = rotateArray(input, rotateBy);
console.log("Input:", input);
console.log("Rotate right by:", rotateBy);
console.log("Output:", result);
console.log("---");

// ========== TEST CASE 6: No rotation (n = 0) ==========
input = [1, 2, 3, 4];
rotateBy = 0;
result = rotateArray(input, rotateBy);
console.log("Input:", input);
console.log("Rotate right by:", rotateBy);
console.log("Output:", result);
