# Solution 1: concat with + operator
def merge_two_arrays_1(arr1, arr2):
    return arr1 + arr2


# Solution 2: * unpacking operator
def merge_two_arrays_2(arr1, arr2):
    return [*arr1, *arr2]


# Solution 3: extend()
def merge_two_arrays_3(arr1, arr2):
    # creates a shallow copy
    merged_list = arr1[:]
    merged_list.extend(arr2)
    return merged_list


input1 = [1, 3, 5]
input2 = [2, 4, 6]

print("Solution 1 (+ operator):", merge_two_arrays_1(input1, input2))
print("Solution 2 (unpacking *):", merge_two_arrays_2(input1, input2))
print("Solution 3 (extend):", merge_two_arrays_3(input1, input2))
