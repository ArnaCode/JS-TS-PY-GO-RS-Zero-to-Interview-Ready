function checkAnagram(str1: string, str2: string): boolean {
  const normStr1 = str1.toLowerCase().replace(/\s/g, "");
  const normStr2 = str2.toLowerCase().replace(/\s/g, "");

  if (normStr1.length !== normStr2.length) return false;

  let arr1: string[] = [];
  let arr2: string[] = [];

  // The way the split method works
  for (let i = 0; i < normStr1.length; i++) {
    arr1[i] = normStr1[i];
    arr2[i] = normStr2[i];
  }

  //   console.log("inputStr1 converted to array1", arr1);
  //   console.log("inputStr2 converted to array2", arr2);

  // Bubble Sort Algorithm
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        let temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
      }
      if (arr2[j] > arr2[j + 1]) {
        let temp = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j + 1] = temp;
      }
    }
  }

  //   console.log("Sorted Array1", arr1);
  //   console.log("Sorted Array2", arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(checkAnagram("LISTEN", "silent")); // true
console.log(checkAnagram("triangle", "integral")); // true
console.log(checkAnagram("hello", "world")); // false
console.log(checkAnagram("Astronomer", "Moon starer")); // true
console.log(checkAnagram("debit card", "bad credit")); // true
console.log(checkAnagram("Alert", "later")); // true
console.log(checkAnagram("Car", "tar")); // false
