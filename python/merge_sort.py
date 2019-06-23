import math

def merge(arr1, arr2):
    sorted = []

    while len(arr1) != 0 and len(arr2) != 0:
        print(sorted)
        if arr1[0] < arr2[0]:
            sorted.append(arr1.pop(0))
        else:
            sorted.append(arr2.pop(0))

    return [*sorted, *arr1, *arr2]

def merge_sort(arr):
    array_length = len(arr)
    print(array_length == 1)
    if array_length == 1:
        return arr

    halfPoint = math.floor(array_length / 2)
    left = arr[:halfPoint + 1]
    right = arr[halfPoint:]

    return merge(merge_sort(left), merge_sort(right))

list_to_sort = [5,3,2,1,4]

list_to_merge = [7,2,4,1,10]



print(merge_sort(list_to_sort))
