const buildMap = arr =>
  arr.reduce((map, value) => {
    if (map.has(value)) {
      const currentVal = map.get(value);
      map.set(value, currentVal + 1);
    } else {
      map.set(value, 1);
    }

    return map;
  }, new Map());

const twoArraysSameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const map1 = buildMap(arr1);
  const map2 = buildMap(arr2);

  for (let [number, appearedTimes] of map1) {
    if (!map2.has(number ** 2)) {
      return false;
    }

    if (map2.get(number ** 2) !== appearedTimes) {
      return false;
    }
  }

  return true;
};

console.log(twoArraysSameSquared([1, 2, 3, 1], [9, 4, 1, 1]));
