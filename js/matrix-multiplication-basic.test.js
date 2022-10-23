const { mMult } = require('./matrix-multiplication-basic.js');

describe('Matrix Multiplication', () => {
  it('should multiple correctly', () => {
    const m1 = [[1], [4]];
    const m2 = [[7], [10]];
    const answer = [[17], [68]];
    const results = mMult(m1, m2);
    expect(results).toEqual(answer);
  });

  it('should multiple correctly more comoplex', () => {
    const m1 = [
      [1, 3],
      [4, 2],
    ];
    const m2 = [
      [7, 1],
      [10, 6],
    ];
    const answer = [
      [10, 19],
      [30, 10],
    ];
    const results = mMult(m1, m2);
    expect(results).toEqual(answer);
  });
});
