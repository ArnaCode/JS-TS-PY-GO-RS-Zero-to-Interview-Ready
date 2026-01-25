function filterEvenNumbers(numbers: number[]): number[] {
  const evenNums: number[] = [];

  let evenIndex = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber % 2 === 0) {
      evenNums[evenIndex] = currentNumber;

      evenIndex++;
    }
  }

  return evenNums;
}

const input = [1, 2, 3, 4, 5, 6];
const output = filterEvenNumbers(input);
console.log(output);
