function capFirstLetter(str) {
    var trimmedStr = str.trim();
    if (trimmedStr === "")
        return "";
    var result = [];
    var capitalizeNext = true;
    var prevWasSpace = false;
    for (var _i = 0, trimmedStr_1 = trimmedStr; _i < trimmedStr_1.length; _i++) {
        var char = trimmedStr_1[_i];
        if (char === " ") {
            if (!prevWasSpace) {
                result.push(" ");
                prevWasSpace = true;
                capitalizeNext = true;
            }
        }
        else {
            if (capitalizeNext) {
                result.push(char.toUpperCase());
                capitalizeNext = false;
            }
            else {
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
var inputStr = " ";
var output = capFirstLetter(inputStr);
console.log(output);
