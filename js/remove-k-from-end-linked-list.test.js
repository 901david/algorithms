const removeKFromEnd = require("./remove-k-from-end-linked-list");
const LinkedList = require("./linked-list.js");

describe("Linked List Removing duplicate nodes", () => {
  test("Should remove 3rd from end item in Linked list", () => {
    const LL = new LinkedList(1);
    LL.add(2);
    LL.add(3);
    LL.add(2);
    LL.add(2);
    LL.add(4);
    LL.add(5);
    const finalLL = new LinkedList(1);
    finalLL.add(2);
    finalLL.add(3);
    finalLL.add(2);
    finalLL.add(4);
    finalLL.add(5);
    expect(removeKFromEnd(LL, 3)).toEqual(finalLL);
  });

  test("Should remove 5th from end item in Linked list", () => {
    const LL = new LinkedList(1);
    LL.add(2);
    LL.add(3);
    LL.add(2);
    LL.add(2);
    LL.add(4);
    LL.add(5);
    const finalLL = new LinkedList(1);
    finalLL.add(2);
    finalLL.add(2);
    finalLL.add(2);
    finalLL.add(4);
    finalLL.add(5);
    expect(removeKFromEnd(LL, 5)).toEqual(finalLL);
  });

  test("Should return same list if from end out of range of list", () => {
    const LL = new LinkedList(1);
    LL.add(2);
    LL.add(3);
    LL.add(2);
    LL.add(2);
    LL.add(4);
    LL.add(5);

    expect(removeKFromEnd(LL, 27)).toEqual(LL);
  });
});
