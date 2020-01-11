const LinkedList = require("./linked-list");
const Node = require("./node");

describe("Linked List", () => {
  describe("Add method", () => {
    test("should correctly add an element", () => {
      const ll = new LinkedList(1);
      ll.add(2);
      expect(ll.head.next.data).toEqual(2);
    });

    test("should correctly merge two lists using thee Add method", () => {
      const llOne = new LinkedList(1).add(2).add(3);
      const llTwo = new LinkedList(4).add(5).add(6);
      llOne.add(llTwo);
      expect(llOne.getAt(0).data).toEqual(1);
      expect(llOne.getAt(1).data).toEqual(2);
      expect(llOne.getAt(2).data).toEqual(3);
      expect(llOne.getAt(3).data).toEqual(4);
      expect(llOne.getAt(4).data).toEqual(5);
      expect(llOne.getAt(5).data).toEqual(6);
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

  describe("getAt method", () => {
    test("should correctly return an element", () => {
      const ll = new LinkedList(1);
      ll.add(2);
      ll.add(3);
      ll.add(4);
      expect(ll.getAt(2)).toEqual(ll.head.next.next);
    });
  });

  describe("removeAt method", () => {
    test("should correctly remove an element", () => {
      const ll = new LinkedList(1);
      ll.add(2);
      ll.add(3);
      ll.add(4);
      ll.add(5);
      ll.removeAt(2);
      expect(ll.head.next.next.data).toEqual(4);
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

  test("Should generate a linked list with correct nodes when instantiated with undefined", () => {
    const ll = new LinkedList()
      .add(1)
      .add(2)
      .add(3);
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
