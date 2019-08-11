def spiral_matrix_generator(n):
    results = []
    for i in range(n):
        results.append([])

    counter = 1
    beginRow = 0
    endRow = n - 1
    beginCol = 0
    endCol = n - 1

    while beginRow <= endRow and beginCol <= endCol:
        for i in range(beginCol, endCol):
            results[beginRow][i] = counter
            counter += 1
        beginRow += 1
        for i in range(beginRow, endRow):
            results[i][endCol] = counter
            counter += 1
        endCol -= 1
        for i in range(endCol, beginCol, -1):
            results[endRow][i] = counter
            counter += 1
        endRow -= 1
        for i in range(endRow, beginRow, -1):
            results[i][beginCol] = counter
            counter += 1
        beginCol += 1

    return results


print(spiral_matrix_generator(4))
