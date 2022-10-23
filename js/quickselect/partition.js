exports.getRandomValue = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min + 1);
};

exports.partition = (arr, left, right, pIndex = null) => {
  let partitionI = pIndex === null ? getRandomValue(left, right) : pIndex;
  // swap "random element" to last place
  [arr[right], arr[partitionI]] = [arr[partitionI], arr[right]];
  // correct partitionI
  partitionI = right;
  right = right - 1;
  while (true) {
    while (arr[left] < arr[partitionI]) {
      left++;
    }

    while (arr[right] > arr[partitionI]) {
      right--;
    }

    if (left >= right) break;
    else [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  [arr[left], arr[partitionI]] = [arr[partitionI], arr[left]];
  console.log('FINAL', arr, left, pIndex);
  return left;
};
