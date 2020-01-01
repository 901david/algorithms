const buildMap = str =>
  str.split("").reduce((map, char) => {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
    return map;
  }, new Map());

const oneAway = (strA, strB) => {
  const strAMapped = buildMap(strA);
  const strBMapped = buildMap(strB);
  strAMapped.forEach((value, key) => {
    if (strBMapped.has(key)) {
      const newVal = strBMapped.get(key) - strAMapped.get(key);
      if (newVal === 0) {
        strAMapped.delete(key);
        strBMapped.delete(key);
      } else if (newVal > 0) {
        strAMapped.delete(key);
        strBMapped.set(key, newVal);
      } else {
        strBMapped.delete(key);
        strAMapped.set(key, newVal);
      }
    }
  });
  console.log(strAMapped, strBMapped);
  return strAMapped.size > 1 || strBMapped.size > 1;
};

module.exports = oneAway;
