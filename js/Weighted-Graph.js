const Graph = require("./Graph");
const { PriorityQueueMin } = require("./priority-queue");

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

  buildInitialShortestPathState(start) {
    const distances = new Map();
    const nodes = new PriorityQueueMin();
    const previous = new Map();

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances.set(vertex, 0);
        nodes.enqueue({ data: vertex, priority: 0 });
      } else {
        distances.set(vertex, Infinity);
        nodes.enqueue({ data: vertex, priority: Infinity });
      }
      previous.set(vertex, null);
    }
    return { distances, nodes, previous };
  }

  findShortestPath(start, end) {
    const { nodes, distances, previous } = this.buildInitialShortestPathState(
      start
    );

    while (nodes.size !== 0) {
      const node = nodes.dequeue();
      const { data: smallest } = node;
      if (smallest === end) {
        return distances.get(end);
      }
      if (smallest || distances.get(smallest) !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const possible = distances.get(smallest) + nextNode.weight;
          if (possible < distances.get(nextNode.val)) {
            distances.set(nextNode.val, possible);
            previous.set(nextNode.val, smallest);
            nodes.enqueue({ data: nextNode.val, priority: possible });
          }
        }
      }
    }
  }
}

module.exports = { WeightedGraph };
