def reverse_array(arr):
    arr.reverse()
    return arr


# Test Case 1: Normal case with given input
print(
    "=== TEST CASE 1: Input === [1, 2, 3, 4, 5] --- Output === ",
    reverse_array([1, 2, 3, 4, 5]),
)  # Prints: [5, 4, 3, 2, 1]

# Test Case 2: Empty array
print("=== TEST CASE 2: Input === [] --- Output === ", reverse_array([]))  # Prints: []

# Test Case 3: Single element array
print(
    "=== TEST CASE 3: Input === [42] --- Output === ", reverse_array([42])
)  # Prints: [42]

# Test Case 4: Two elements
print(
    "=== TEST CASE 4: Input === ['first', 'second'] --- Output === ",
    reverse_array(["first", "second"]),
)  # Prints: ['second', 'first']

# Test Case 5: Array with duplicates
print(
    "=== TEST CASE 5: Input === [1, 2, 2, 3, 2, 1] --- Output === ",
    reverse_array([1, 2, 2, 3, 2, 1]),
)  # Prints: [1, 2, 3, 2, 2, 1]

# Test Case 6: Mixed data types
print(
    "=== TEST CASE 6: Input === [1, 'hello', True, None] --- Output === ",
    reverse_array([1, "hello", True, None]),
)  # Prints: [None, True, 'hello', 1]
