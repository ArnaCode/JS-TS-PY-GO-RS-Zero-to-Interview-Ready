def largest_digit(num):
    digits = str(num)

    return max(int(digit) for digit in digits)


print(largest_digit(28394))
print(largest_digit(8721802647))
