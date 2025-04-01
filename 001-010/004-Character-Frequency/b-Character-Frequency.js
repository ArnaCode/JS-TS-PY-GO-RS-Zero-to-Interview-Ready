// const inputStr = "Programming Languages";
var inputStr = "aaaabbbccd";
var frequency = {};
for (var _i = 0, inputStr_1 = inputStr; _i < inputStr_1.length; _i++) {
    var char = inputStr_1[_i];
    if (!frequency[char]) {
        frequency[char] = 0;
    }
    frequency[char]++;
}
console.log(frequency);
