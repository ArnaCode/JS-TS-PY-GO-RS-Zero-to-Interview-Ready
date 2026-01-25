def flatten_array(arr):
    result = []

    for element in arr:
        if isinstance(element, list):
            # extend([2, [3, 4], 5]) =>[2, [3, 4], 5]
            result.extend(flatten_array(element))
        else:
            # append([1,2,3]) => result = [[1,2,3]]
            result.append(element)

    return result


input_arr = [1, [2, [3, 4], 5], 6]
output = flatten_array(input_arr)

print("Input:", input_arr)
print("Output:", output)

print(flatten_array([1, 2, 3]))
print(flatten_array([[[[1]]]]))
print(flatten_array([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]))
print(flatten_array([]))
print(flatten_array([1, [], [2, []], 3]))
