const inputStr: string = "Programming";
const toReplace: string = "r";
const replacement: string = "-";

function customReplaceAll(
  str: string,
  search: string,
  replace: string
): string {
  let result: string = "";
  let i: number = 0;

  while (i < str.length) {
    // startIndex -----> inclusive
    // endIndex -----> exclusive
    if (str.substring(i, i + search.length) === search) {
      result += replace;
      i += search.length;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

const subStr: string = customReplaceAll(inputStr, toReplace, replacement);

console.log(subStr);
