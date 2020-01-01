const isPermutatedPalindrome = require("./is-permutated-palindrome");

describe("Is Permutated Palindrome", () => {
  describe("isPermutationBasic", () => {
    test("should return true for permutated Palindrome", () => {
      const str = "Tact Coa";
      expect(isPermutatedPalindrome(str)).toEqual(true);
    });
    test("should return false for non-permutated Palindrome", () => {
      const str = "Tactt Coaq";
      expect(isPermutatedPalindrome(str)).toEqual(false);
    });
  });
});
