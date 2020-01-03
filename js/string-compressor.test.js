const stringCompressor = require("./string-compressor");

describe("String Compressor", () => {
  test("should return correct string when compressed value longer than original string", () => {
    const str = "aaabbbbcccccddddddE";
    expect(stringCompressor(str)).toEqual("a3b4c5d6E1");
  });
  test("should return correct string when compressed value shorter than original string", () => {
    const str = "abcde";
    expect(stringCompressor(str)).toEqual("abcde");
  });
});
