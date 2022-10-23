const {
  MaxHeap,
  WeightedGraph,
  PriorityQueueMin,
  findCombinations,
} = require('./heapPractice');
const makeData = num => ({ data: 'fake', priority: num });
describe('Max Heap', () => {
  test('should initializ a heap with empty valeus var', () => {
    const heap = new MaxHeap();
    expect(heap.values).toEqual([]);
  });
  describe('Insert', () => {
    test('should insert a value when no values exist', () => {
      const heap = new MaxHeap();
      const data = { data: 'Hello WOrld', priority: 1 };
      heap.insert(data);
      expect(heap.values[heap.values.length - 1]).toEqual(data);
    });
    test('should insert a value correctly when multiple values exist', () => {
      const myHeap = new MaxHeap();
      myHeap.insert(makeData(1));
      myHeap.insert(makeData(6));
      myHeap.insert(makeData(80));
      myHeap.insert(makeData(40));
      myHeap.insert(makeData(50));
      myHeap.insert(makeData(30));
      myHeap.insert(makeData(20));
      expect(myHeap.values[0]).toEqual(makeData(80));
    });

    test('should insert a value correctly when multiple values exist', () => {
      const heap = new MaxHeap();
      heap.insert(makeData(1));
      heap.insert(makeData(5));
      heap.insert(makeData(3));
      heap.insert(makeData(10));
      heap.insert(makeData(2));
      expect(heap.values[0]).toEqual(makeData(10));
      expect(heap.values[1]).toEqual(makeData(5));
      expect(heap.values[2]).toEqual(makeData(3));
      expect(heap.values[3]).toEqual(makeData(1));
      expect(heap.values[4]).toEqual(makeData(2));
    });

    test('should insert a value correctly when multiple values exist', () => {
      const heap = new MaxHeap();
      heap.insert(makeData(41));
      heap.insert(makeData(39));
      heap.insert(makeData(33));
      heap.insert(makeData(18));
      heap.insert(makeData(27));
      heap.insert(makeData(12));
      heap.insert(makeData(55));
      expect(heap.values[0]).toEqual(makeData(55));
    });
  });

  describe('EXtract Max', () => {
    test('Should return correct max and maintain tree', () => {
      const heap = new MaxHeap();
      heap.insert(makeData(41));
      heap.insert(makeData(39));
      heap.insert(makeData(33));
      heap.insert(makeData(18));
      heap.insert(makeData(27));
      heap.insert(makeData(12));
      heap.insert(makeData(55));
      const val = heap.extractMax();
      expect(val).toEqual(makeData(55));
      expect(heap.values[0]).toEqual(makeData(41));
    });
    test('Should return correct max and maintain tree', () => {
      const heap = new MaxHeap();
      heap.insert(makeData(5));
      heap.insert(makeData(2));
      heap.insert(makeData(4));
      heap.insert(makeData(3));
      heap.insert(makeData(45));

      const val = heap.extractMax();
      expect(val).toEqual(makeData(45));
      expect(heap.values[0]).toEqual(makeData(5));
    });

    test('Should continue to return max', () => {
      const heap = new MaxHeap();
      heap.insert(makeData(5));
      heap.insert(makeData(2));
      heap.insert(makeData(4));
      heap.insert(makeData(3));
      heap.insert(makeData(45));

      let val = heap.extractMax();
      expect(val).toEqual(makeData(45));
      val = heap.extractMax();
      expect(val).toEqual(makeData(5));
      val = heap.extractMax();
      expect(val).toEqual(makeData(4));
      val = heap.extractMax();
      expect(val).toEqual(makeData(3));
      val = heap.extractMax();
      expect(val).toEqual(makeData(2));
    });
    test('Should return undefined when no values present', () => {
      const heap = new MaxHeap();

      let val = heap.extractMax();
      expect(val).toEqual(undefined);
    });

    test('Should return correct values when extracting past what exists', () => {
      const heap = new MaxHeap();
      heap.insert(makeData(1));

      let val = heap.extractMax();
      expect(val).toEqual(makeData(1));
      val = heap.extractMax();
      expect(val).toEqual(undefined);
      val = heap.extractMax();
      expect(val).toEqual(undefined);
    });
  });
});

