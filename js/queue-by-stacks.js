const Stack = require("./Stack");

class QueueByStacks {
  constructor() {
    this.queue = new Stack();
    this.size = this.queue.size;
  }

  enqueue(val) {
    if (this.size === 0) {
      this.queue.push(val);
      this.size++;
      return;
    }
    const helperStack = this.queue.emptyInto();

    this.queue.push(val);

    while (helperStack.size !== 0) {
      this.queue.push(helperStack.pop());
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    this.size--;
    return this.queue.pop();
  }
}

module.exports = QueueByStacks;
