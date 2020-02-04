const SetOfStacks = require("./set-of-stacks");

describe("Set of Stacks", () => {
  test("should Create multiple stacks which are only the specified size", () => {
    const mySet = new SetOfStacks(2);
    mySet.push(5);
    mySet.push(6);
    mySet.push(7);
    mySet.push(8);
    mySet.push(9);
    mySet.push(10);
    mySet.push(11);
    mySet.push(12);
    mySet.push(13);
    mySet.push(14);
    mySet.push(15);
    expect(mySet.stackCount).toEqual(6);
  });

  test("should have correct values in right places", () => {
    const mySet = new SetOfStacks(2);
    mySet.push(5);
    mySet.push(6);
    mySet.push(7);
    mySet.push(8);
    mySet.push(9);
    mySet.push(10);
    mySet.push(11);
    mySet.push(12);
    mySet.push(13);
    mySet.push(14);
    mySet.push(15);
    expect(mySet.stacks[0].stack[0]).toEqual(5);
    expect(mySet.stacks[1].stack[1]).toEqual(8);
    expect(mySet.stacks[2].stack[0]).toEqual(9);
    expect(mySet.stacks[5].stack[0]).toEqual(15);
  });

  describe("Push Method", () => {
    test("should add value to a stack", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(5);
      expect(mySet.stacks[0].stack[0]).toEqual(5);
    });

    test("should add value to separate stack if stackSize is exceeded", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(5);
      mySet.push(5);
      mySet.push(6);
      expect(mySet.stacks[1].stack[0]).toEqual(6);
    });
  });

  describe("Pop Method", () => {
    test("should remove value to a stack", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(5);
      const myVal = mySet.pop();
      expect(mySet.stacks[0]).toEqual(undefined);
      expect(myVal).toEqual(5);
    });

    test("should remove value from correct stack", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(5);
      mySet.push(5);
      mySet.push(6);
      mySet.push(6);
      const val = mySet.pop();

      expect(mySet.stacks[1].size).toEqual(1);
      expect(val).toEqual(6);
    });

    test("should work when we pop off enough values to go to another stack", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(5);
      mySet.push(5);
      mySet.push(6);
      mySet.push(6);
      mySet.pop();
      mySet.pop();
      const val = mySet.pop();

      expect(mySet.stacks[0].stack.length).toEqual(1);
      expect(val).toEqual(5);
    });

    test("should remove the stack if we pop off enough values that the stack is empty", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(5);
      mySet.push(5);
      mySet.push(6);
      mySet.push(6);
      mySet.pop();
      mySet.pop();
      mySet.pop();
      expect(mySet.stackCount).toEqual(1);
    });
  });

  describe("PopAt Method", () => {
    test("should return the correct value at an index", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(7);
      mySet.push(5);
      const val = mySet.popAt(1);
      expect(mySet.stacks[0].peek()).toEqual(7);
      expect(val).toEqual(5);
    });

    test("should correctly modify when not last item", () => {
      const mySet = new SetOfStacks(2);
      mySet.push(7);
      mySet.push(5);
      mySet.push(8);
      mySet.push(9);

      const val = mySet.popAt(0);
      expect(mySet.stacks[0].peek()).toEqual(8);
      expect(mySet.stacks[0].size).toEqual(2);
      expect(mySet.stacks[1].size).toEqual(1);
      expect(val).toEqual(7);
    });

    test("should correctly work with a more complex example", () => {
      const mySet = new SetOfStacks(5);
      /* Stack 1 */
      mySet.push(7);
      mySet.push(5);
      mySet.push(8);
      mySet.push(9);
      mySet.push(10);

      /* Stack 2 */
      mySet.push(7);
      mySet.push(5);
      mySet.push(8);
      mySet.push(9);
      mySet.push(10);

      /* Stack 3 */
      mySet.push(7);
      mySet.push(5);

      const val = mySet.popAt(5);
      expect(mySet.stacks[1].peek()).toEqual(7);
      expect(mySet.stacks[2].size).toEqual(1);
      expect(mySet.stacks[0].size).toEqual(5);
      expect(mySet.stacks[1].size).toEqual(5);
      expect(mySet.stacks[2].size).toEqual(1);
      expect(mySet.stacks[2].peek()).toEqual(5);
      expect(val).toEqual(7);
    });
  });
});
