function sumOfDigits(num: number): number {
  let sum: number = 0;

  while (num > 0) {
    const lastDigit: number = num % 10;

    sum = sum + lastDigit;

    num = (num - lastDigit) / 10;
  }

  return sum;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(9875));
console.log(sumOfDigits(9));
