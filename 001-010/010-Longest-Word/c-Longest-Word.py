def find_longest_words(str):
    words = [word for word in str.split() if len(word) > 0]

    if len(words) == 0:
        return "Input Cannot be Empty"

    max_length = max(len(word) for word in words)

    longest_words = [word for word in words if len(word) == max_length]

    unique_longest_words = list(set(longest_words))

    return ", ".join(unique_longest_words)


# input = "The quick brown fox jumps over the lazy dog"
# input = "hello world pythonistas"
# input = "bird bird bird"
# input = "a bb ccc dddd"
# input = "  extra     spaces      here       123456789       "
# input = ""
input = "       "
output = find_longest_words(input)

print(f'Input: "{input}"')
print(f'Output: "{output}"')
