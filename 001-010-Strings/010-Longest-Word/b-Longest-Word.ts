function findLongestWords(str: string): string {
  const splittedWords: string[] = str.split(/\s+/);
  const words: string[] = [];

  for (let i = 0; i < splittedWords.length; i++) {
    if (splittedWords[i].length > 0) {
      words.push(splittedWords[i]);
    }
  }

  //   console.log("Words Array", words);

  if (words.length === 0) return "Input Cannot be Empty";

  let maxLength: number = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  //   console.log("maxLength", maxLength);

  let longestWords: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === maxLength) {
      longestWords.push(words[i]);
    }
  }

  //   console.log("All longest words", longestWords);

  const uniqueLongestWords: string[] = [];
  for (let i = 0; i < longestWords.length; i++) {
    let isDuplicate: boolean = false;

    for (let j = 0; j < uniqueLongestWords.length; j++) {
      if (longestWords[i] === uniqueLongestWords[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueLongestWords.push(longestWords[i]);
    }
  }

  let result: string = "";
  for (let i = 0; i < uniqueLongestWords.length; i++) {
    if (i === 0) {
      result = uniqueLongestWords[i];
    } else {
      result = result + ", " + uniqueLongestWords[i];
    }
  }

  return result;
}

// const input = "The quick brown fox jumps over the lazy dog";
// const input = "hello world typescript";
// const input = "bird bird bird";
// const input = "a bb ccc dddd";
// const input = "  extra     spaces      here       123456789       ";
// const input = "";
const input = "       ";
const output = findLongestWords(input);

console.log(`Input: "${input}"`);
console.log(`Output: "${output}"`);
