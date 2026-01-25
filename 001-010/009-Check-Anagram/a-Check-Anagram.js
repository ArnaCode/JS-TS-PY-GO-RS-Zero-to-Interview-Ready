function checkAnagram(str1, str2) {
  const normStr1 = str1.toLowerCase().replace(/\s/g, "");
  const normStr2 = str2.toLowerCase().replace(/\s/g, "");

  if (normStr1.length !== normStr2.length) return false;

  const sortedStr1 = normStr1.split("").sort().join("");
  const sortedStr2 = normStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(checkAnagram("LISTEN", "silent")); // true
console.log(checkAnagram("triangle", "integral")); // true
console.log(checkAnagram("hello", "world")); // false
console.log(checkAnagram("Astronomer", "Moon starer")); // true
console.log(checkAnagram("debit card", "bad credit")); // true
console.log(checkAnagram("Alert", "later")); // true
console.log(checkAnagram("Car", "tar")); // false
