const {
  sumLinkedLists,
  convertToCorrectInt,
  convertIntToLinkedList
} = require("./sum-linked-list");
const LinkedList = require("./linked-list");

describe("Sum Linked Lists", () => {
  test("should return a linked list with the reversed sum of the two input lists", () => {
    const valOne = new LinkedList(0).add(0).add(1);
    const valTwo = new LinkedList(0).add(0).add(4);
    const results = sumLinkedLists(valOne, valTwo);
    expect(results.getAt(0).data).toEqual(0);
    expect(results.getAt(1).data).toEqual(0);
    expect(results.getAt(2).data).toEqual(5);
  });

  describe("convertToCorrectInt", () => {
    test("should return correct reversed int when given a Linked List", () => {
      const valOne = new LinkedList(0).add(0).add(1);
      expect(convertToCorrectInt(valOne)).toEqual(100);
    });
  });
  describe("convertIntToLinkedList", () => {
    test("should return correct reversed Linked List when given a int", () => {
      const valOne = 100;
      const result = convertIntToLinkedList(valOne);
      expect(result.getAt(0).data).toEqual(0);
      expect(result.getAt(1).data).toEqual(0);
      expect(result.getAt(2).data).toEqual(1);
    });
  });
});
