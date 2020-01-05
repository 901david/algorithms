const zeroMatrix = require("./zero-matrix");

describe("Zero Matrix", () => {
  test("it should return the correct values of zeros in matrix", () => {
    const input = [
      [1, 2, 3],
      [6, 0, 8],
      [11, 12, 13]
    ];
    const output = [
      [1, 0, 3],
      [0, 0, 0],
      [11, 0, 13]
    ];
    expect(zeroMatrix(input)).toEqual(output);
  });

  test("it should return the correct values of zeros in matrix", () => {
    const input = [
      [1, 2, 3, 0, 5, 0, 6],
      [0, 7, 8, 3, 5, 7, 9],
      [1, 1, 1, 1, 4, 2, 1]
    ];
    const output = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 4, 0, 1]
    ];
    expect(zeroMatrix(input)).toEqual(output);
  });
});
