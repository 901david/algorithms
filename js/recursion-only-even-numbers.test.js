const { getEvens } = require('./recursion-only-even-numbers');

describe('Get evens unit tests', () => {
  const testData = [7, 3, 9, 5, 8, 2, 0, 2, 6, 9, 10, 222222];
  test('should return correct index value', () => {
    const expectedResult = [8, 2, 0, 2, 6, 10, 222222];
    expect(getEvens(testData)).toEqual(expectedResult);
  });
});
