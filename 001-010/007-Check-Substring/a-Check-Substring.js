function isSubstring(inputText, testPattern) {
  //   return inputText.includes(testPattern);
  return inputText.toLowerCase().includes(testPattern.toLowerCase());
}

console.log(isSubstring("Programming Languages", "Program")); // true
console.log(isSubstring("Programming Languages", "Language")); // true
console.log(isSubstring("Programming Languages", "ss")); // false
console.log(isSubstring("Programming Languages", "RAM")); // true
console.log(isSubstring("", "abc")); // false
console.log(isSubstring("abc", "")); // true
