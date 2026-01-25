def round_to_decimal_v1(num, places):
    return round(num, places)


print(round_to_decimal_v1(3.14159, 2))
print(round_to_decimal_v1(2.71828, 3))
print(round_to_decimal_v1(9.5, 0))


def round_to_decimal_v2(num, places):
    multiplier = 10**places
    shifted = multiplier * num
    rounded = round(shifted)
    return rounded / multiplier


print(round_to_decimal_v2(3.14159, 2))
print(round_to_decimal_v2(2.71828, 2))
print(round_to_decimal_v2(9.5, 0))
