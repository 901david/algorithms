/* Rotate Matrix - Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer
write a method to rotate the image by 90 degrees.  Can you do this in place? */

const getColumnReversed = (matrix, column) =>
  matrix.map(row => row[column]).reverse();

const rotateMatrix = matrix => {
  const results = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    results.push(getColumnReversed(matrix, i));
  }
  return results;
};

const inPlaceRotateMatrix = matrix => {
  for (let i = 0; i < matrix.length / 2; i++) {
    const last = matrix.length - 1 - i;
    for (let j = i; j < last; j++) {
      const offset = j - i;
      const top = matrix[i][j];

      //   matrix[i][j] = matrix[last - offset][i];
      //   matrix[last - offset][i] = matrix[last][last - offset];
      //   matrix[last][last - offset] = matrix[j][last];
      //   matrix[j][last] = top;
      //Interesting but impossible to read.....
      [
        matrix[i][j],
        matrix[last - offset][i],
        matrix[last][last - offset],
        matrix[j][last]
      ] = [
        matrix[last - offset][i],
        matrix[last][last - offset],
        matrix[j][last],
        top
      ];
    }
  }
  return matrix;
};

module.exports = { rotateMatrix, inPlaceRotateMatrix };
