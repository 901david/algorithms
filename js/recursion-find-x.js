/* Use recusion to accept an array of numbers and return a new array of evens only */

const findXHelper = (str, index = 0) => {
  if (index === str.length) return -1;
  if (str[index] === 'x') return index;
  return findXHelper(str, index + 1);
};

exports.findX = findXHelper;
