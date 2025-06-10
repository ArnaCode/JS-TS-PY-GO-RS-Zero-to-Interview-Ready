function findLongestWords(str) {
    var splittedWords = str.split(/\s+/);
    var words = [];
    for (var i = 0; i < splittedWords.length; i++) {
        if (splittedWords[i].length > 0) {
            words.push(splittedWords[i]);
        }
    }
    //   console.log("Words Array", words);
    if (words.length === 0)
        return "Input Cannot be Empty";
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    //   console.log("maxLength", maxLength);
    var longestWords = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length === maxLength) {
            longestWords.push(words[i]);
        }
    }
    //   console.log("All longest words", longestWords);
    var uniqueLongestWords = [];
    for (var i = 0; i < longestWords.length; i++) {
        var isDuplicate = false;
        for (var j = 0; j < uniqueLongestWords.length; j++) {
            if (longestWords[i] === uniqueLongestWords[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueLongestWords.push(longestWords[i]);
        }
    }
    var result = "";
    for (var i = 0; i < uniqueLongestWords.length; i++) {
        if (i === 0) {
            result = uniqueLongestWords[i];
        }
        else {
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
var input = "       ";
var output = findLongestWords(input);
console.log("Input: \"".concat(input, "\""));
console.log("Output: \"".concat(output, "\""));
