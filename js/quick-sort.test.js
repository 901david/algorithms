const { quickSort, pivot } = require("./quick-sort");

describe("Quick Sort Alg", () => {
  test.skip("should sort correctly", () => {
    const sorted = quickSort([3, 5, 1, 2, 4]);
    expeced(sorted).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Pivot method", () => {
  test.skip("should Return array in correct order", () => {});

  test.skip("should Return correct index", () => {
    const testData = [4, 3, 6, 2, 8];
    const pivotIdx = pivot(testData, 0, testData.length - 1, 2);

    expect(pivotIdx).toEqual(3);
    expect(testData.slice(0, pivotIdx).length).toEqual(3);
    expect(testData[testData.length - 1]).toEqual(8);
  });
});
