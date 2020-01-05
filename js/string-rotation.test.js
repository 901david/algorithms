const { stringRotation, isSubstringOf } = require("./string-rotation");

describe("String Rotation", () => {
  test("it should return true for a rotated string", () => {
    const inputRotationOf = "waterbottle";
    const inQuestion = "erbottlewat";
    const output = true;
    expect(stringRotation(inputRotationOf, inQuestion)).toEqual(output);
  });

  test("it should return false for a non-rotated string", () => {
    const inputRotationOf = "waterbottle";
    const inQuestion = "webadfottlerwat";
    const output = false;
    expect(stringRotation(inputRotationOf, inQuestion)).toEqual(output);
  });
});

describe("Is Substring of", () => {
  it("should  return true when is a substring of", () => {
    const string = "waterbottle";
    const substring = "bott";
    const output = true;
    expect(isSubstringOf(string, substring)).toEqual(output);
  });

  it("should  return false when not a substring of", () => {
    const string = "waterbottle";
    const substring = "botst";
    const output = false;
    expect(isSubstringOf(string, substring)).toEqual(output);
  });
});
