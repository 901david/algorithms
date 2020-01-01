const oneAway = require("./one-away");

describe("One Away", () => {
  test("should return true when str is missing one letter", () => {
    const strA = "pale";
    const strB = "ple";
    expect(oneAway(strA, strB)).toEqual(true);
  });
  test("should return true when str needs oone additional letter", () => {
    const strA = "pales";
    const strB = "pale";
    expect(oneAway(strA, strB)).toEqual(true);
  });
  test("should return true when str needs one letter changed", () => {
    const strA = "pale";
    const strB = "bale";
    expect(oneAway(strA, strB)).toEqual(true);
  });
  test("should return false when str cannot be made in one change", () => {
    const strA = "pale";
    const strB = "bake";
    expect(oneAway(strA, strB)).toEqual(false);
  });
});
