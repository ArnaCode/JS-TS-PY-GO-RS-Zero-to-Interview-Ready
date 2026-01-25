function removeFalsy(
  arr: (number | string | boolean | null | undefined)[]
): (number | string | boolean)[] {
  const result: (number | string | boolean)[] = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value) {
      result[result.length] = value;
    }
  }

  return result;
}

const result = removeFalsy([0, 1, false, 2, "", 3, null, undefined]);
console.log(result);
