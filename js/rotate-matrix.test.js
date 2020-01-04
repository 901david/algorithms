const { rotateMatrix, inPlaceRotateMatrix } = require("./rotate-matrix");

describe("Rotate Matrix", () => {
  test("it should return the correct values of a 90 degree rotated matrix when not transformed in place", () => {
    const input = [
      [1, 2, 3],
      [6, 7, 8],
      [11, 12, 13]
    ];
    const output = [
      [11, 6, 1],
      [12, 7, 2],
      [13, 8, 3]
    ];
    expect(rotateMatrix(input)).toEqual(output);
  });

  test("it should return the correct values of a 90 degree rotated matrix when transformed in place", () => {
    const input = [
      [1, 2, 3],
      [6, 7, 8],
      [11, 12, 13]
    ];
    const output = [
      [11, 6, 1],
      [12, 7, 2],
      [13, 8, 3]
    ];
    expect(inPlaceRotateMatrix(input)).toEqual(output);
  });
});
