/* write a functoin to determine if two strings are permutations of each other */

const isPermutationBasic = (strA, strB) => {
  if (strA.length !== strB.length) return false;
  const strASorted = strA
    .split("")
    .sort()
    .join("");
  const strBSorted = strB
    .split("")
    .sort()
    .join("");
  return strASorted === strBSorted;
};

const buildMap = str =>
  str.split("").reduce((map, char) => {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
    return map;
  }, new Map());

const isPermutationBetter = (strA, strB) => {
  if (strA.length !== strB.length) return false;
  const mappedStrA = buildMap(strA);
  const mappedStrB = buildMap(strB);
  mappedStrA.forEach((value, key) => {
    if (mappedStrB.has(key)) {
      const sameCharCount = mappedStrB.get(key) === value;
      if (sameCharCount) mappedStrB.delete(key);
      else return false;
    }
  });
  return mappedStrB.size === 0;
};

module.exports = {
  isPermutationBasic,
  isPermutationBetter
};
