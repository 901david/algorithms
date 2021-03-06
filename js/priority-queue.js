class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

/* A priority queue that orders priority with higher priority numbers being priooritized higher */
class PriorityQueueMax {
  constructor(data) {
    this.queue = [];
    this.size = 0;
    const hasDataToBeProcessed =
      data !== undefined && Array.isArray(data) && data.length > 0;
    if (hasDataToBeProcessed) this.buildQueue(data);
  }

  buildQueue(data) {
    data.forEach(data => {
      this.enqueue(data);
    });
  }

  getIndexForSwap(leftIdx, rightIdx, valIdx) {
    const val = this.queue[valIdx];
    const left = this.queue[leftIdx];
    const right = this.queue[rightIdx];
    const leftVal = left ? left.priority : -Infinity;
    const rightVal = right ? right.priority : -Infinity;
    if (val.priority < leftVal && val.priority < rightVal)
      return leftVal > rightVal ? leftIdx : rightIdx;

    if (val.priority < leftVal && val.priority > rightVal) return leftIdx;

    return rightIdx;
  }

  bubbleUp(idx = this.size - 1, val = this.queue[idx]) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (idx === 0) return;
    if (val.priority > this.queue[parentIdx].priority) {
      [this.queue[idx], this.queue[parentIdx]] = [
        this.queue[parentIdx],
        this.queue[idx]
      ];
    }
    return this.bubbleUp(parentIdx);
  }

  bubbleDown(idx = 0, val = this.queue[0]) {
    const baseSibIdx = idx * 2;
    const leftSibIdx = baseSibIdx + 1;
    const rightSibIdx = baseSibIdx + 2;

    const leftChildExists = this.queue[leftSibIdx] !== undefined;
    const rightChildExists = this.queue[rightSibIdx] !== undefined;
    const leftChild = leftChildExists ? this.queue[leftSibIdx] : undefined;
    const rightChild = rightChildExists ? this.queue[rightSibIdx] : undefined;
    if (!leftChildExists && !rightChildExists) return;

    if (
      !leftChildExists &&
      rightChildExists &&
      val.priority >= rightChild.priority
    )
      return;
    if (
      !rightChildExists &&
      leftChildExists &&
      val.priority >= leftChild.priority
    )
      return;

    const swapIdx = this.getIndexForSwap(leftSibIdx, rightSibIdx, idx);

    [this.queue[idx], this.queue[swapIdx]] = [
      this.queue[swapIdx],
      this.queue[idx]
    ];
    return this.bubbleDown(swapIdx, val);
  }

  enqueue({ data, priority }) {
    if (this.size === 0) {
      this.queue.push(new Node(data, priority));
      this.size++;
      return;
    }
    this.queue.push(new Node(data, priority));
    this.size++;
    this.bubbleUp();
    return this;
  }

  dequeue() {
    if (this.size < 1) return undefined;
    if (this.size === 1) {
      this.size--;
      return this.queue.pop();
    }

    [this.queue[0], this.queue[this.size - 1]] = [
      this.queue[this.size - 1],
      this.queue[0]
    ];
    const val = this.queue.pop();
    this.size--;
    this.bubbleDown();
    return val;
  }

  peek() {
    return this.queue[0];
  }
}

/* A priority queue that orders priority with lower priority numbers being priooritized higher */
class PriorityQueueMin {
  constructor(data) {
    this.queue = [];
    this.size = 0;
    const hasDataToBeProcessed =
      data !== undefined && Array.isArray(data) && data.length > 0;
    if (hasDataToBeProcessed) this.buildQueue(data);
  }

  buildQueue(data) {
    data.forEach(data => {
      this.enqueue(data);
    });
  }

  getIndexForSwap(leftIdx, rightIdx, valIdx) {
    const val = this.queue[valIdx];
    const left = this.queue[leftIdx];
    const right = this.queue[rightIdx];
    const leftVal = left ? left.priority : Infinity;
    const rightVal = right ? right.priority : Infinity;
    if (val.priority > leftVal && val.priority > rightVal)
      return leftVal < rightVal ? leftIdx : rightIdx;

    if (val.priority > leftVal && val.priority < rightVal) return leftIdx;

    return rightIdx;
  }

  bubbleUp(idx = this.size - 1, val = this.queue[idx]) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (idx === 0) return;
    if (val.priority < this.queue[parentIdx].priority) {
      [this.queue[idx], this.queue[parentIdx]] = [
        this.queue[parentIdx],
        this.queue[idx]
      ];
    }
    return this.bubbleUp(parentIdx);
  }

  bubbleDown(idx = 0, val = this.queue[0]) {
    const baseSibIdx = idx * 2;
    const leftSibIdx = baseSibIdx + 1;
    const rightSibIdx = baseSibIdx + 2;

    const leftChildExists = this.queue[leftSibIdx] !== undefined;
    const rightChildExists = this.queue[rightSibIdx] !== undefined;
    const leftChild = leftChildExists ? this.queue[leftSibIdx] : undefined;
    const rightChild = rightChildExists ? this.queue[rightSibIdx] : undefined;
    if (!leftChildExists && !rightChildExists) return;

    if (
      !leftChildExists &&
      rightChildExists &&
      rightChild.priority >= val.priority
    )
      return;
    if (
      !rightChildExists &&
      leftChildExists &&
      leftChild.priority >= val.priority
    )
      return;

    const swapIdx = this.getIndexForSwap(leftSibIdx, rightSibIdx, idx);

    [this.queue[idx], this.queue[swapIdx]] = [
      this.queue[swapIdx],
      this.queue[idx]
    ];
    return this.bubbleDown(swapIdx, val);
  }

  enqueue({ data, priority }) {
    if (this.size === 0) {
      this.queue.push(new Node(data, priority));
      this.size++;
      return;
    }
    this.queue.push(new Node(data, priority));
    this.size++;
    this.bubbleUp();
    return this;
  }

  dequeue() {
    if (this.size < 1) return undefined;
    if (this.size === 1) {
      this.size--;
      return this.queue.pop();
    }

    [this.queue[0], this.queue[this.size - 1]] = [
      this.queue[this.size - 1],
      this.queue[0]
    ];
    const val = this.queue.pop();
    this.size--;
    this.bubbleDown();
    return val;
  }

  peek() {
    return this.queue[0];
  }
}

module.exports = { PriorityQueueMax, PriorityQueueMin };
