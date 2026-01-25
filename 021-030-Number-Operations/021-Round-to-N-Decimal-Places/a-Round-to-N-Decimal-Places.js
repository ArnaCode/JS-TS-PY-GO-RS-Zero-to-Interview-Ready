function roundToDecimalV1(num, places) {
  const fixedString = num.toFixed(places);
  return Number(fixedString);
}

console.log(roundToDecimalV1(3.14159, 2));
console.log(roundToDecimalV1(2.71828, 3));
console.log(roundToDecimalV1(9.5, 0));

// 3.14159, 2

// 10^2 = 100 * num = 314.159
// Math.round(314.159) = 314
// rounded/100 = 314 / 100 = 3.14

function roundToDecimalV2(num, places) {
  const multiplier = Math.pow(10, places);
  const shifted = multiplier * num;
  const rounded = Math.round(shifted);
  return rounded / multiplier;
}

console.log(roundToDecimalV2(3.14159, 2));
console.log(roundToDecimalV2(2.71828, 2));
console.log(roundToDecimalV2(9.5, 0));
