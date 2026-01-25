function isSubstring(inputText: string, testPattern: string): boolean {
  if (testPattern === "") return true;
  if (inputText.length < testPattern.length) return false;

  const text = inputText.toLowerCase();
  const pattern = testPattern.toLowerCase();

  for (let i = 0; i <= text.length - pattern.length; i++) {
    let match = true;

    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}

console.log(isSubstring("Programming Languages", "Program")); // true
console.log(isSubstring("Programming Languages", "Language")); // true
console.log(isSubstring("Programming Languages", "ss")); // false
console.log(isSubstring("Programming Languages", "RAM")); // true
console.log(isSubstring("", "abc")); // false
console.log(isSubstring("abc", "")); // true
