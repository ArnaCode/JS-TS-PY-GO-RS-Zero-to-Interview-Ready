function findLongestWords(str) {
  const words = str.split(/\s+/).filter((word) => word.length > 0);
  //   console.log("Words Array", words);

  if (words.length === 0) return "Input Cannot be Empty";

  const maxLength = Math.max(...words.map((word) => word.length));
  //   console.log("MaxLength", maxLength);

  const longestWords = words.filter((word) => word.length === maxLength);
  //   console.log("All long words", longestWords);

  const uniqueLongestWords = [...new Set(longestWords)];
  //   console.log("Set Itself", "---", new Set(longestWords), "---");
  //   console.log("Set Converted into an array", uniqueLongestWords);

  return uniqueLongestWords.join(", ");
}

// const input = "The quick brown fox jumps over the lazy dog";
// const input = "hello world javascript";
// const input = "bird bird bird";
// const input = "a bb ccc dddd";
// const input = "  extra     spaces      here       123456789       ";
const input = "";
// const input = "       ";
const output = findLongestWords(input);

console.log(`Input: "${input}"`);
console.log(`Output: "${output}"`);
