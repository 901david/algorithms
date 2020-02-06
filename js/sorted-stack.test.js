const SortedStack = require("./sorted-stack");

describe("Sorted Stack Class", () => {
  test("should add a value with push", () => {
    const mySortedStack = new SortedStack();
    mySortedStack.push(10);
    expect(mySortedStack.stack.stack[0]).toEqual(10);
  });
  test("should Maintain the lowest value at top of the stack when pushing values", () => {
    const mySortedStack = new SortedStack();
    mySortedStack.push(10);
    mySortedStack.push(5);
    mySortedStack.push(1);
    mySortedStack.push(55);
    mySortedStack.push(100);
    expect(mySortedStack.stack.stack[0]).toEqual(100);
    expect(mySortedStack.stack.stack[1]).toEqual(55);
    expect(mySortedStack.stack.stack[2]).toEqual(10);
    expect(mySortedStack.stack.stack[3]).toEqual(5);
    expect(mySortedStack.stack.stack[4]).toEqual(1);
  });

  test("should Maintain the lowest value at top of the stack when poppin values", () => {
    const mySortedStack = new SortedStack();
    mySortedStack.push(10);
    mySortedStack.push(5);
    mySortedStack.push(1);
    mySortedStack.push(55);
    mySortedStack.push(100);
    let val = mySortedStack.pop();
    expect(mySortedStack.stack.stack[0]).toEqual(100);
    expect(mySortedStack.stack.stack[1]).toEqual(55);
    expect(mySortedStack.stack.stack[2]).toEqual(10);
    expect(mySortedStack.stack.stack[3]).toEqual(5);
    expect(val).toEqual(1);
    val = mySortedStack.pop();
    expect(mySortedStack.stack.stack[0]).toEqual(100);
    expect(mySortedStack.stack.stack[1]).toEqual(55);
    expect(mySortedStack.stack.stack[2]).toEqual(10);
    expect(val).toEqual(5);
    val = mySortedStack.pop();
    expect(mySortedStack.stack.stack[0]).toEqual(100);
    expect(mySortedStack.stack.stack[1]).toEqual(55);
    expect(val).toEqual(10);
    val = mySortedStack.pop();
    expect(mySortedStack.stack.stack[0]).toEqual(100);
    expect(val).toEqual(55);
    val = mySortedStack.pop();
    expect(mySortedStack.stack.stack[0]).toEqual(undefined);
    expect(val).toEqual(100);
  });

  test("should return undefined when pop is called and empty", () => {
    const mySortedStack = new SortedStack();
    const val = mySortedStack.pop();
    expect(val).toEqual(undefined);
  });
});
