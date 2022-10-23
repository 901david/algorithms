const { getUniquePaths } = require('./recursion-unique-paths');

describe('getUniquePaths At unit tests', () => {
  test('should return correct value', () => {
    const expectedResult = 1;
    expect(getUniquePaths(1, 1)).toEqual(expectedResult);
  });

  test('should return correct value', () => {
    const expectedResult = 111112;
    expect(getUniquePaths(3, 7)).toEqual(expectedResult);
  });
});
