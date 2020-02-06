const Stack = require("./Stack");

describe("Stack Class", () => {
  test("it should instantiate a stack with an empty array", () => {
    const myStack = new Stack();
    expect(myStack.stack).toEqual([]);
  });

  describe("Push Method", () => {
    test("it should add items to stack", () => {
      const myStack = new Stack();
      myStack.push(5);
      expect(myStack.stack[0]).toEqual(5);
      expect(myStack.size).toEqual(1);
    });

    test("it should add multiple items to stack", () => {
      const myStack = new Stack();
      myStack.push(5);
      expect(myStack.stack[0]).toEqual(5);
      expect(myStack.size).toEqual(1);
      myStack.push(10);
      expect(myStack.stack[1]).toEqual(10);
      expect(myStack.size).toEqual(2);
    });
  });

  describe("Pop Method", () => {
    test("it should remove items to stack", () => {
      const myStack = new Stack();
      myStack.push(5);
      const val = myStack.pop();
      expect(myStack.stack[0]).toEqual(undefined);
      expect(myStack.size).toEqual(0);
      expect(val).toEqual(5);
    });

    test("it should remove multiple items to stack", () => {
      const myStack = new Stack();
      myStack.push(5);
      myStack.push(10);
      const val = myStack.pop();
      expect(myStack.stack[0]).toEqual(5);
      expect(myStack.size).toEqual(1);
      expect(val).toEqual(10);
      const val2 = myStack.pop();
      expect(myStack.stack[0]).toEqual(undefined);
      expect(myStack.size).toEqual(0);
      expect(val2).toEqual(5);
    });

    test("it should return undefined when stack is empty", () => {
      const myStack = new Stack();
      const val = myStack.pop();
      expect(myStack.stack[0]).toEqual(undefined);
      expect(myStack.size).toEqual(0);
      expect(val).toEqual(undefined);
    });
  });

  describe("Peek Method", () => {
    test("it should return next value in stack without removing", () => {
      const myStack = new Stack();
      myStack.push(6);
      const val = myStack.peek();
      expect(myStack.stack[0]).toEqual(6);
      expect(myStack.size).toEqual(1);
      expect(val).toEqual(6);
    });

    test("it should return undefined if stack empty", () => {
      const myStack = new Stack();
      const val = myStack.peek();
      expect(myStack.stack[0]).toEqual(undefined);
      expect(myStack.size).toEqual(0);
      expect(val).toEqual(undefined);
    });
  });

  describe("EmptyInto Method", () => {
    test("it should empty a Stack and return a new stack reversed", () => {
      const myStack = new Stack();
      myStack.push(6);
      myStack.push(7);
      myStack.push(8);
      myStack.push(9);
      const newListReversed = myStack.emptyInto();
      expect(newListReversed.stack[0]).toEqual(9);
      expect(newListReversed.stack[1]).toEqual(8);
      expect(newListReversed.stack[2]).toEqual(7);
      expect(newListReversed.stack[3]).toEqual(6);
    });

    test("it should empty a original Stack", () => {
      const myStack = new Stack();
      myStack.push(6);
      myStack.push(7);
      myStack.push(8);
      myStack.push(9);
      const newListReversed = myStack.emptyInto();
      expect(myStack.size).toEqual(0);
    });

    test("it should empty into another stack if passed in", () => {
      const myStack = new Stack();
      myStack.push(6);
      myStack.push(7);
      const myOtherStack = new Stack();
      myOtherStack.push(8);
      myOtherStack.push(9);
      myOtherStack.emptyInto(myStack);
      expect(myStack.stack[0]).toEqual(6);
      expect(myStack.stack[1]).toEqual(7);
      expect(myStack.stack[2]).toEqual(9);
      expect(myStack.stack[3]).toEqual(8);
      expect(myOtherStack.size).toEqual(0);
    });
  });
});
