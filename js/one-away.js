const oneReplaceAway = (strA, strB) => {
  let notMatched = false;
  for (let i = 0; i < strA.length; i++) {
    const charA = strA[i];
    const charB = strB[i];
    if (charA !== charB) {
      if (notMatched) return false;
      notMatched = true;
    }
  }
  return true;
};

const oneEditAway = (short, long) => {
  let indexOne = 0;
  let indexTwo = 0;
  while (indexOne < short.length && indexTwo < long.length) {
    if (short[indexOne] !== long[indexTwo]) {
      if (indexOne !== indexTwo) return false;
      indexTwo++;
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return true;
};

const oneAway = (strA, strB) => {
  if (Math.abs(strA.length - strB.length) > 1) return false;
  if (strA.length === strB.length) {
    return oneReplaceAway(strA, strB);
  }

  const short = strA.length > strB.length ? strB : strA;
  const long = strA.length > strB.length ? strA : strB;
  return oneEditAway(short, long);
};

module.exports = oneAway;