describe('WeightedGraph class', () => {
  test('should instantiate class with empty adjacency lists', () => {
    const myGraph = new WeightedGraph();
    expect(myGraph.adjacencyList).toBeTruthy();
    expect(myGraph.adjacencyList).toEqual({});
  });

  describe('AddVerteex meethod', () => {
    test('should add  vertices', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      expect(myGraph.adjacencyList['5']).toBeTruthy();
      expect(myGraph.adjacencyList['6']).toBeTruthy();
      expect(myGraph.adjacencyList['7']).toBeTruthy();
    });
  });

  describe('AddEdges method', () => {
    test('should add edges to both vertices', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 90);
      myGraph.addEdges(7, 5, 50);
      myGraph.addEdges(6, 7, 30);
      expect(myGraph.adjacencyList['5']).toEqual([
        { node: 6, weight: 90 },
        { node: 7, weight: 50 },
      ]);
      expect(myGraph.adjacencyList['6']).toEqual([
        { node: 5, weight: 90 },
        { node: 7, weight: 30 },
      ]);
      expect(myGraph.adjacencyList['7']).toEqual([
        { node: 5, weight: 50 },
        { node: 6, weight: 30 },
      ]);
    });

    test('should throw error when a vertice does not exist', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      expect(() => {
        return myGraph.addEdges(8, 6);
      }).toThrow(new Error('Both vertices must exist to set an edge'));
    });
  });

  describe('vertexExists method', () => {
    test('should return true when vertex exists', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      expect(myGraph.vertexExists(5)).toEqual(true);
    });

    test('should return false when vertex does not exist', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      expect(myGraph.vertexExists(8)).toEqual(false);
    });
  });

  describe('getEdges method', () => {
    test('should return adjacenct list of edges when vertex exists', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 90);
      myGraph.addEdges(7, 5, 30);
      myGraph.addEdges(6, 7, 50);
      expect(myGraph.getEdges(5)).toEqual([
        { node: 6, weight: 90 },
        { node: 7, weight: 30 },
      ]);
    });

    test('should return undefined when vertex does not exist', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      expect(() => {
        return myGraph.getEdges(8);
      }).toThrow(new Error('Vertex does not exist.'));
    });
  });

  describe('removeEdge method', () => {
    test('should correctly remove edges', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 20);
      myGraph.addEdges(7, 5, 15);
      myGraph.addEdges(6, 7, 34);
      myGraph.removeEdge(6, 7);
      expect(myGraph.adjacencyList[6]).toEqual([{ node: 5, weight: 20 }]);
      expect(myGraph.getEdges(7)).toEqual([{ node: 5, weight: 15 }]);
    });

    test('should throw error when a vertice does not exist', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      expect(() => {
        return myGraph.removeEdge(8, 6);
      }).toThrow(new Error('Both vertices must exist to remove an edge'));
    });
  });

  describe('removeVertex method', () => {
    test('should correctly remove edge connections', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6, 90);
      myGraph.addEdges(7, 5, 50);
      myGraph.addEdges(6, 7, 30);
      myGraph.removeVertex(6);
      expect(myGraph.getEdges(5)).toEqual([{ node: 7, weight: 50 }]);
      expect(myGraph.getEdges(7)).toEqual([{ node: 5, weight: 50 }]);
    });

    test('shouldcorrectly remove vertex', () => {
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

    test('should throw error when a vertice does not exist', () => {
      const myGraph = new WeightedGraph();
      myGraph.addVertex(5);
      myGraph.addVertex(6);
      myGraph.addVertex(7);
      myGraph.addEdges(5, 6);
      myGraph.addEdges(7, 5);
      myGraph.addEdges(6, 7);
      expect(() => {
        return myGraph.removeVertex(9);
      }).toThrow(new Error('Vertex must exist to delete'));
    });
  });
});

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
    myGraph.addEdges('D', 'E', 3);
    myGraph.addEdges('D', 'F', 1);
    myGraph.addEdges('E', 'F', 1);
    var shortest = myGraph.shortestPath('A', 'E');
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
    myGraph.addEdges('D', 'E', 3);
    myGraph.addEdges('D', 'F', 1);
    myGraph.addEdges('E', 'F', 1);
    var shortest = myGraph.shortestPath('A', 'F');
    expect(shortest).toEqual(['A', 'C', 'D', 'F']);
  });
});

