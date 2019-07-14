arr1 = [1, 2, 5, 8, 9]
arr2 = [5, 8, 9, 23]


def iterative_array_merger(arr1, arr2):
    merged = []
    while len(arr1) and len(arr2):
        if arr1[0] < arr2[0]:
            merged.append(arr1.pop(0))
        else:
            merged.append(arr2.pop(0))

    return [*merged, *arr1, *arr2]


#print(iterative_array_merger(arr1, arr2))

def recursive_array_merge(arr1, arr2, merged=[]):
    if len(arr1) and len(arr2):
        if arr1[0] < arr2[0]:
            merged.append(arr1.pop(0))
        else:
            merged.append(arr2.pop(0))
        return recursive_array_merge(arr1, arr2, merged)

    return [*merged, *arr1, *arr2]


print(recursive_array_merge(arr1, arr2))
