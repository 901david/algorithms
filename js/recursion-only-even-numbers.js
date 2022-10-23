/* Use recusion to accept an array of numbers and return a new array of evens only */

const getEvensHelper = (nums, results = []) => {
  if (nums.length === 0) return results;
  const nextNum = nums.shift();
  if (nextNum % 2 === 0) results.push(nextNum);
  return getEvensHelper(nums, results);
};

exports.getEvens = getEvensHelper;
