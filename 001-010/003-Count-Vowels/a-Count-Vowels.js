const inputStr = "ProgrammingeE";
const vowels = "aeiouAEIOU";

let vowelCount = 0;

for (const char of inputStr) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}
console.log(vowelCount);
