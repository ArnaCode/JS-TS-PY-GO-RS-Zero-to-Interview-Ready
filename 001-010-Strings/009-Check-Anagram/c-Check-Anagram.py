def check_anagram(str1, str2):
    norm_str1 = str1.lower().replace(" ", "")
    norm_str2 = str2.lower().replace(" ", "")

    if len(norm_str1) != len(norm_str2):
        return False

    sorted_str1 = "".join(sorted(norm_str1))
    sorted_str2 = "".join(sorted(norm_str2))

    return sorted_str1 == sorted_str2


print(check_anagram("LISTEN", "silent"))
# true
print(check_anagram("triangle", "integral"))
# true
print(check_anagram("hello", "world"))
# false
print(check_anagram("Astronomer", "Moon starer"))
# true
print(check_anagram("debit card", "bad credit"))
# true
print(check_anagram("Alert", "later"))
# true
print(check_anagram("Car", "tar"))
# false
