const { findX } = require('./recursion-find-x');

describe('Find X At unit tests', () => {
  test('should return correct value', () => {
    const testData = 'skdhiuhqiuwdhkasjhxiudwiuq';
    const expectedResult = testData.indexOf('x');
    expect(findX(testData)).toEqual(expectedResult);
  });

  test('should return correct value', () => {
    const testData = 'xskdhiuhqiuwdhkasjhiudwiuq';
    const expectedResult = testData.indexOf('x');
    expect(findX(testData)).toEqual(expectedResult);
  });

  test('should return correct value', () => {
    const testData = 'skdhiuhqiuwdhkasjhiudwiuq';
    const expectedResult = testData.indexOf('x');
    expect(findX(testData)).toEqual(expectedResult);
  });
});
