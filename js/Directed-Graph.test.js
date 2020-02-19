const { DirectedGraph } = require("./Directed-Graph");

describe("DirectedGraph class", () => {
  test("should instantiate class with empty adjacency lists", () => {
    const myDirectedGraph = new DirectedGraph();
    expect(myDirectedGraph.adjacencyList).toBeTruthy();
    expect(myDirectedGraph.adjacencyList).toEqual(new Map());
  });

  describe("AddVerteex meethod", () => {
    test("should add  vertices", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      expect(myDirectedGraph.adjacencyList.get(5)).toBeTruthy();
      expect(myDirectedGraph.adjacencyList.get(6)).toBeTruthy();
      expect(myDirectedGraph.adjacencyList.get(7)).toBeTruthy();
    });
  });

  describe("AddEdges method", () => {
    test("should add edges to both vertices", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(7, 5);
      myDirectedGraph.addEdges(6, 7);
      expect(myDirectedGraph.adjacencyList.get(5)).toEqual([6]);
      expect(myDirectedGraph.adjacencyList.get(6)).toEqual([7]);
      expect(myDirectedGraph.adjacencyList.get(7)).toEqual([5]);
    });

    test("should throw error when a vertice does not exist", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      expect(() => {
        return myDirectedGraph.addEdges(8, 6);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });

  describe("vertexExists method", () => {
    test("should return true when vertex exists", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      expect(myDirectedGraph.vertexExists(5)).toEqual(true);
    });

    test("should return false when vertex does not exist", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      expect(myDirectedGraph.vertexExists(8)).toEqual(false);
    });
  });

  describe("getEdges method", () => {
    test("should return adjacenct list of edges when vertex exists", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(7, 5);
      myDirectedGraph.addEdges(6, 7);
      expect(myDirectedGraph.getEdges(5)).toEqual([6]);
      expect(myDirectedGraph.getEdges(6)).toEqual([7]);
      expect(myDirectedGraph.getEdges(7)).toEqual([5]);
    });

    test("should return undefined when vertex does not exist", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(7, 5);
      myDirectedGraph.addEdges(6, 7);
      expect(() => {
        return myDirectedGraph.getEdges(8);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });

  describe("removeEdge method", () => {
    test("should correctly remove edges", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(7, 5);
      myDirectedGraph.addEdges(6, 7);
      myDirectedGraph.addEdges(6, 5);
      myDirectedGraph.removeEdge(6, 7);
      expect(myDirectedGraph.getEdges(6)).toEqual([5]);
      expect(myDirectedGraph.getEdges(7)).toEqual([5]);
    });

    test("should throw error when a vertice does not exist", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      expect(() => {
        return myDirectedGraph.addEdges(8, 6);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });

  describe("removeVertex method", () => {
    test("should correctly remove edge connections", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(5, 7);
      myDirectedGraph.addEdges(7, 5);
      myDirectedGraph.addEdges(6, 7);
      myDirectedGraph.removeVertex(6);
      expect(myDirectedGraph.getEdges(5)).toEqual([7]);
    });

    test("shouldcorrectly remove vertex", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(5, 7);
      myDirectedGraph.addEdges(7, 5);
      myDirectedGraph.addEdges(6, 7);
      myDirectedGraph.removeVertex(6);
      expect(myDirectedGraph.vertexExists(6)).toEqual(false);
    });

    test("should throw error when a vertice does not exist", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(5, 7);
      myDirectedGraph.addEdges(7, 5);
      myDirectedGraph.addEdges(6, 7);
      expect(() => {
        return myDirectedGraph.removeVertex(9);
      }).toThrow(new Error("Vertex provided does not exist"));
    });
  });

  describe("Does Path Exist BFS", () => {
    test("should return true if the path exists in simple case", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addVertex(8);
      myDirectedGraph.addVertex(9);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(6, 7);
      myDirectedGraph.addEdges(7, 8);
      const pathExists = myDirectedGraph.pathExistsFrom(5, 8);
      expect(pathExists).toEqual(true);
    });

    test("should return false if the path does not exists", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addVertex(8);
      myDirectedGraph.addVertex(9);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(6, 7);
      myDirectedGraph.addEdges(7, 8);
      const pathExists = myDirectedGraph.pathExistsFrom(5, 9);
      expect(pathExists).toEqual(false);
    });

    test("should return true if the path exists in simple case", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex("A");
      myDirectedGraph.addVertex("B");
      myDirectedGraph.addVertex("C");
      myDirectedGraph.addVertex("D");
      myDirectedGraph.addVertex("E");
      myDirectedGraph.addVertex("F");
      myDirectedGraph.addVertex("G");
      myDirectedGraph.addVertex("H");
      myDirectedGraph.addEdges("A", "B");
      myDirectedGraph.addEdges("A", "C");
      myDirectedGraph.addEdges("C", "B");
      myDirectedGraph.addEdges("B", "D");
      myDirectedGraph.addEdges("D", "F");
      myDirectedGraph.addEdges("E", "F");
      myDirectedGraph.addEdges("E", "G");
      myDirectedGraph.addEdges("F", "G");
      myDirectedGraph.addEdges("E", "H");
      const pathExists = myDirectedGraph.pathExistsFrom("A", "G");
      expect(pathExists).toEqual(true);
    });

    test("should return false if the path does not exists", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex("A");
      myDirectedGraph.addVertex("B");
      myDirectedGraph.addVertex("C");
      myDirectedGraph.addVertex("D");
      myDirectedGraph.addVertex("E");
      myDirectedGraph.addVertex("F");
      myDirectedGraph.addVertex("G");
      myDirectedGraph.addVertex("H");
      myDirectedGraph.addEdges("A", "B");
      myDirectedGraph.addEdges("A", "C");
      myDirectedGraph.addEdges("C", "B");
      myDirectedGraph.addEdges("B", "D");
      myDirectedGraph.addEdges("D", "F");
      myDirectedGraph.addEdges("E", "F");
      myDirectedGraph.addEdges("E", "G");
      myDirectedGraph.addEdges("E", "H");
      const pathExists = myDirectedGraph.pathExistsFrom("A", "H");
      expect(pathExists).toEqual(false);
    });
  });

  describe("Does Path Exist DFS", () => {
    test("should return true if the path exists in simple case", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addEdges(5, 6);

      const pathExists = myDirectedGraph.pathExistsFromDFS(5, 6);
      expect(pathExists).toEqual(true);
    });
    test("should return true if the path exists in a  moore advanced case", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addVertex(8);
      myDirectedGraph.addVertex(9);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(6, 7);
      myDirectedGraph.addEdges(7, 8);
      const pathExists = myDirectedGraph.pathExistsFromDFS(5, 8);
      expect(pathExists).toEqual(true);
    });

    test("should return false if the path does not exists", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex(5);
      myDirectedGraph.addVertex(6);
      myDirectedGraph.addVertex(7);
      myDirectedGraph.addVertex(8);
      myDirectedGraph.addVertex(9);
      myDirectedGraph.addEdges(5, 6);
      myDirectedGraph.addEdges(6, 7);
      myDirectedGraph.addEdges(7, 8);
      const pathExists = myDirectedGraph.pathExistsFromDFS(5, 9);
      expect(pathExists).toEqual(false);
    });

    test("should return true if the path exists in simple case", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex("A");
      myDirectedGraph.addVertex("B");
      myDirectedGraph.addVertex("C");
      myDirectedGraph.addVertex("D");
      myDirectedGraph.addVertex("E");
      myDirectedGraph.addVertex("F");
      myDirectedGraph.addVertex("G");
      myDirectedGraph.addVertex("H");
      myDirectedGraph.addEdges("A", "B");
      myDirectedGraph.addEdges("A", "C");
      myDirectedGraph.addEdges("C", "B");
      myDirectedGraph.addEdges("B", "D");
      myDirectedGraph.addEdges("D", "F");
      myDirectedGraph.addEdges("E", "F");
      myDirectedGraph.addEdges("E", "G");
      myDirectedGraph.addEdges("F", "G");
      myDirectedGraph.addEdges("E", "H");
      const pathExists = myDirectedGraph.pathExistsFromDFS("A", "G");
      expect(pathExists).toEqual(true);
    });

    test("should return false if the path does not exists", () => {
      const myDirectedGraph = new DirectedGraph();
      myDirectedGraph.addVertex("A");
      myDirectedGraph.addVertex("B");
      myDirectedGraph.addVertex("C");
      myDirectedGraph.addVertex("D");
      myDirectedGraph.addVertex("E");
      myDirectedGraph.addVertex("F");
      myDirectedGraph.addVertex("G");
      myDirectedGraph.addVertex("H");
      myDirectedGraph.addEdges("A", "B");
      myDirectedGraph.addEdges("A", "C");
      myDirectedGraph.addEdges("C", "B");
      myDirectedGraph.addEdges("B", "D");
      myDirectedGraph.addEdges("D", "F");
      myDirectedGraph.addEdges("E", "F");
      myDirectedGraph.addEdges("E", "G");
      myDirectedGraph.addEdges("E", "H");
      const pathExists = myDirectedGraph.pathExistsFromDFS("A", "H");
      expect(pathExists).toEqual(false);
    });
  });
});
