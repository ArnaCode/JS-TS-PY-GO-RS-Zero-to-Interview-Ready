function capFirstLetter(str) {
  const trimmedStr = str.trim();
  if (trimmedStr === "") return "";

  return trimmedStr
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// const inputStr = "cosmic        radiations";
// const inputStr = "    cosmiC        radiaTionS   ";
// const inputStr = "";
const inputStr = " ";
const outputStr = capFirstLetter(inputStr);
console.log(outputStr);
