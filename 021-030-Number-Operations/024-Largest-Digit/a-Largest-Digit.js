function largestDigit(num) {
  // 28394 => "28394" => ["2", "8", "3", "9", "4"]
  const digits = String(num).split("");
  // [2,8,3,9,4]
  const numbers = digits.map(Number);

  return Math.max(...numbers);
}

console.log(largestDigit(28394));
console.log(largestDigit(8721802647));
