def sum_elements(arr):
    if len(arr) == 0:
        return 0

    numbers = [item for item in arr if isinstance(item, (int, float))]

    if len(numbers) == 0:
        has_strings = any(isinstance(item, str) for item in arr)
        if has_strings:
            return "Array contains only strings, please add numbers to sum."
        return 0

    return sum(numbers)


print("=== Test Cases ===")

# Basic test
print("Numbers only [1, 2, 3, 4]:", sum_elements([1, 2, 3, 4]))
# Expected: 10

# Mixed with strings
print("Mixed [1, 'hello', 3, 'world']:", sum_elements([1, "hello", 3, "world"]))
# Expected: 4

# Mixed with strings
print("Mixed [11.5025, '', 83.12, '   ']:", sum_elements([11.5025, "", 83.12, "   "]))
# Expected: 4

# Only strings
print("Only strings ['hello', 'world']:", sum_elements(["hello", "world"]))
# Expected: message

# Empty array
print("Empty array []:", sum_elements([]))
# Expected: 0

# Single number
print("Single number [5]:", sum_elements([5]))
# Expected: 5

# Single string
print("Single string ['hello']:", sum_elements(["hello"]))
# Expected: message
