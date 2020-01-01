/* Implement a function that determines if a string has all unique characters */
const isUnique = str => {
  if (typeof str !== "string") throw Error("Must provide a string");
  if (str.length === 0) return true;
  const uniqueChars = new Set();
  for (let char of str) {
    if (uniqueChars.has(char)) return false;
    else uniqueChars.add(char);
  }
  return true;
};

module.exports = isUnique;
