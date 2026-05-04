function reverseNumber(num) {
  const sign = Math.sign(num);

  const absolute = Math.abs(num);

  const reversed = String(absolute).split("").reverse().join("");

  return Number(reversed) * sign;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(-456));
