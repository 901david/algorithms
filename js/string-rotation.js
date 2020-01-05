const isSubstringOf = (str, subsStr) => {
  return str.includes(subsStr);
};

const stringRotation = (rotationOf, str) => {
  if (rotationOf.length !== str.length) return false;
  if (rotationOf.length < 1 || str.length < 1) return false;
  return isSubstringOf(rotationOf + rotationOf, str);
};

module.exports = { isSubstringOf, stringRotation };
