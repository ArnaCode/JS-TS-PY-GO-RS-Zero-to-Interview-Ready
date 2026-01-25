def rotate_array(arr, n):
    if len(arr) == 0 or n == 0:
        return arr[:]

    n = n % len(arr)

    return arr[-n:] + arr[:-n]


# ========== TEST CASES ==========
print("=" * 50)
print("MAIN SOLUTION - List Slicing")
print("=" * 50)

# Test Case 1: Original Example
input_arr = [1, 2, 3, 4]
rotate_by = 1
result = rotate_array(input_arr, rotate_by)
print(f"Input: {input_arr}")
print(f"Rotate right by: {rotate_by}")
print(f"Output: {result}")
print("---")

# Test Case 2: Rotate by 2
input_arr = [1, 2, 3, 4, 5]
rotate_by = 2
result = rotate_array(input_arr, rotate_by)
print(f"Input: {input_arr}")
print(f"Rotate right by: {rotate_by}")
print(f"Output: {result}")
print("---")

# Test Case 3: Rotate more than array length
input_arr = [1, 2, 3]
rotate_by = 4  # Should be same as rotating by 1
result = rotate_array(input_arr, rotate_by)
print(f"Input: {input_arr}")
print(f"Rotate right by: {rotate_by}")
print(f"Output: {result}")
print("---")

# Test Case 4: Single element
input_arr = [1]
rotate_by = 5
result = rotate_array(input_arr, rotate_by)
print(f"Input: {input_arr}")
print(f"Rotate right by: {rotate_by}")
print(f"Output: {result}")
print("---")

# Test Case 5: Empty array
input_arr = []
rotate_by = 3
result = rotate_array(input_arr, rotate_by)
print(f"Input: {input_arr}")
print(f"Rotate right by: {rotate_by}")
print(f"Output: {result}")
print("---")

# Test Case 6: No rotation (n = 0)
input_arr = [1, 2, 3, 4]
rotate_by = 0
result = rotate_array(input_arr, rotate_by)
print(f"Input: {input_arr}")
print(f"Rotate right by: {rotate_by}")
print(f"Output: {result}")
print("---")
