const partitionLinkedList = require("./partition-linked-list");
const LinkedList = require("./linked-list");

describe("Partition Linked List", () => {
  test("should partition a linked list around a given partition value", () => {
    const LL = new LinkedList(3)
      .add(5)
      .add(8)
      .add(5)
      .add(10)
      .add(2)
      .add(1);
    const newList = partitionLinkedList(LL, 5);
    expect(newList.getAt(0).data < 5).toEqual(true);
    expect(newList.getAt(1).data < 5).toEqual(true);
    expect(newList.getAt(2).data < 5).toEqual(true);
    expect(newList.getAt(3).data >= 5).toEqual(true);
    expect(newList.getAt(4).data >= 5).toEqual(true);
    expect(newList.getAt(5).data >= 5).toEqual(true);
    expect(newList.getAt(6).data >= 5).toEqual(true);
  });
});
