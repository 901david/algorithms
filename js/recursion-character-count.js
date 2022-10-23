/* Use recusion to accept an array of strings and return the number of total characters */

const characterCountHelper = arr => {
  if (arr.length === 0) return 0;
  const nextString = arr.pop();
  return nextString.length + characterCountHelper(arr);
};

exports.characterCount = characterCountHelper;
