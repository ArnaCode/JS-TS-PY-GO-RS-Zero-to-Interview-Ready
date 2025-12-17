function removeFalsy(arr) {
  return arr.filter(Boolean);
}

const result = removeFalsy([0, 1, false, 2, "", 3, null, undefined]);
console.log(result);
