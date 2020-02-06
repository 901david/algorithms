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
}

module.exports = Graph;
