const { getTriangularNumberAt } = require('./recursion-triangular-numbers');

describe('Get Triangular Number At unit tests', () => {
  test('should return correct value', () => {
    const testData = 7;
    const expectedResult = 28;
    expect(getTriangularNumberAt(testData)).toEqual(expectedResult);
  });

  test('should return correct value', () => {
    const testData = 3;
    const expectedResult = 6;
    expect(getTriangularNumberAt(testData)).toEqual(expectedResult);
  });

  test('should return correct value', () => {
    const testData = 5;
    const expectedResult = 15;
    expect(getTriangularNumberAt(testData)).toEqual(expectedResult);
  });
});
