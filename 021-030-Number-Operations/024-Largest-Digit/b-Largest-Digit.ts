function largestDigit(num: number): number {
  let largest: number = 0;

  while (num > 0) {
    const digit: number = num % 10;

    if (digit > largest) {
      largest = digit;
    }

    // (28394 - 4) = 28390 / 10 = 2839
    num = (num - digit) / 10;
  }

  return largest;
}

console.log(largestDigit(28394));
console.log(largestDigit(8721802647));
