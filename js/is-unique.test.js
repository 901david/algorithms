const isUnique = require("./is-unique");

describe("Is Unique", () => {
  test("it should return true when a string has unique characters", () => {
    const str = "twudhskloy";
    expect(isUnique(str)).toEqual(true);
  });
  test("it should return false when a string does not have unique characters", () => {
    const str = "twudhsssffkloy";
    expect(isUnique(str)).toEqual(false);
  });
  test("it should return true for an empty string", () => {
    const str = "";
    expect(isUnique(str)).toEqual(true);
  });
});
