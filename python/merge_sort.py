import math


def merge(arr1, arr2):
    sorted = []

    while len(arr1) != 0 and len(arr2) != 0:
        if arr1[0] < arr2[0]:
            sorted.append(arr1.pop(0))
        else:
            sorted.append(arr2.pop(0))

    return [*sorted, *arr1, *arr2]


def merge_sort(arr):
    if len(arr) < 2:
        return arr

    halfPoint = math.floor(len(arr) / 2)
    left = arr[:halfPoint]
    right = arr[halfPoint:]

    return merge(merge_sort(left), merge_sort(right))


list_to_sort = [5, 3, 2, 1, 4]

list_to_merge = [7, 2, 4, 1, 10]


print(merge_sort(list_to_sort))
