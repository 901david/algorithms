class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(val) {
    this.stack.push(val);
    this.size++;
  }

  pop() {
    if (this.size === 0) return undefined;
    this.size--;
    return this.stack.pop();
  }

  peek() {
    if (this.size === 0) return undefined;
    return this.stack[this.size - 1];
  }

  emptyInto(stack) {
    const helperStack = stack || new Stack();
    while (this.size !== 0) {
      helperStack.push(this.pop());
    }

    return helperStack;
  }
}

module.exports = Stack;
