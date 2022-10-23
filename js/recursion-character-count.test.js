const { characterCount } = require('./recursion-character-count');

describe('Character count unit tests', () => {
  test('should return correct index value', () => {
    const data = ['a', 'asdas', 'asd', 'sd', 'd'];
    const expectedResult = 12;
    expect(characterCount(data)).toEqual(expectedResult);
  });

  test('should return correct index value', () => {
    const data = ['a', 'asd', 'sd', 'd'];
    const expectedResult = 7;
    expect(characterCount(data)).toEqual(expectedResult);
  });
});
