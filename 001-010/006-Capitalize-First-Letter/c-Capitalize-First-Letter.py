def cap_first_letter(str):
    trimmed_str = str.strip()

    if trimmed_str == "":
        return ""

    words = trimmed_str.split()
    capped_words = [word.capitalize() for word in words]

    return " ".join(capped_words)


# input_str = "cosmic        radiations"
# input_str = "    cosmiC        radiaTionS   "
# input_str = ""
input_str = " "
output = cap_first_letter(input_str)
print(output)
