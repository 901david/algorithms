/* Write a function that determines if two strings could be permutated into a palindrome */

const isPermutatedPalindrome = str => {
  const map = str
    .replace(/\s/g, "")
    .split("")
    .reduce((map, char) => {
      char = char.toLowerCase();
      if (map.has(char)) map.set(char, map.get(char) + 1);
      else map.set(char, 1);
      return map;
    }, new Map());
  let oddVals = 0;
  map.forEach((value, key) => {
    if (value % 2 !== 0) oddVals++;
  });
  return oddVals < 2;
};

module.exports = isPermutatedPalindrome;
