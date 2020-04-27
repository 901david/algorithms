const { BinarySearchTree } = require('./treePractice');

describe('Tree Problems', () => {
  describe('Binary Search Tree', () => {
    test('should instantiate a new tree class', () => {
      const myBST = new BinarySearchTree();
      expect(myBST).toBeTruthy();
    });

    test('should correct insert values', () => {
      const myBST = new BinarySearchTree();
      myBST.insert(10);
      myBST.insert(8);
      myBST.insert(12);
      expect(myBST.root.val).toEqual(10);
      expect(myBST.root.left.val).toEqual(8);
      expect(myBST.root.right.val).toEqual(12);
    });

    test('should should correctly find a value', () => {
      const myBST = new BinarySearchTree();
      myBST.insert(10);
      myBST.insert(8);
      myBST.insert(12);
      const found = myBST.find(12);
      console.log(myBST);
      expect(found).toEqual(true);
    });
  });
});
