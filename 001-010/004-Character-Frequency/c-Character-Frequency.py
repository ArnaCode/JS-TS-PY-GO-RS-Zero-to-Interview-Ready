# input_str = "Programming Languages"
input_str = "aaaabbbccd"

frequency = {}

for char in input_str:
    if char not in frequency:
        frequency[char] = 0

    frequency[char] += 1


print(frequency)
