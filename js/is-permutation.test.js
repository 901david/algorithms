const { isPermutationBasic, isPermutationBetter } = require("./is-permutation");

describe("Is Permutation", () => {
  describe("isPermutationBasic", () => {
    test("should return true for permutation", () => {
      const strA = "aahh";
      const strB = "haah";
      expect(isPermutationBasic(strA, strB)).toEqual(true);
    });
    test("should return false for non-permutations", () => {
      const strA = "aahhsjkdit";
      const strB = "haahsktiue";
      expect(isPermutationBasic(strA, strB)).toEqual(false);
    });
  });
  describe("isPermutationBetteer", () => {
    test("should return true for permutation", () => {
      const strA = "aahh";
      const strB = "haah";
      expect(isPermutationBetter(strA, strB)).toEqual(true);
    });
    test("should return false for non-permutations", () => {
      const strA = "aahhsjkdit";
      const strB = "haahsktiue";
      expect(isPermutationBetter(strA, strB)).toEqual(false);
    });
  });
});
