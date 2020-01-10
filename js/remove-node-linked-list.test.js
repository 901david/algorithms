const removeNodeFromList = require("./remove-node-linked-list");
const LinkedList = require("./linked-list.js");

describe("Remove node from Linked List", () => {
  test("Should remove the node from a Linked List only given that node", () => {
    const LL = new LinkedList(1);
    LL.add(2);
    LL.add(3);
    LL.add(2);
    LL.add(2);
    LL.add(4);
    LL.add(5);
    removeNodeFromList(LL.getAt(2));
    expect(LL.getAt(2).data).toEqual(2);
  });
});
