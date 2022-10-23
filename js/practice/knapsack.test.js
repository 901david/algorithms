const knapSack = require('./knapsack');

describe('Knapsack', () => {
  test('should return  correct answer', () => {
    const items = [
      { weight: 10, value: 60 },
      { weight: 20, value: 100 },
      { weight: 30, value: 120 },
    ];
    const capacity = 50;
    const results = knapSack(items, capacity);
    expect(results).toEqual(220);
  });
});
