def filter_even_numbers_v1(numbers):
    return [num for num in numbers if num % 2 == 0]


def filter_even_numbers_v2(numbers):
    return list(filter(lambda num: num % 2 == 0, numbers))


def is_even(num):
    return num % 2 == 0


def filter_even_numbers_v3(numbers):
    return list(filter(is_even, numbers))


input = [1, 2, 3, 4, 5, 6]
output1 = filter_even_numbers_v1(input)
output2 = filter_even_numbers_v2(input)
output3 = filter_even_numbers_v3(input)
print("List Comprehension:", output1)
print("Filter with Lambda:", output2)
print("Filter with Function:", output3)
