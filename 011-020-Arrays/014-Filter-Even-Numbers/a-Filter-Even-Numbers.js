function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

const input = [1, 2, 3, 4, 5, 6];
const output = filterEvenNumbers(input);
console.log(output);
