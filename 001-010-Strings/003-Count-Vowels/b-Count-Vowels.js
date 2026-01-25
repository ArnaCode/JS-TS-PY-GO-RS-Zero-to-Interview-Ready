function countVowels(inputStr) {
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelCount = 0;
    for (var i = 0; i < inputStr.length; i++) {
        if (vowels.indexOf(inputStr[i].toLowerCase()) !== -1) {
            vowelCount++;
        }
    }
    return vowelCount;
}
var result = countVowels("ProgrammingeE");
console.log(result);
