const { partition, getRandomValue } = require('./partition');

describe('Partition unit tests', () => {
  const testData = [7, 3, 9, 5, 8, 2];

  const calculateAllResults = () => {
    const results = {};
    testData.forEach((data, index) => {
      results[index] = partition([...testData], 0, testData.length - 1, index);
    });

    return results;
  };
  test('should return correct index value', () => {
    const testI = 3;
    const expectedResult = 2;
    expect(partition([...testData], 0, testData.length - 1, testI)).toEqual(
      expectedResult
    );
  });

  test('should return correct index value', () => {
    const testI = 1;
    const expectedResult = 1;
    expect(partition([...testData], 0, testData.length - 1, testI)).toEqual(
      expectedResult
    );
  });

  test('should return correct index value', () => {
    const testI = 0;
    const expectedResult = 3;
    expect(partition([...testData], 0, testData.length - 1, testI)).toEqual(
      expectedResult
    );
  });

  test('should return correct index value', () => {
    const allResults = calculateAllResults();
    const randOne = getRandomValue(0, testData.length - 1);
    const randTwo = getRandomValue(0, testData.length - 1);
    const randThree = getRandomValue(0, testData.length - 1);
    const randFour = getRandomValue(0, testData.length - 1);

    expect(partition([...testData], 0, testData.length - 1, randOne)).toEqual(
      allResults[randOne]
    );

    expect(partition([...testData], 0, testData.length - 1, randOne)).toEqual(
      allResults[randTwo]
    );
    expect(partition([...testData], 0, testData.length - 1, randOne)).toEqual(
      allResults[randThree]
    );
    expect(partition([...testData], 0, testData.length - 1, randOne)).toEqual(
      allResults[randFour]
    );
  });
});
