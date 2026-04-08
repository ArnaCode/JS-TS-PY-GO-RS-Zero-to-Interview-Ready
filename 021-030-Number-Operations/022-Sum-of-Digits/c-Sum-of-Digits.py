def sum_of_digits(num):
    num_str = str(num)

    # sum(1, 2, 3) = 6
    return sum(int(digit) for digit in num_str)


print(sum_of_digits(123))
print(sum_of_digits(9875))
print(sum_of_digits(9))
