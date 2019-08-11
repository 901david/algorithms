const spiralMatrixGenerator = n => {
  const results = Array(n)
    .fill(0)
    .map(_ => []);

  let beginRow = 0;
  let endRow = n - 1;
  let beginCol = 0;
  let endCol = n - 1;
  let counter = 1;

  while (beginCol <= endCol && beginRow <= endRow) {
    for (let i = beginCol; i <= endCol; i++) {
      results[beginRow][i] = counter;
      counter++;
    }
    beginRow++;

    for (let i = beginRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= beginCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= beginRow; i--) {
      results[i][beginCol] = counter;
      counter++;
    }
    beginCol++;
  }
  return results;
};

console.log(spiralMatrixGenerator(4));
