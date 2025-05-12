function removeCharacter(str: string, char: string): string {
  if (!str) return "";
  if (!char) return str;
  if (char.length > 1) {
    char = char[0];
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      result += str[i];
    }
  }
  return result;

  /*
    i=0       banana=6
    0    <      6       loops runs
    1    <      6       loops runs
    2    <      6       loops runs
    3    <      6       loops runs
    4    <      6       loops runs
    5    <      6       loops runs
    6    <      6       loops stop
    
    */
}

console.log(removeCharacter("banana", "a")); // "bnn"
console.log(removeCharacter("", "a")); // ""
console.log(removeCharacter("banana", "")); // "banana"
console.log(removeCharacter("banana", "banana")); // "anana"
console.log(removeCharacter("hello world", "l")); // "heo word"
console.log(removeCharacter("aaaaaaaa", "a")); // ""
