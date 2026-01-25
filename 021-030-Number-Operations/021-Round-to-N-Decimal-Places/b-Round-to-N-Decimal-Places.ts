function roundToDecimal(num: number, places: number): number {
  // 10^2 = 10 * 10
  // 10^3 = 10 * 10 * 10

  let multiplier = 1;
  for (let i = 0; i < places; i++) {
    // 1 * 10 ------------ 1st iteration
    // 10 * 10 ----------- 2nd iteration
    multiplier = multiplier * 10;
  }

  // shifted = 314.159
  // Multplier = 100
  const shifted = multiplier * num;

  //   314.159 % 1 = 0.159
  const fractionalPart = shifted % 1;

  //   314.159 - 0.159 = 314
  const integerPart = shifted - fractionalPart;

  let rounded: number;
  //   0.5 or above
  if (fractionalPart >= 0.5) {
    //  -0.5 <-> 0.5
    rounded = integerPart + 1;
  } else if (fractionalPart <= -0.5) {
    rounded = integerPart - 1;
  } else {
    // 314 = 314
    rounded = integerPart;
  }

  return rounded / multiplier;
}

console.log(roundToDecimal(3.14159, 2));
console.log(roundToDecimal(2.71828, 3));
console.log(roundToDecimal(9.5, 0));
