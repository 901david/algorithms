const LinkedList = require('../linked-list');

class HeapNode {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert({ data, priority }) {
    this.values.push(new HeapNode(data, priority));
    if (this.size === 1) {
      return;
    }

    this._bubbleUp(this.values[this.size - 1], this.size - 1);
    return this;
  }

  extractMax() {
    [this.values[0], this.values[this.size - 1]] = [
      this.values[this.size - 1],
      this.values[0],
    ];
    const max = this.values.pop();
    this._bubbleDown(this.values[0], 0);
    return max;
  }

  get size() {
    return this.values.length;
  }

  _bubbleDown(node, idx) {
    //Look at children do either have a higher priority if so swap
    //If you don't swap you are done, if you do swap then must keep checking
    const leftIdx = this._getChildIdx(idx, 'left');
    const rightIdx = this._getChildIdx(idx, 'right');
    const left = this.values[leftIdx];
    const right = this.values[rightIdx];
    const leftExists = left !== undefined;
    const rightExists = right !== undefined;
    const childrenExist = leftExists && rightExists;
    const leftSmaller = leftExists && node.priority > left.priority;
    const rightSmaller = rightExists && node.priority > right.priority;
    const isGreaterThanChildren = childrenExist && leftSmaller && rightSmaller;

    if ((!leftExists && !rightExists) || isGreaterThanChildren) return;

    if (leftExists && !rightExists && left.priority <= node.priority) return;

    if (rightExists && !leftExists && right.priority <= node.priority) return;

    const swapIdx = this._getSwapIdx(leftIdx, rightIdx, idx);

    this._swap(idx, swapIdx);

    this._bubbleDown(node, swapIdx);
  }

  _getSwapIdx(leftIdx, rightIdx, idx) {
    const parent = this.values[idx];
    const left = this.values[leftIdx];
    const right = this.values[rightIdx];
    const leftVal = left ? left.priority : -Infinity;
    const rightVal = right ? right.priority : -Infinity;
    if (parent.priority < leftVal && parent.priority < rightVal)
      return leftVal > rightVal ? leftIdx : rightIdx;

    if (parent.priority < leftVal) return leftIdx;
    return rightIdx;
  }

  _swap(i1, i2) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  _bubbleUp(node, idx) {
    const parentIdx = this._getParentIdx(idx);
    const parent = this.values[parentIdx];
    if (parent) {
      if (parent.priority < node.priority) {
        [this.values[parentIdx], this.values[idx]] = [
          this.values[idx],
          this.values[parentIdx],
        ];
        return this._bubbleUp(node, parentIdx);
      }
    }
  }

  _getChildIdx(index, position) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    return position === 'left' ? left : right;
  }

  _getParentIdx(index) {
    if (index === 0) return -1;
    return Math.ceil(index / 2) - 1;
  }
}

class WeightedGraphNode {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(V) {
    if (this.vertexExists(V)) throw new Error('Vertex already exists');
    this.adjacencyList[V] = [];
  }

  vertexExists(V) {
    return this.adjacencyList[V] !== undefined;
  }

  addEdges(V1, V2, weight) {
    if (!this.vertexExists(V1) || !this.vertexExists(V2))
      throw new Error('Both vertices must exist to set an edge');
    this.adjacencyList[V1].push(new WeightedGraphNode(V2, weight));
    this.adjacencyList[V2].push(new WeightedGraphNode(V1, weight));
  }

  getEdges(V) {
    if (!this.vertexExists(V)) throw new Error('Vertex does not exist.');
    return this.adjacencyList[V];
  }

  getNewEdgeList(vToFilter, vToBeFilteredOut) {
    return this.adjacencyList[vToFilter].filter(
      edge => edge.node !== vToBeFilteredOut
    );
  }

  removeEdge(V1, V2) {
    if (!this.vertexExists(V1) || !this.vertexExists(V2))
      throw new Error('Both vertices must exist to remove an edge');
    this.adjacencyList[V1] = this.getNewEdgeList(V1, V2);
    this.adjacencyList[V2] = this.getNewEdgeList(V2, V1);
  }

