/* Zero matrix - look through a matrix and any value where the value is zero should convert that entire column and row to zeros in the final resultss */

const zeroMatrix = matrix => {
  const rows = new Set();
  const columns = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        columns.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (rows.has(i)) {
      matrix[i] = Array(matrix[i].length).fill(0);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (columns.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

module.exports = zeroMatrix;
