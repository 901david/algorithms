const Stack = require("./Stack");
const Queue = require("./Queue");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(V) {
    this.adjacencyList[V] = [];
  }

  addEdges(V1, V2) {
    if (!this.vertexExists(V1) || !this.vertexExists(V2))
      throw new Error("Vertex provided does not exist");
    this.adjacencyList[V1].push(V2);
    this.adjacencyList[V2].push(V1);
  }

  vertexExists(vertex) {
    return this.adjacencyList[vertex] !== undefined;
  }

  getEdges(vertex) {
    if (!this.vertexExists(vertex))
      throw new Error("Vertex provided does not exist");
    return this.adjacencyList[vertex];
  }

  getNewEdgeList(vToFilter, vToBeFilteredOut) {
    return this.adjacencyList[vToFilter].filter(
      edge => edge !== vToBeFilteredOut
    );
  }

  removeEdge(V1, V2) {
    this.adjacencyList[V1] = this.getNewEdgeList(V1, V2);
    this.adjacencyList[V2] = this.getNewEdgeList(V2, V1);
  }

  removeVertex(V1) {
    if (!this.vertexExists(V1))
      throw new Error("Vertex provided does not exist");
    delete this.adjacencyList[V1];
    Object.keys(this.adjacencyList).forEach(V2 => {
      this.adjacencyList[V2] = this.getNewEdgeList(V2, V1);
    });
  }

  DFSTraversalRecursive(start) {
    const results = new Set();
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      results.add(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!results.has(neighbor)) return dfs(neighbor);
      });
    }.call(this, start));

    return Array.from(results);
  }

  DFSTraversalIterative(start) {
    const stack = new Stack();
    const seen = new Set();
    const results = [];

    stack.push(start);

    while (stack.size !== 0) {
      const vertex = stack.pop();
      if (!seen.has(vertex)) {
        seen.add(vertex);
        results.push(vertex);
        for (let edge of this.adjacencyList[vertex]) {
          stack.push(edge);
        }
      }
    }

    return results;
  }

  BFS(start) {
    const queue = new Queue();
    const seen = new Set();
    const results = [];
    queue.enqueue(start);

    while (queue.size !== 0) {
      const vertex = queue.dequeue();
      if (!seen.has(vertex)) {
        seen.add(vertex);
        results.push(vertex);
        this.adjacencyList[vertex].forEach(neighbor => {
          queue.enqueue(neighbor);
        });
      }
    }

    return results;
  }
}

module.exports = Graph;
