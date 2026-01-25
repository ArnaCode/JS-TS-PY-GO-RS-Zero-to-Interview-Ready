input_str = "ProgrammingeE"
vowels = "aeiouAEIOU"

vowel_count = 0

for char in input_str:
    if char in vowels:
        vowel_count += 1

print(vowel_count)
