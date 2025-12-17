def remove_falsy(arr):
    return list(filter(bool, arr))


result = remove_falsy([0, 1, False, 2, "", 3, None])
print(result)
