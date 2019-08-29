/*
Calculate the sume of the two diagonals in a matrix, primary from left to right, secondary from right to left.  After you sum up the primary and secondary return |primarySum - secondarySum| -- notice the absolute value
*/

const diagonalDifference = (
  arr,
  primary = 0,
  secondary = arr.length - 1,
  primarySum = 0,
  secondarySum = 0
) => {
  if (arr.length === 0) {
    return Math.abs(primarySum - secondarySum);
  }
  const level = arr.shift();
  return diagonalDifference(
    arr,
    primary + 1,
    secondary - 1,
    primarySum + level[primary],
    secondarySum + level[secondary]
  );
};

const diagonalDifference = arr => {
  let primary = 0;
  let secondary = arr.length - 1;
  let primarySum = 0;
  let secondarySum = 0;

  while (arr.length) {
    const level = arr.shift();
    primarySum += level[primary];
    primary++;
    secondarySum += level[secondary];
    secondary--;
  }

  return Math.abs(primarySum - secondarySum);
};
