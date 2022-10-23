exports.mMult = (m1, m2) => {
  //Implement
  const newD = [[], []];
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1[i].length; j++) {
      let val = 0;
      for (let k = 0; k < m2.length; k++) {
        val += m1[i][j] * m2[k][j];
        newD[i][j] = val;
      }
    }
  }
  return newD;
};
