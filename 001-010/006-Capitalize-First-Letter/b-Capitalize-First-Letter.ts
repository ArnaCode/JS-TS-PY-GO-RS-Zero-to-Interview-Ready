function capFirstLetter(str: string): string {
  const trimmedStr = str.trim();
  if (trimmedStr === "") return "";

  let result: string[] = [];

  let capitalizeNext = true;
  let prevWasSpace = false;

  for (const char of trimmedStr) {
    if (char === " ") {
      if (!prevWasSpace) {
        result.push(" ");
        prevWasSpace = true;
        capitalizeNext = true;
      }
    } else {
      if (capitalizeNext) {
        result.push(char.toUpperCase());
        capitalizeNext = false;
      } else {
        result.push(char.toLowerCase());
      }
      prevWasSpace = false;
    }
  }
  // ["C", "o", "s", "m", "o", "s", " ", ...]

  return result.join("");
}

// const inputStr = "cosmic        radiations";
// const inputStr = "    cosmiC        radiaTionS   ";
// const inputStr = "";
const inputStr = " ";
const output = capFirstLetter(inputStr);
console.log(output);
