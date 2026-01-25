def remove_character(str, char):
    if not str:
        return ""

    if not char:
        return str

    if len(char) > 1:
        char = char[0]

    # Delimiter === char
    return "".join(str.split(char))


print(remove_character("banana", "a"))
# "bnn"
print(remove_character("", "a"))
# ""
print(remove_character("banana", ""))
# "banana"
print(remove_character("banana", "banana"))
# "anana"
print(remove_character("hello world", "l"))
# "heo word"
print(remove_character("aaaaaaaa", "a"))
# ""
