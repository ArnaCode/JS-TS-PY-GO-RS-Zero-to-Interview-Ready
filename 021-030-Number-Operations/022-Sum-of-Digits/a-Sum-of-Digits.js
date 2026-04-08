function sumOfDigits(num) {
  const numStr = String(num);

  const digits = numStr.split("");

  const total = digits.reduce((sum, digit) => sum + Number(digit), 0);

  return total;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(9875));
console.log(sumOfDigits(9));
