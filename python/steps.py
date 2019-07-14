def stepBuilder(n):
    for row in range(n):
        stair = ''
        for column in range(n):
            stair += '#' if column <= row else ' '
        print(stair)


stepBuilder(4)


def stepBuilderRecursive(n, row=0, column=0, stair=''):
    if row == n:
        return
    if column == n:
        print(stair)
        return stepBuilderRecursive(n, row + 1, 0, '')
    stair += '#' if column <= row else ' '
    return stepBuilderRecursive(n, row, column + 1, stair)


stepBuilderRecursive(4)
