function mergeTwoArrays(arr1: number[], arr2: number[]): number[] {
  const totalLength = arr1.length + arr2.length;

  const mergedArray: number[] = new Array(totalLength);

  let mergedIndex = 0;

  for (let i = 0; i < arr1.length; i++) {
    const currentElement = arr1[i];
    mergedArray[mergedIndex] = currentElement;

    mergedIndex++;
  }

  for (let j = 0; j < arr2.length; j++) {
    const currentElement = arr2[j];
    mergedArray[mergedIndex] = currentElement;

    mergedIndex++;
  }

  return mergedArray;
}

const input1: number[] = [1, 3, 5];
const input2: number[] = [2, 4, 6];

// Call the merge function with our test arrays
const output: number[] = mergeTwoArrays(input1, input2);
console.log(output); // [1, 3, 5, 2, 4, 6]
