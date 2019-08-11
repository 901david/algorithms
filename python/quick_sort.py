import random

list_to_sort = [5, 3, 2, 1, 4]


def partition(arr, low, high):
    i = low-1
    pivot = random_selector(arr, low, high)

    for j in range(low, high):
        if arr[j] <= pivot:
            i = i+1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i+1


def random_selector(arr, low, high):
    return random.randint(low, high)


def quick_sort(arr, low, high):
    if low < high:

        pi = partition(arr, low, high)
        quick_sort(arr, low, pi-1)
        quick_sort(arr, pi+1, high)


print(quick_sort(list_to_sort, 0, len(list_to_sort) - 1))
print(list_to_sort)
