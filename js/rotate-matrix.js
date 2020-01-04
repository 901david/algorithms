/* Rotate Matrix - Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer
write a method to rotate the image by 90 degrees.  Can you do this in place? */

//Not in place
// const rotateMatrix = matrix => {
//   const results = [];
//   for (let i = 0; i < matrix[0].length; i++) {
//     const row = [];
//     for (let j = 0; j < matrix.length; j++) {
//       row.unshift(matrix[j][i]);
//     }
//     results.push(row);
//   }
//   return results;
// };

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

const inPlaceRotateMatrix = matrix => {};

module.exports = { rotateMatrix, inPlaceRotateMatrix };
