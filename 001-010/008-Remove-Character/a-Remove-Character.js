function removeCharacter(str, char) {
  if (!str) return "";
  if (!char) return str;
  if (char.length > 1) {
    char = char[0];
  }

  return str.split(char).join("");
}

console.log(removeCharacter("banana", "a")); // "bnn"
console.log(removeCharacter("", "a")); // ""
console.log(removeCharacter("banana", "")); // "banana"
console.log(removeCharacter("banana", "banana")); // "anana"
console.log(removeCharacter("hello world", "l")); // "heo word"
console.log(removeCharacter("aaaaaaaa", "a")); // ""
