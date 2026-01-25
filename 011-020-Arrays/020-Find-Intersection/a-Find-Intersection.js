function findIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

const input1 = [1, 2, 3, 4];
const input2 = [2, 3, 5];
const result = findIntersection(input1, input2);
console.log(result);
