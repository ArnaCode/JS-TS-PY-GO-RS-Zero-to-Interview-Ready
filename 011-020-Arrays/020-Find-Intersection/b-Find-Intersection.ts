function findIntersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result[result.length] = arr1[i];
      }
    }
  }
  return result;
}

const input1 = [1, 2, 3, 4];
const input2 = [2, 3, 5];
const result = findIntersection(input1, input2);
console.log(result);
