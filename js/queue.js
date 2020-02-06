class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(val) {
    this.queue.unshift(val);
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    this.size--;
    return this.queue.pop();
  }
}

module.exports = Queue;
