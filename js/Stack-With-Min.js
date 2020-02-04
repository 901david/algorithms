/* Write a stack can maintain a minimum value which can be retrieved and maintained in O(1) runtiime Complexity */

const Stack = require("./Stack");

class StackItem {
  constructor(val, min) {
    this.val = val;
    this.min = min;
  }
}

class StackWithMinSingle extends Stack {
  constructor() {
    super();
  }

  push(val) {
    if (this.size === 0) {
      const node = new StackItem(val, val);
      super.push(node);
      return;
    }
    const currentMin = super.peek().min;
    let node;
    if (val < currentMin) node = new StackItem(val, val);
    else node = new StackItem(val, currentMin);
    super.push(node);
  }

  getMin() {
    if (this.size === 0) return undefined;
    return super.peek().min;
  }
}

class StackWithMin {
  constructor() {
    this.minStack = new Stack();
    this.regStack = new Stack();
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.minStack.push(val);
      this.regStack.push(val);
      this.size++;
      return;
    }
    const currentMin = this.minStack.peek();
    if (val < currentMin) this.minStack.push(val);
    this.regStack.push(val);
    this.size++;
  }

  pop() {
    if (this.size === 0) return undefined;
    const val = this.regStack.pop();
    if (val === this.minStack.peek()) this.minStack.pop();
    return val;
  }

  peek() {
    if (this.size === 0) return undefined;
    return this.regStack.peek();
  }

  getMin() {
    if (this.size === 0) return undefined;
    return this.minStack.peek();
  }
}

module.exports = { StackWithMin, StackWithMinSingle };
