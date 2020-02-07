const { WeightedGraph } = require("./Weighted-Graph");

describe("WeightedGraph class", () => {
  test("should instantiate class with empty adjacency lists", () => {
    const myGraph = new WeightedGraph();
    expect(myGraph.adjacencyList).toBeTruthy();
    expect(myGraph.adjacencyList).toEqual({});
  });

  describe("AddVerteex meethod", () => {
    test("should add  vertices", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      expect(myGraph.adjacencyList["5"]).toBeTruthy();
      expect(myGraph.adjacencyList["6"]).toBeTruthy();
      expect(myGraph.adjacencyList["7"]).toBeTruthy();
    });
  });

  describe("AddEdges method", () => {
    test("should add edges to both vertices", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 90);
      myGraph.addEdges(7, 5, 50);
      myGraph.addEdges(6, 7, 30);
      expect(myGraph.adjacencyList["5"]).toEqual([
        { val: 6, weight: 90 },
        { val: 7, weight: 50 }
      ]);
      expect(myGraph.adjacencyList["6"]).toEqual([
        { val: 5, weight: 90 },
        { val: 7, weight: 30 }
      ]);
      expect(myGraph.adjacencyList["7"]).toEqual([
        { val: 5, weight: 50 },
        { val: 6, weight: 30 }
      ]);
    });

    test("should throw error when a vertice does not exist", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      expect(() => {
        return myGraph.addEdges(8, 6);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });

  describe("vertexExists method", () => {
    test("should return true when vertex exists", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      expect(myGraph.vertexExists(5)).toEqual(true);
    });

    test("should return false when vertex does not exist", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      expect(myGraph.vertexExists(8)).toEqual(false);
    });
  });

  describe("getEdges method", () => {
    test("should return adjacenct list of edges when vertex exists", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 90);
      myGraph.addEdges(7, 5, 30);
      myGraph.addEdges(6, 7, 50);
      expect(myGraph.getEdges(5)).toEqual([
        { val: 6, weight: 90 },
        { val: 7, weight: 30 }
      ]);
    });

    test("should return undefined when vertex does not exist", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      expect(() => {
        return myGraph.getEdges(8);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });

  describe("removeEdge method", () => {
    test("should correctly remove edges", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 20);
      myGraph.addEdges(7, 5, 15);
      myGraph.addEdges(6, 7, 34);
      myGraph.removeEdge(6, 7);
      expect(myGraph.getEdges(6)).toEqual([{ val: 5, weight: 20 }]);
      expect(myGraph.getEdges(7)).toEqual([{ val: 5, weight: 15 }]);
    });

    test("should throw error when a vertice does not exist", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      expect(() => {
        return myGraph.addEdges(8, 6);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });

  describe("removeVertex method", () => {
    test("should correctly remove edge connections", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 90);
      myGraph.addEdges(7, 5, 50);
      myGraph.addEdges(6, 7, 30);
      myGraph.removeVertex(6);
      expect(myGraph.getEdges(5)).toEqual([{ val: 7, weight: 50 }]);
      expect(myGraph.getEdges(7)).toEqual([{ val: 5, weight: 50 }]);
    });

    test("shouldcorrectly remove vertex", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      myGraph.removeVertex(6);
      expect(myGraph.vertexExists(6)).toEqual(false);
    });

    test("should throw error when a vertice does not exist", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      expect(() => {
        return myGraph.removeVertex(9);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });
  describe("Dijkstras  Shortest Path", () => {
    test("should return shortest path between two nodes", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex("A");
      myGraph.addVertex("B");
      myGraph.addVertex("C");
      myGraph.addVertex("D");
      myGraph.addVertex("E");
      myGraph.addVertex("F");

      myGraph.addEdges("A", "B", 4);
      myGraph.addEdges("A", "C", 2);
      myGraph.addEdges("B", "E", 3);
      myGraph.addEdges("C", "D", 2);
      myGraph.addEdges("C", "F", 4);
      myGraph.addEdges("D", "E", 3);
      myGraph.addEdges("D", "F", 1);
      myGraph.addEdges("E", "F", 1);
      var shortest = myGraph.findShortestPath("A", "E");
      expect(shortest).toEqual(6);
    });

    test("should work  with different examples", () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex("A");
      myGraph.addVertex("B");
      myGraph.addVertex("C");
      myGraph.addVertex("D");
      myGraph.addVertex("E");
      myGraph.addVertex("F");

      myGraph.addEdges("A", "B", 4);
      myGraph.addEdges("A", "C", 2);
      myGraph.addEdges("B", "E", 3);
      myGraph.addEdges("C", "D", 2);
      myGraph.addEdges("C", "F", 4);
      myGraph.addEdges("D", "E", 3);
      myGraph.addEdges("D", "F", 1);
      myGraph.addEdges("E", "F", 1);
      var shortest = myGraph.findShortestPath("A", "F");
      expect(shortest).toEqual(5);
    });
  });
});
