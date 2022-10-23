const { PriorityQueueMin } = require('./priority-queue');

const shortestPathInWeightedGraph = (Graph, V1, V2) => {
  const distances = new Map();
  const previous = new Map();
  const nodes = new PriorityQueueMin();
  const path = [];

  Graph.getVerticesAsArray().forEach(vertex => {
    if (vertex === V1) {
      distances.set(vertex, 0);
      nodes.enqueue({ data: vertex, priority: 0 });
    } else {
      distances.set(vertex, Infinity);
    }
    previous.set(vertex, null);
  });

  while (nodes.size !== 0) {
    const node = nodes.dequeue();
    let smallestVertex = node.data;
    if (smallestVertex === V2) {
      while (previous.get(smallestVertex) !== null) {
        path.push(smallestVertex);
        smallestVertex = previous.get(smallestVertex);
      }
      break;
    } else {
      if (smallestVertex) {
        for (let neighbor in Graph.adjacencyList[smallestVertex]) {
          const nextNode = Graph.adjacencyList[smallestVertex][neighbor];
          const possible = distances.get(smallestVertex) + nextNode.weight;
          if (possible < distances.get(nextNode.val)) {
            distances.set(nextNode.val, possible);
            previous.set(nextNode.val, smallestVertex);
            nodes.enqueue({ data: nextNode.val, priority: possible });
          }
        }
      }
    }
  }
  return path.concat(V1).reverse();
};

module.exports = { shortestPathInWeightedGraph };
