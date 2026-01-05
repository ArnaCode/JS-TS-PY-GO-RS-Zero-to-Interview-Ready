def find_intersection(arr1, arr2):
    return list(set(arr1) & set(arr2))


input_1 = [1, 2, 3, 4]
input_2 = [2, 3, 5]
result = find_intersection(input_1, input_2)
print(result)
