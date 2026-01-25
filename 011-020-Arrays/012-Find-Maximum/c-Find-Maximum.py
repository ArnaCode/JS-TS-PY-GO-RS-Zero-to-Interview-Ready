def find_max(arr):
    if len(arr) == 0:
        return 0

    numbers = [num for num in arr if isinstance(num, (int, float))]

    if len(numbers) == 0:
        return "You need to pass numbers"

    for item in arr:
        if isinstance(item, str):
            try:
                numbers.append(int(item))
            except ValueError:
                pass

    return max(numbers)


print("=== Test Cases ===")
print("Normal array [10, 4, 2, 23, 15]:", find_max([10, 4, 2, 23, 15]))
# 23
print("Empty array []:", find_max([]))
# 0
print("All strings ['apple', 'banana']:", find_max(["apple", "banana"]))
# "You need to pass numbers"
print("Mixed [10, 'hello', 23, '150', 5]:", find_max([10, "hello", 23, "150", 5]))
# 150
print("Floats and ints [3.14, 7, 2.5, 12, 8.9]:", find_max([3.14, 7, 2.5, 12, 8.9]))
# 12
print(
    "Floats and strings [1.5, 'test', 4.7, 'hello', 2.3]:",
    find_max([1.5, "test", 4.7, "hello", 2.3]),
)
# 4.7
