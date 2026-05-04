def reverse_number(num):
    sign = -1 if num < 0 else 1

    absolute = abs(num)

    reversed = int(str(absolute)[::-1])

    return reversed * sign


print(reverse_number(12345))
print(reverse_number(-456))
