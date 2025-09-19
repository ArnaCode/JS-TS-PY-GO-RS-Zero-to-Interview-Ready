# Solution 1: dict.fromkeys()
def remove_duplicates_1(arr):
    return list(dict.fromkeys(arr))


# Solution 2: list comprehension
def remove_duplicates_2(arr):
    unique = set()
    # None
    return [x for x in arr if x not in unique and not unique.add(x)]


# Solution 3: enumerate() + for loop
def remove_duplicates_3(arr):
    uniqueArr = []

    # (0, "a"), (1, "a"), (2, "b"), (3, "c") ...
    for index, elem in enumerate(arr):
        if arr.index(elem) == index:
            uniqueArr.append(elem)

    return uniqueArr


test_array_number = [1, 2, 2, 3, 3, 4]
print("Number:", test_array_number)
print("Solution 1:", remove_duplicates_1(test_array_number))
print("Solution 2:", remove_duplicates_2(test_array_number))
print("Solution 3:", remove_duplicates_3(test_array_number))

test_array_string = ["a", "a", "b", "c", "a", "c", "b"]
print("Original - String:", test_array_string)
print("Solution 1:", remove_duplicates_1(test_array_string))
print("Solution 2:", remove_duplicates_2(test_array_string))
print("Solution 3:", remove_duplicates_3(test_array_string))
