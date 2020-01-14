class maxHeap {
  constructor(initialData) {
    this.values = [];
    if (initialData) this.values.push(initialData);
    return this;
  }
  get size() {
    return this.values.length;
  }

  checkParents(idx = this.size - 1, val = this.values[idx]) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (val > this.values[parentIdx]) {
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx]
      ];
    }
    if (idx === 0) return;
    return this.checkParents(parentIdx);
  }

  getIndexForSwap(leftIdx, rightIdx, valIdx) {
    const val = this.values[valIdx];
    const left = this.values[leftIdx];
    const right = this.values[rightIdx];
    const leftVal = Math.abs(val - left);
    const rightVal = Math.abs(val - right);
    return leftVal > rightVal ? leftIdx : rightIdx;
  }

  checkSiblings(idx = 0, val = this.values[0]) {
    const baseSibIdx = idx * 2;
    const leftSibIdx = baseSibIdx + 1;
    const rightSibIdx = baseSibIdx + 2;

    const leftChildExists = this.values[leftSibIdx] !== undefined;
    const rightChildExists = this.values[rightSibIdx] !== undefined;
    const leftChild = leftChildExists ? this.values[leftSibIdx] : undefined;
    const rightChild = rightChildExists ? this.values[rightSibIdx] : undefined;

    if (!leftChildExists && !rightChildExists) return;

    if (!leftChildExists && val >= rightChild) return;
    if (!rightChildExists && val >= leftChild) return;

    let swapIdx;
    if (!rightChildExists && val < rightChild) swapIdx = rightSibIdx;
    else if (!rightChildExists && val < leftChild) swapIdx = leftSibIdx;
    else if (rightChildExists && rightChildExists)
      swapIdx = this.getIndexForSwap(leftSibIdx, rightSibIdx, idx);
    else return;

    [this.values[idx], this.values[swapIdx]] = [
      this.values[swapIdx],
      this.values[idx]
    ];
    return this.checkSiblings(swapIdx, val);
  }

  insert(data) {
    if (this.size === 0) {
      this.values.push(data);
      return this;
    }
    this.values.push(data);
    this.checkParents();
    return this;
  }

  extractMax() {
    if (this.size < 1) return undefined;
    [this.values[0], this.values[this.size - 1]] = [
      this.values[this.size - 1],
      this.values[0]
    ];
    const val = this.values.pop();
    this.checkSiblings();
    return val;
  }
}

module.exports = maxHeap;
