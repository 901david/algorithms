const { StackWithMin, StackWithMinSingle } = require("./Stack-With-Min");

describe("Stack With Min", () => {
  describe("Stack With Min With Two Stacks", () => {
    test("should correctly maintain the min after pushing in several items", () => {
      const myStackWithMin = new StackWithMin();
      myStackWithMin.push(5);
      myStackWithMin.push(7);
      myStackWithMin.push(5);
      myStackWithMin.push(3);
      myStackWithMin.push(2);
      myStackWithMin.push(1);
      myStackWithMin.push(15);
      const min = myStackWithMin.getMin();
      expect(min).toEqual(1);
    });

    test("should correctly maintain the min after pushing in several items", () => {
      const myStackWithMin = new StackWithMin();
      myStackWithMin.push(5);
      myStackWithMin.push(7);
      myStackWithMin.push(5);
      myStackWithMin.push(3);
      myStackWithMin.push(2);
      myStackWithMin.push(1);
      myStackWithMin.push(15);
      let min = myStackWithMin.getMin();
      expect(min).toEqual(1);
      myStackWithMin.pop();
      myStackWithMin.pop();
      min = myStackWithMin.getMin();
      expect(min).toEqual(2);
      myStackWithMin.pop();
      min = myStackWithMin.getMin();
      expect(min).toEqual(3);
    });
  });

  describe("Stack With Min With one stack", () => {
    test("should correctly maintain the min after pushing in several items", () => {
      const myStackWithMin = new StackWithMinSingle();
      myStackWithMin.push(5);
      myStackWithMin.push(7);
      myStackWithMin.push(5);
      myStackWithMin.push(3);
      myStackWithMin.push(2);
      myStackWithMin.push(1);
      myStackWithMin.push(15);
      const min = myStackWithMin.getMin();
      expect(min).toEqual(1);
    });

    test("should correctly maintain the min after pushing in several items", () => {
      const myStackWithMin = new StackWithMinSingle();
      myStackWithMin.push(5);
      myStackWithMin.push(7);
      myStackWithMin.push(5);
      myStackWithMin.push(3);
      myStackWithMin.push(2);
      myStackWithMin.push(1);
      myStackWithMin.push(15);
      let min = myStackWithMin.getMin();
      expect(min).toEqual(1);
      myStackWithMin.pop();
      myStackWithMin.pop();
      min = myStackWithMin.getMin();
      expect(min).toEqual(2);
      myStackWithMin.pop();
      min = myStackWithMin.getMin();
      expect(min).toEqual(3);
    });
  });
});
