function rotateArray(arr: number[], n: number): number[] {
  if (arr.length === 0) return arr;

  while (n >= arr.length) {
    n = n - arr.length;
  }

  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let sourceIndex = i - n;

    if (sourceIndex < 0) {
      sourceIndex = sourceIndex + arr.length;
    }

    result[i] = arr[sourceIndex];
  }

  return result;
}

//  [1, 2, 3, 4], 0

//  [4, 1, 2, 3], 1 ===> index of 4 is 0,

// 1[0] =====> 0 - 1 = [-1] === [3] ===> 4
// 2[1] =====> 1 - 1 = [0] === [0]  ===> 1
// 3[2] =====> 2 - 1 = [1] === [1]  ===> 2
// 4[3] =====> 3 - 1 = [2] === [2]  ===> 3

// Formula  ====>      i - n
// Formula  ====>      sourceIndex + arr.length
// Formula  ====>      -1 + 4

//  [3, 4, 1, 2], 2 ===> index of 4 is 1

//  [2, 3, 4, 1], 3 ===> index of 4 is 2

//  [1, 2, 3, 4], 4 ===> index of 4 is 3

// ========== TEST CASE 1: Original Example ==========
let input: number[] = [1, 2, 3, 4];
let rotateBy: number = 1;
let result: number[] = rotateArray(input, rotateBy);
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
rotateBy = 4; // Should be same as rotating by 1
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
