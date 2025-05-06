def is_substring(text: str, pattern: str) -> bool:
    # return pattern in text
    return pattern.lower() in text.lower()


print(is_substring("Programming Languages", "Program"))
# true
print(is_substring("Programming Languages", "Language"))
# true
print(is_substring("Programming Languages", "ss"))
# false
print(is_substring("Programming Languages", "RAM"))
# true
print(is_substring("", "abc"))
# false
print(is_substring("abc", ""))
# true
