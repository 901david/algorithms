const pivot = (arr, start, end, pivotIdx = start) => {
  if (pivotIdx !== start) {
    [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
  }
  const pivotVal = arr[start];
  let finalPivotIDX = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= pivotVal) {
      finalPivotIDX++;
      [arr[i], arr[finalPivotIDX]] = [arr[finalPivotIDX], arr[i]];
    }
  }
  [arr[start], arr[finalPivotIDX]] = [arr[finalPivotIDX], arr[start]];
  return finalPivotIDX;
};

const getRandomValueBetween = (start, end) =>
  Math.floor(Math.random() * end + start);

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const pivotIdx = pivot(arr, start, end, getRandomValueBetween(start, end));
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }

  return arr;
};

module.exports = { pivot, quickSort, getRandomValueBetween };
