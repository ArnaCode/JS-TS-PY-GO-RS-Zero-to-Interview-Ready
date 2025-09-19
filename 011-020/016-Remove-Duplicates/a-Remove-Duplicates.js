// Solution 1 - set()
function removeDuplicates1(arr) {
  return [...new Set(arr)];
}

// Solution 2: filter() + indexOf()
function removeDuplicates2(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}

// Solution 3: reduce() + includes()
function removeDuplicates3(arr) {
  return arr.reduce((unique, element) => {
    return unique.includes(element) ? unique : [...unique, element];
  }, []);
}

const testArrayNumber = [1, 2, 2, 3, 3, 4];
console.log("Original - Number:", testArrayNumber);
console.log("Solution 1 (Set):", removeDuplicates1(testArrayNumber));
console.log("Solution 2 (filter):", removeDuplicates2(testArrayNumber));
console.log("Solution 3 (reduce):", removeDuplicates3(testArrayNumber));

const testArrayString = ["a", "a", "b", "c", "a", "c", "b"];
console.log("\n Original - String:", testArrayString);
console.log("Solution 1 (Set):", removeDuplicates1(testArrayString));
console.log("Solution 2 (filter):", removeDuplicates2(testArrayString));
console.log("Solution 3 (reduce):", removeDuplicates3(testArrayString));
