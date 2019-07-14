const stepBuilder = n => {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
};

const stepBuilderRecursive = (n, row = 0, column = 0, stair = "") => {
  if (row === n) {
    return;
  }

  if (column === n) {
    console.log(stair);
    return stepBuilderRecursive(n, row + 1, 0, "");
  }

  stair += column <= row ? "#" : " ";
  return stepBuilderRecursive(n, row, column + 1, stair);
};

stepBuilderRecursive(4);
