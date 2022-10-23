const getUniquePathsHelper = (rows, columns, callMap = {}, memo = {}) => {
  if (rows === 1 || columns === 1) return 1;
  if (memo[`${rows}:${columns}`]) return memo[`${rows}:${columns}`];
  else {
    if (callMap[`${rows}:${columns}`]) callMap[`${rows}:${columns}`] += 1;
    else callMap[`${rows}:${columns}`] = 1;
    // Calculate new values for memo obj
    memo[`${rows - 1}:${columns}`] = getUniquePathsHelper(
      rows - 1,
      columns,
      callMap,
      memo
    );
    memo[`${rows}:${columns - 1}`] = getUniquePathsHelper(
      rows,
      columns - 1,
      callMap,
      memo
    );
  }
  return [
    memo[`${rows - 1}:${columns}`] + memo[`${rows}:${columns - 1}`],
    callMap,
  ];
};

exports.getUniquePaths = (...args) => {
  const results = getUniquePathsHelper(...args);
  console.log(results[1]);
  return results[0];
};
