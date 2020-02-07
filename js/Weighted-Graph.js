const Graph = require("./Graph");

class WeightedGraphNode {
  constructor(val, weight) {
    this.val = val;
    this.weight = weight;
  }
}

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  getNewEdgeList(vToFilter, vToBeFilteredOut) {
    return this.adjacencyList[vToFilter].filter(
      edge => edge.val !== vToBeFilteredOut
    );
  }

  removeEdge(V1, V2) {
    this.adjacencyList[V1] = this.getNewEdgeList(V1, V2);
    this.adjacencyList[V2] = this.getNewEdgeList(V2, V1);
  }

  addEdges(V1, V2, weight) {
    if (!this.vertexExists(V1) || !this.vertexExists(V2))
      throw new Error("Vertex provided does not exist");
    this.adjacencyList[V1].push(new WeightedGraphNode(V2, weight));
    this.adjacencyList[V2].push(new WeightedGraphNode(V1, weight));
  }
}

module.exports = { WeightedGraph };
