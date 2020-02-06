const Stack = require("./Stack");

class SortedStack {
  constructor() {
    this.stack = new Stack();
  }

  push(val) {
    if (this.isEmpty()) {
      this.stack.push(val);
      return;
    }

    const helper = new Stack();

    while (this.stack.peek() <= val) {
      helper.push(this.stack.pop());
    }

    this.stack.push(val);

    while (helper.size !== 0) {
      this.stack.push(helper.pop());
    }
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.stack[this.stack.size - 1];
  }

  isEmpty() {
    return this.stack.size === 0;
  }
}

module.exports = SortedStack;
