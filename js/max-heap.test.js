const maxHeap = require("./max-heap");

describe("Max Heap", () => {
  test("should initializ a heap with empty valeus var", () => {
    const heap = new maxHeap();
    expect(heap.values).toEqual([]);
  });
  describe("Insert", () => {
    test("should insert a value when no values exist", () => {
      const heap = new maxHeap();
      heap.insert(1);
      expect(heap.values[heap.values.length - 1]).toEqual(1);
    });
    test("should insert a value correctly when multiple values exist", () => {
      const heap = new maxHeap();
      heap
        .insert(1)
        .insert(6)
        .insert(80)
        .insert(40)
        .insert(50)
        .insert(30)
        .insert(20);
      expect(heap.values[0]).toEqual(80);
    });

    test("should insert a value correctly when multiple values exist", () => {
      const heap = new maxHeap();
      heap
        .insert(1)
        .insert(5)
        .insert(3)
        .insert(10)
        .insert(2);

      expect(heap.values[0]).toEqual(10);
      expect(heap.values[1]).toEqual(5);
      expect(heap.values[2]).toEqual(3);
      expect(heap.values[3]).toEqual(1);
      expect(heap.values[4]).toEqual(2);
    });

    test("should insert a value correctly when multiple values exist", () => {
      const heap = new maxHeap();
      heap
        .insert(41)
        .insert(39)
        .insert(33)
        .insert(18)
        .insert(27)
        .insert(12)
        .insert(55);
      expect(heap.values[0]).toEqual(55);
    });
  });

  describe("EXtract Max", () => {
    test("Should return correct max and maintain tree", () => {
      const heap = new maxHeap();
      heap
        .insert(41)
        .insert(39)
        .insert(33)
        .insert(18)
        .insert(27)
        .insert(12)
        .insert(55);
      const val = heap.extractMax();
      expect(val).toEqual(55);
      expect(heap.values[0]).toEqual(41);
    });
    test("Should return correct max and maintain tree", () => {
      const heap = new maxHeap();
      heap
        .insert(5)
        .insert(2)
        .insert(4)
        .insert(3)
        .insert(45);

      const val = heap.extractMax();
      expect(val).toEqual(45);
      expect(heap.values[0]).toEqual(5);
    });

    test("Should continue to return max", () => {
      const heap = new maxHeap();
      heap
        .insert(5)
        .insert(2)
        .insert(4)
        .insert(3)
        .insert(45);

      let val = heap.extractMax();
      expect(val).toEqual(45);
      val = heap.extractMax();
      expect(val).toEqual(5);
      val = heap.extractMax();
      expect(val).toEqual(4);
      val = heap.extractMax();
      expect(val).toEqual(3);
      val = heap.extractMax();
      expect(val).toEqual(2);
    });
    test("Should return undefined when no values present", () => {
      const heap = new maxHeap();

      let val = heap.extractMax();
      expect(val).toEqual(undefined);
    });

    test("Should return correct values when extracting past what exists", () => {
      const heap = new maxHeap(1);

      let val = heap.extractMax();
      expect(val).toEqual(1);
      val = heap.extractMax();
      expect(val).toEqual(undefined);
      val = heap.extractMax();
      expect(val).toEqual(undefined);
    });
  });
});
