const LinkedList = require("./linked-list");
const Node = require("./node");

describe("Linked List", () => {
  describe("Add method", () => {
    test("should correctly add an element", () => {
      const ll = new LinkedList(1);
      ll.add(2);
      expect(ll.head.next.data).toEqual(2);
    });
  });
  describe("Remove method", () => {
    test("should correctly remove an element", () => {
      const ll = new LinkedList(1);
      ll.add(2);
      ll.remove();
      expect(ll.head.next).toEqual(null);
    });
  });

  test("Should generate a linked list with correct nodes", () => {
    const ll = new LinkedList(1);
    ll.add(2);
    ll.add(3);
    expect(ll.head.data).toEqual(1);
    expect(ll.head.next.data).toEqual(2);
    expect(ll.head.next.next.data).toEqual(3);
  });
});

describe("Node", () => {
  test("Should correctly generate a node", () => {
    const n = new Node(1);
    expect(n.data).toEqual(1);
    expect(n.next).toEqual(null);
  });
});
