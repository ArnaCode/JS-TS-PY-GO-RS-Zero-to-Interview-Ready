function removeDuplicates<T>(InputArr: T[]): T[] {
  const uniqueArr: T[] = [];

  let uniqueCount = 0;

  for (let i = 0; i < InputArr.length; i++) {
    const currentElement = InputArr[i];

    let isDuplicate = false;

    for (let j = 0; j < uniqueCount; j++) {
      if (uniqueArr[j] === currentElement) {
        isDuplicate = true;

        break;
      }
    }

    if (!isDuplicate) {
      uniqueArr[uniqueCount] = currentElement;

      uniqueCount++;
    }
  }

  return uniqueArr;
}

const numbersInput: number[] = [1, 2, 2, 3, 3, 4];
const numbersOutput: number[] = removeDuplicates(numbersInput);
console.log("Numbers test:");
console.log("Input:", numbersInput);
console.log("Output:", numbersOutput);

const stringsInput: string[] = ["a", "a", "b", "c", "a", "c", "b"];
const stringsOutput: string[] = removeDuplicates(stringsInput);
console.log("\nStrings test:");
console.log("Input:", stringsInput);
console.log("Output:", stringsOutput);
