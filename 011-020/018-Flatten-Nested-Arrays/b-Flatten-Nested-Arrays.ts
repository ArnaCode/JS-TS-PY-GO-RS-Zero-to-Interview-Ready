// function flattenArrayType1(arr: any[]): number[] {
//   const result: number[] = [];

//   const stack: any[] = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     stack[stack.length] = arr[i];
//   }

//   while (stack.length > 0) {
//     const current = stack[stack.length - 1];

//     stack.length = stack.length - 1;

//     const isArray =
//       current !== null &&
//       current !== undefined &&
//       typeof current === "object" &&
//       "length" in current &&
//       typeof current.length === "number";

//     if (isArray) {
//       for (let i = current.length - 1; i >= 0; i--) {
//         stack[stack.length] = current[i];
//       }
//     } else {
//       result[result.length] = current;
//     }
//   }

//   return result;
// }

// x or x[] or x[x[]] or x[x[x[]]] or x[x[x[x[]]]]

type NestedNumberArray = number | NestedNumberArray[];

function flattenArrayType2(arr: NestedNumberArray[]): number[] {
  const result: number[] = [];

  const stack: NestedNumberArray[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    stack[stack.length] = arr[i];
  }

  while (stack.length > 0) {
    const current = stack[stack.length - 1];

    stack.length = stack.length - 1;

    const isArray =
      current !== null &&
      current !== undefined &&
      typeof current === "object" &&
      "length" in current &&
      typeof current.length === "number";

    if (isArray) {
      for (let i = current.length - 1; i >= 0; i--) {
        stack[stack.length] = current[i];
      }
    } else {
      result[result.length] = current as number;
    }
  }

  return result;
}

const input = [1, [2, [3, 4], 5], 6];
const output = flattenArrayType2(input);

console.log("Input:", input);
console.log("Output:", output);

console.log(flattenArrayType2([1, 2, 3]));
console.log(flattenArrayType2([[[[1]]]]));
console.log(
  flattenArrayType2([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]])
);
console.log(flattenArrayType2([]));
console.log(flattenArrayType2([1, [], [2, []], 3]));
