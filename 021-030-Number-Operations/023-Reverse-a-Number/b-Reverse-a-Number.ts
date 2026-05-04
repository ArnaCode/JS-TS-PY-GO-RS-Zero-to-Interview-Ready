function reverseNumber(num: number): number {
  const sign: number = num < 0 ? -1 : 1;

  let absolute: number = num * sign;

  let reversed: number = 0;

  while (absolute > 0) {
    const lastDigit: number = absolute % 10;

    reversed = reversed * 10 + lastDigit;

    absolute = (absolute - lastDigit) / 10;
  }

  return reversed * sign;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(-456));
