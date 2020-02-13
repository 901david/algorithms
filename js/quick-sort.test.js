const { quickSort, pivot, getRandomValueBetween } = require("./quick-sort");

describe("Quick Sort Alg", () => {
  test("should sort correctly", () => {
    const sorted = quickSort([3, 5, 1, 2, 4]);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("getRandomValueBetween", () => {
  test("should return random value between correct range", () => {
    const val = getRandomValueBetween(1, 10);
    console.log(val);
    expect(val >= 1 && val <= 10).toEqual(true);
  });
});

describe("Pivot method", () => {
  test("should Return array in correct order", () => {
    const testData = [4, 3, 6, 2, 8];
    const pivotIdx = pivot(testData, 0, testData.length - 1, 2);

    expect(pivotIdx).toEqual(3);
    testData.slice(0, pivotIdx).map(val => expect(val < 6));
    testData.slice(pivotIdx).map(val => expect(val > 6));
  });

  test("should Return correct index", () => {
    const testData = [4, 3, 6, 2, 8];
    const pivotIdx = pivot(testData, 0, testData.length - 1, 2);

    expect(pivotIdx).toEqual(3);
    expect(testData.slice(0, pivotIdx).length).toEqual(3);
    expect(testData[testData.length - 1]).toEqual(8);
  });

  test("should Return correct index", () => {
    const testData = [4, 3, 9, 10, 3, 5, 6, 2, 8];
    const pivotIdx = pivot(testData, 0, testData.length - 1, 6);

    expect(pivotIdx).toEqual(5);
    testData.slice(0, pivotIdx).map(val => expect(val < 6));
    testData.slice(pivotIdx).map(val => expect(val > 6));
  });
});
