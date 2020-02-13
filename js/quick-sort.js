const pivot = (arr, start, end, pivotIdx) => {
  if (pivotIdx !== start) {
    [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
  }
  const pivotVal = arr[pivotIdx];
  let finalPivotIDX = 0;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= pivotVal) {
      finalPivotIDX++;
    }
  }
};

const quickSort = arr => {};

module.exports = { pivot, quickSort };
