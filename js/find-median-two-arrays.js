const merge = (arr1, arr2) => {
  const results = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }

  return [...results, ...arr1, ...arr2];
};

const findMedianSortedArrays = (nums1, nums2) => {
  const merged = merge(nums1, nums2);
  const isMergedEven = merged.length % 2 === 0;
  const medianEl = Math.floor(merged.length / 2);
  return isMergedEven
    ? (merged[medianEl] + merged[medianEl - 1]) / 2
    : merged[medianEl];
};