describe('Priority Queue Min', () => {
  test('should instantiate priority queue with blank array', () => {
    const pq = new PriorityQueueMin();
    expect(pq.size).toEqual(0);
    expect(pq.queue.length).toEqual(0);
  });
  describe('Enqueue', () => {
    test('should correctly enque an element when no elements present', () => {
      const pq = new PriorityQueueMin();
      const { data, priority } = { data: 'Helloo World', priority: 3 };
      pq.enqueue(data, priority);
      expect(pq.size).toEqual(1);
      expect(pq.queue.length).toEqual(1);
      expect(pq.queue[0].data).toEqual('Helloo World');
    });
    test('should correctly enque an element when multiple elements present', () => {
      const pq = new PriorityQueueMin();

      pq.enqueue('Helloo World', 3);
      pq.enqueue('test', 1);
      pq.enqueue('test beginning', 5);
      expect(pq.size).toEqual(3);
      expect(pq.queue.length).toEqual(3);
      expect(pq.queue[0].priority).toEqual(1);
      expect(pq.queue[1].priority).toEqual(3);
      expect(pq.queue[2].priority).toEqual(5);
    });

    test('should correctly enque an element when multiple elements present in a more complicated example', () => {
      const pq = new PriorityQueueMin();

      pq.enqueue('test 3', 3);
      pq.enqueue('test 1', 1);
      pq.enqueue('test 5', 5);
      pq.enqueue('test 2', 2);
      expect(pq.size).toEqual(4);
      expect(pq.queue.length).toEqual(4);
      expect(pq.queue[0].priority).toEqual(1);
      expect(pq.queue[1].priority).toEqual(2);
      expect(pq.queue[2].priority).toEqual(5);
      expect(pq.queue[3].priority).toEqual(3);
    });
  });
  describe('Dequeue', () => {
    test('should correctly dequeue an element when 1 element present', () => {
      const pq = new PriorityQueueMin();
      pq.enqueue('Helloo World', 3);
      expect(pq.size).toEqual(1);
      expect(pq.queue.length).toEqual(1);
      const result = pq.dequeue();
      expect(result.priority).toEqual(3);
      expect(pq.size).toEqual(0);
      expect(pq.queue.length).toEqual(0);
    });
    test('should correctly dequeue an element when multiple elements present and maintain list', () => {
      const pq = new PriorityQueueMin();

      pq.enqueue('Helloo World', 3);
      pq.enqueue('test', 1);
      pq.enqueue('test beginning', 5);
      expect(pq.size).toEqual(3);
      expect(pq.queue.length).toEqual(3);
      const result = pq.dequeue();
      expect(pq.size).toEqual(2);
      expect(pq.queue.length).toEqual(2);
      expect(result.priority).toEqual(1);
      expect(pq.queue[0].priority).toEqual(3);
      const resultTwo = pq.dequeue();
      expect(pq.size).toEqual(1);
      expect(pq.queue.length).toEqual(1);
      expect(resultTwo.priority).toEqual(3);
      expect(pq.queue[0].priority).toEqual(5);
    });

    test('should correctly dequeue an element when called repeatedly with no items in queue', () => {
      const pq = new PriorityQueueMin();
      pq.enqueue('Helloo World', 3);
      expect(pq.size).toEqual(1);
      expect(pq.queue.length).toEqual(1);
      const result = pq.dequeue();
      expect(pq.size).toEqual(0);
      expect(pq.queue.length).toEqual(0);
      expect(result.priority).toEqual(3);
      expect(pq.queue[0]).toEqual(undefined);
      const resultTwo = pq.dequeue();
      expect(pq.size).toEqual(0);
      expect(pq.queue.length).toEqual(0);
      expect(resultTwo).toEqual(undefined);
      expect(pq.queue[0]).toEqual(undefined);
    });

    test('should correctly dequeue when threee elements', () => {
      const pq = new PriorityQueueMin();

      pq.enqueue('test 3', 3);
      pq.enqueue('test 2', 2);
      pq.enqueue('test 1', 1);
      expect(pq.size).toEqual(3);
      expect(pq.queue[0].priority).toEqual(1);
      expect(pq.queue[1].priority).toEqual(3);
      expect(pq.queue[2].priority).toEqual(2);

      let result = pq.dequeue();
      expect(pq.size).toEqual(2);
      expect(result.priority).toEqual(1);
      expect(pq.queue[0].priority).toEqual(2);
      result = pq.dequeue();
      expect(pq.size).toEqual(1);
      expect(result.priority).toEqual(2);
      expect(pq.queue[0].priority).toEqual(3);
      result = pq.dequeue();
      expect(pq.size).toEqual(0);
      expect(result.priority).toEqual(3);
      expect(pq.queue[0]).toEqual(undefined);
      result = pq.dequeue();
      expect(pq.size).toEqual(0);
      expect(result).toEqual(undefined);
      expect(pq.queue[0]).toEqual(undefined);
    });

    test('should correctly enque an element when multiple elements present in a more complicated example', () => {
      const pq = new PriorityQueueMin();

      pq.enqueue('test 3', 3);
      pq.enqueue('test 1', 1);
      pq.enqueue('test 5', 5);
      pq.enqueue('test 7', 7);
      pq.enqueue('test 2', 2);
      expect(pq.size).toEqual(5);
      expect(pq.queue[0].priority).toEqual(1);
      expect(pq.queue[1].priority).toEqual(2);
      expect(pq.queue[2].priority).toEqual(5);
      expect(pq.queue[3].priority).toEqual(7);
      expect(pq.queue[4].priority).toEqual(3);

      let result = pq.dequeue();
      expect(pq.size).toEqual(4);
      expect(result.priority).toEqual(1);
      expect(pq.queue[0].priority).toEqual(2);
      expect(pq.queue[1].priority).toEqual(3);
      expect(pq.queue[2].priority).toEqual(5);
      expect(pq.queue[3].priority).toEqual(7);

      result = pq.dequeue();
      expect(pq.size).toEqual(3);
      expect(result.priority).toEqual(2);
      expect(pq.queue[0].priority).toEqual(3);
      expect(pq.queue[1].priority).toEqual(7);
      expect(pq.queue[2].priority).toEqual(5);

      result = pq.dequeue();
      expect(pq.size).toEqual(2);
      expect(result.priority).toEqual(3);
      expect(pq.queue[0].priority).toEqual(5);
      expect(pq.queue[1].priority).toEqual(7);

      result = pq.dequeue();
      expect(pq.size).toEqual(1);
      expect(result.priority).toEqual(5);
      expect(pq.queue[0].priority).toEqual(7);

      result = pq.dequeue();
      expect(pq.size).toEqual(0);
      expect(result.priority).toEqual(7);
      expect(pq.queue[0]).toEqual(undefined);

      result = pq.dequeue();
      expect(pq.size).toEqual(0);
      expect(result).toEqual(undefined);
      expect(pq.queue[0]).toEqual(undefined);
    });
  });
});

describe('DP practice', () => {
  test('should return  coorect answer', () => {
    const answers = findCombinations([1, 2, 3]);
    console.log('answers', answers);
    const results = [[], [1], [2], [3], [1, 2], [2, 3], [1, 2, 3]];

    expect(answers).toEquual(results);
  });
});
