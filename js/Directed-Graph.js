const Queue = require("./queue");

class DirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(V) {
    this.adjacencyList.set(V, []);
  }

  addEdges(V1, V2) {
    if (!this.adjacencyList.has(V1) || !this.adjacencyList.has(V2))
      throw new Error("Vertex provided does not exist");
    const currentEdges = this.adjacencyList.get(V1);
    currentEdges.push(V2);
    this.adjacencyList.set(V1, currentEdges);
  }

  vertexExists(V) {
    return this.adjacencyList.has(V);
  }

  getEdges(V) {
    if (this.adjacencyList.has(V)) return this.adjacencyList.get(V);
    else throw new Error("Vertex provided does not exist");
  }

  removeEdge(V1, V2) {
    if (!this.adjacencyList.has(V1) || !this.adjacencyList.has(V2))
      throw new Error("Vertex provided does not exist");
    const newEdges = this.adjacencyList.get(V1).filter(vertex => vertex !== V2);
    this.adjacencyList.set(V1, newEdges);
  }

  removeVertex(V) {
    if (!this.adjacencyList.has(V))
      throw new Error("Vertex provided does not exist");
    this.adjacencyList.forEach((edges, vertex) => {
      const filteredEdges = edges.filter(edge => edge !== V);
      this.adjacencyList.set(vertex, filteredEdges);
    });
    this.adjacencyList.delete(V);
  }

  pathExistsFrom(V1, V2) {
    if (!this.adjacencyList.has(V1) || !this.adjacencyList.has(V2))
      return false;
    const queue = this.adjacencyList.get(V1);
    while (queue.length) {
      const vertex = queue.pop();
      if (vertex === V2) return true;
      queue.unshift(...this.adjacencyList.get(vertex));
    }
    return false;
  }

  pathExistsFromDFS(V1, V2) {
    if (!this.adjacencyList.has(V1) || !this.adjacencyList.has(V2))
      return false;
    const current = this.adjacencyList.get(V1);
    const next = current.pop();
    if (next !== undefined && next === V2) return true;
    if (next === undefined) return false;
    return this.pathExistsFromDFS(next, V2);
  }
}

module.exports = { DirectedGraph };
