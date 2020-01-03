/* String Compressor -- Write a function that takes in a string and returns characters with number values
ie aabbbcccccdddde => a2b3c5d4e1
You should only return this if the new compressed string is longer than the original one, otherwise return the original
*/

const stringCompressor = str => {
  let count = 1;
  let result = str[0];
  let lastFound = str[0];
  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    if (char === lastFound) {
      count++;
    } else {
      result += `${count}${char}`;
      lastFound = char;
      count = 1;
    }
  }
  /* Need to add the final count */
  result += count;
  return result.length < str.length ? result : str;
};

module.exports = stringCompressor;
