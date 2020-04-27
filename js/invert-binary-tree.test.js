const { invertBinaryTree } = require('./invert-binary-tree');
const { BinarySearchTree } = require('./practice/treePractice');

describe('INvert binary tree', () => {
  test('should work with basic example', () => {
    const myTree = new BinarySearchTree();
    myTree.insert(50);
    myTree.insert(40);
    myTree.insert(60);
    invertBinaryTree(myTree);
    expect(myTree.root.val).toEqual(50);
    expect(myTree.root.left.val).toEqual(40);
    expect(myTree.root.right.val).toEqual(60);
  });

  test('should work with complex example', () => {
    const myTree = new BinarySearchTree();
    myTree.insert(50);

    myTree.insert(40);
    myTree.insert(60);

    myTree.insert(30);
    myTree.insert(45);
    myTree.insert(55);
    myTree.insert(70);

    invertBinaryTree(myTree);
    expect(myTree.root.val).toEqual(50);
    expect(myTree.root.left.val).toEqual(40);
    expect(myTree.root.right.val).toEqual(60);

    expect(myTree.root.left.left.val).toEqual(30);
    expect(myTree.root.left.right.val).toEqual(45);
    expect(myTree.root.right.left.val).toEqual(55);
    expect(myTree.root.right.right.val).toEqual(70);
  });
});
