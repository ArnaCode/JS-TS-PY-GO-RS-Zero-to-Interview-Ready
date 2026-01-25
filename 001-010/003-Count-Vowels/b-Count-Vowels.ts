function countVowels(inputStr: string): number {
  const vowels = ["a", "e", "i", "o", "u"];

  let vowelCount = 0;

  for (let i = 0; i < inputStr.length; i++) {
    if (vowels.indexOf(inputStr[i].toLowerCase()) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
}

const result = countVowels("ProgrammingeE");
console.log(result);
