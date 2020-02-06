const Graph = require("./Graph");

describe("Graph class", () => {
  test("should instantiate class with empty adjacency lists", () => {
    const myGraph = new Graph();
    expect(myGraph.adjacencyList).toBeTruthy();
    expect(myGraph.adjacencyList).toEqual({});
  });

  describe("AddVerteex meethod", () => {
    test("should add  vertices", () => {
      const myGraph = new Graph();
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
      const myGraph = new Graph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      expect(myGraph.adjacencyList["5"]).toEqual([6, 7]);
      expect(myGraph.adjacencyList["6"]).toEqual([5, 7]);
      expect(myGraph.adjacencyList["7"]).toEqual([5, 6]);
    });

    test("should throw error when a vertice does not exist", () => {
      const myGraph = new Graph();
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
      const myGraph = new Graph();
      myGraph.addVertex(5);
      expect(myGraph.vertexExists(5)).toEqual(true);
    });

    test("should return false when vertex does not exist", () => {
      const myGraph = new Graph();
      myGraph.addVertex(5);
      expect(myGraph.vertexExists(8)).toEqual(false);
    });
  });

  describe("getEdges method", () => {
    test("should return adjacenct list of edges when vertex exists", () => {
      const myGraph = new Graph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      expect(myGraph.getEdges(5)).toEqual([6, 7]);
    });

    test("should return undefined when vertex does not exist", () => {
      const myGraph = new Graph();
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
      const myGraph = new Graph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      myGraph.removeEdge(6, 7);
      expect(myGraph.getEdges(6)).toEqual([5]);
      expect(myGraph.getEdges(7)).toEqual([5]);
    });

    test("should throw error when a vertice does not exist", () => {
      const myGraph = new Graph();
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
      const myGraph = new Graph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      myGraph.removeVertex(6);
      expect(myGraph.getEdges(5)).toEqual([7]);
      expect(myGraph.getEdges(7)).toEqual([5]);
    });

    test("shouldcorrectly remove vertex", () => {
      const myGraph = new Graph();
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
      const myGraph = new Graph();
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
});
