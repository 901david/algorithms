const urlify = require("./urlify");

describe("URLIFY", () => {
  test("It should aadd in correct data", () => {
    const str = "John Smith Here    ";
    expect(urlify(str)).toEqual("John%20Smith%20Here");
  });
});