  removeVertex(V) {
    if (!this.vertexExists(V)) throw new Error('Vertex must exist to delete');
    const edges = this.adjacencyList[V];
    for (const edge of edges) {
      this.adjacencyList[edge.node] = this.getNewEdgeList(edge.node, V);
    }
    delete this.adjacencyList[V];
  }

  get _vertices() {
    return Object.keys(this.adjacencyList);
  }

  shortestPath(V1, V2) {
    const nodes = new PriorityQueueMin();
    const distances = {};
    const previousBest = {};
    const path = [];

    this._vertices.forEach(vertex => {
      if (vertex === V1) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
      }
      previousBest[vertex] = null;
    });

    while (nodes.size !== 0) {
      const current = nodes.dequeue().data;
      if (current === V2) {
        let node = previousBest[current];
        path.push(current);
        while (node !== null) {
          path.push(node);
          node = previousBest[node];
        }
        break;
      } else {
        if (current || distances[current] !== Infinity) {
          for (let neighbor in this.adjacencyList[current]) {
            const nextNode = this.adjacencyList[current][neighbor];
            const possibleNewSmallest = distances[current] + nextNode.weight;
            if (possibleNewSmallest < distances[nextNode.node]) {
              distances[nextNode.node] = possibleNewSmallest;
              previousBest[nextNode.node] = current;
              nodes.enqueue(nextNode.node, possibleNewSmallest);
            }
          }
        }
      }
    }
    return path.reverse();
  }
}

class PriorityQueueMin {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(data, priority) {
    if (this.size === 0) {
      this.queue.push(new HeapNode(data, priority));
      return;
    }
    const newNode = new HeapNode(data, priority);
    this.queue.push(newNode);
    this._bubbleUp(newNode, this.size - 1);
    return this;
  }

  _getParent(idx) {
    return Math.ceil(idx / 2) - 1;
  }

  _bubbleUp(node, idx) {
    const parentIdx = this._getParent(idx);
    const parent = this.queue[parentIdx];
    if (parent) {
      if (node.priority < parent.priority) {
        [this.queue[idx], this.queue[parentIdx]] = [
          this.queue[parentIdx],
          this.queue[idx],
        ];
        return this._bubbleUp(node, parentIdx);
      }
    }
  }

  dequeue() {
    if (this.size === 0) return undefined;
    [this.queue[0], this.queue[this.size - 1]] = [
      this.queue[this.size - 1],
      this.queue[0],
    ];
    const dequeuedItem = this.queue.pop();
    if (this.size > 1) {
      this._bubbleDown(0);
    }
    return dequeuedItem;
  }

  _getChildIdx(idx, childName) {
    const baseIdx = idx * 2;
    const leftIdx = baseIdx + 1;
    const rightIdx = baseIdx + 1;
    return childName === 'left' ? leftIdx : rightIdx;
  }

  _bubbleDown(idx) {
    const node = this.queue[idx];
    const leftChildIdx = this._getChildIdx(idx, 'left');
    const rightChildIdx = this._getChildIdx(idx, 'right');

    const left =
      this.queue[leftChildIdx] !== undefined ? this.queue[leftChildIdx] : null;
    const right =
      this.queue[rightChildIdx] !== undefined
        ? this.queue[rightChildIdx]
        : null;
    const leftVal = left !== null ? left.priority : Infinity;
    const rightVal = right !== null ? right.priority : Infinity;
    let swapIdx;
    if (leftVal < node.priority && rightVal < node.priority)
      swapIdx = leftVal < rightVal ? leftVal : rightVal;

    if (leftVal < node.priority) swapIdx = leftChildIdx;

    if (rightVal < node.priority) swapIdx = rightChildIdx;
    if (swapIdx) {
      [this.queue[idx], this.queue[swapIdx]] = [
        this.queue[swapIdx],
        this.queue[idx],
      ];
      return this._bubbleDown(swapIdx);
    }
  }
}

const printReverseLinkedList = head => {
  if (head === null) return;
  printReverseLinkedList(head.next);
  console.log(head.data);
};
const myList = new LinkedList();
myList.add(10);
myList.add(15);
myList.add(6);

printReverseLinkedList(myList.head);

module.exports = { MaxHeap, WeightedGraph, PriorityQueueMin, findCombinations };
