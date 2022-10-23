/* Use recusion to accept an array of numbers and return a new array of evens only */

const getTriangularNumberAtHelper = (N, index = 0, value = 0) => {
  if (index === N) return value;
  const newValue = index + 1 + value;
  return getTriangularNumberAtHelper(N, index + 1, newValue);
};

exports.getTriangularNumberAt = getTriangularNumberAtHelper;
