const removeLinkedListDupes = require("./linked-list-remove-dupes");
const LinkedList = require("./linked-list.js");

describe("Linked List Removing duplicate nodes", () => {
  test("Should remove dupes from a linked list", () => {
    const LL = new LinkedList(1);
    LL.add(2);
    LL.add(3);
    LL.add(2);
    LL.add(2);
    LL.add(4);
    LL.add(5);
    const isUniqueEquals = LL => {
      const temp = new Set();
      LL.getAsArray().forEach(data => {
        temp.add(data);
      });
      return temp.size === LL.size;
    };
    expect(isUniqueEquals(removeLinkedListDupes(LL))).toEqual(true);
  });
});
