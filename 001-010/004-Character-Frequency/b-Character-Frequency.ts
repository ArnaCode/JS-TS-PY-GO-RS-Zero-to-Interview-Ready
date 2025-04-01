// const inputStr = "Programming Languages";
const inputStr = "aaaabbbccd";

const frequency: Record<string, number> = {};

for (const char of inputStr) {
  if (!frequency[char]) {
    frequency[char] = 0;
  }
  frequency[char]++;
}

console.log(frequency);
