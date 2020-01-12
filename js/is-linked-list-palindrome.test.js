const isLinkedListPalindrome = require("./is-linked-list-palindome");
const LinkedList = require("./linked-list");

describe("Is Linked List Palindrome", () => {
  test("should return true if it si a palindrome", () => {
    const ll = new LinkedList(1)
      .add(0)
      .add(0)
      .add(1);
    expect(isLinkedListPalindrome(ll)).toEqual(true);
  });
  test("should return true if it si a palindrome", () => {
    const ll = new LinkedList(1)
      .add(3)
      .add(3)
      .add(4)
      .add(3)
      .add(3)
      .add(1);
    expect(isLinkedListPalindrome(ll)).toEqual(true);
  });
  test("should return false if it is not a palindrome", () => {
    const ll = new LinkedList(1)
      .add(3)
      .add(3)
      .add(4)
      .add(6)
      .add(3)
      .add(1);
    expect(isLinkedListPalindrome(ll)).toEqual(false);
  });
});
