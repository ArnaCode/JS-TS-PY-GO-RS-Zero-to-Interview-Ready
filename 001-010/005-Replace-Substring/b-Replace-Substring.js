var inputStr = "Programming";
var toReplace = "r";
var replacement = "-";
function customReplaceAll(str, search, replace) {
    var result = "";
    var i = 0;
    while (i < str.length) {
        // startIndex -----> inclusive
        // endIndex -----> exclusive
        if (str.substring(i, i + search.length) === search) {
            result += replace;
            i += search.length;
        }
        else {
            result += str[i];
            i++;
        }
    }
    return result;
}
var subStr = customReplaceAll(inputStr, toReplace, replacement);
console.log(subStr);
