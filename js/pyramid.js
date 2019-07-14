const pyramidBuilder = n => {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      level += midpoint - row <= column && midpoint + row >= column ? "#" : " ";
    }
    console.log(level);
  }
};

const pyramidBuilderRecursive = (
  n,
  row = 0,
  column = 0,
  level = "",
  midpoint = Math.floor((2 * n - 1) / 2)
) => {
  if (row === n) {
    return;
  }

  if (column === 2 * n - 1) {
    console.log(level);
    return pyramidBuilderRecursive(n, row + 1, 0, "", midpoint);
  }

  level += midpoint - row <= column && midpoint + row >= column ? "#" : " ";
  return pyramidBuilderRecursive(n, row, column + 1, level, midpoint);
};

pyramidBuilderRecursive(4);
