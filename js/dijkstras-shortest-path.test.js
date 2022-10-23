const { WeightedGraph } = require('./Weighted-Graph');
const { shortestPathInWeightedGraph } = require('./dijkstras-shortest-path');

describe('Dijkstras  Shortest Path', () => {
  test('should return shortest path between two nodes', () => {
    const myGraph = new WeightedGraph();
    myGraph.addVertex('A');
    myGraph.addVertex('B');
    myGraph.addVertex('C');
    myGraph.addVertex('D');
    myGraph.addVertex('E');
    myGraph.addVertex('F');

    myGraph.addEdges('A', 'B', 4);
    myGraph.addEdges('A', 'C', 2);
    myGraph.addEdges('B', 'E', 3);
    myGraph.addEdges('C', 'D', 2);
    myGraph.addEdges('C', 'F', 4);
    myGraph.addEdges('D', 'E', 3);
    myGraph.addEdges('D', 'F', 1);
    myGraph.addEdges('E', 'F', 1);
    var shortest = shortestPathInWeightedGraph(myGraph, 'A', 'E');
    expect(shortest).toEqual(['A', 'C', 'D', 'F', 'E']);
  });

  test('should work  with different examples', () => {
    const myGraph = new WeightedGraph();
    myGraph.addVertex('A');
    myGraph.addVertex('B');
    myGraph.addVertex('C');
    myGraph.addVertex('D');
    myGraph.addVertex('E');
    myGraph.addVertex('F');

    myGraph.addEdges('A', 'B', 4);
    myGraph.addEdges('A', 'C', 2);
    myGraph.addEdges('B', 'E', 3);
    myGraph.addEdges('C', 'D', 2);
    myGraph.addEdges('C', 'F', 4);
    myGraph.addEdges('D', 'E', 3);
    myGraph.addEdges('D', 'F', 1);
    myGraph.addEdges('E', 'F', 1);
    var shortest = shortestPathInWeightedGraph(myGraph, 'A', 'F');
    expect(shortest).toEqual(['A', 'C', 'D', 'F']);
  });
});
