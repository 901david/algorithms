import math


def pyramidBuilder(n):
    midpoint = math.floor((2 * n - 1) / 2)
    for row in range(n):
        level = ''
        for column in range(2 * n - 1):
            level += '#' if midpoint - row <= column and midpoint + row >= column else ' '
        print(level)


def pyramidBuilderRecursive(n, row=0, column=0, level=''):
    midpoint = math.floor((2 * n - 1) / 2)
    if row == n:
        return
    if column == 2 * n - 1:
        print(level)
        return pyramidBuilderRecursive(n, row + 1, 0, '')
    level += '#' if midpoint - row <= column and midpoint + row >= column else ' '
    return pyramidBuilderRecursive(n, row, column + 1, level)


pyramidBuilderRecursive(4)
