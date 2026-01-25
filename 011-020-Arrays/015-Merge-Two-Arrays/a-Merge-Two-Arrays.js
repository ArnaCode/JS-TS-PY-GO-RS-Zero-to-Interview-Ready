// Solution 1: concat()
function mergeTwoArrays1(arr1, arr2) {
  return arr1.concat(arr2);
}

// Solution 2: Spread Operator
function mergeTwoArrays2(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Solution 3: flat()
function mergeTwoArrays3(arr1, arr2) {
  return [arr1, arr2].flat();
}

// Test all solutions
const input1 = [1, 3, 5];
const input2 = [2, 4, 6];

console.log("Solution 1 (concat):", mergeTwoArrays1(input1, input2));
console.log("Solution 2 (spread):", mergeTwoArrays2(input1, input2));
console.log("Solution 3 (flat):", mergeTwoArrays3(input1, input2));
