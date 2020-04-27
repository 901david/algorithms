const { listOfDepths } = require('./list-of-depths');
const { BinarySearchTree } = require('./practice/treePractice');
const LinkedList = require('./linked-list');

describe('List of depths', () => {
  test('should list depths with basic example', () => {
    const myTree = new BinarySearchTree();
    myTree.insert(50);
    myTree.insert(40);
    myTree.insert(60);
    const solution = [];
    const one = new LinkedList();
    one.add(50);
    solution.push(one);
    const two = new LinkedList();
    two.add(40);
    two.add(60);
    solution.push(two);
    const depths = listOfDepths(myTree.root);
    expect(solution.length).toEqual(depths.length);
    expect(depths[0].equals(solution[0])).toEqual(true);
    expect(depths[1].equals(solution[1])).toEqual(true);
  });
  test('should return an array of linked lists which are teh depths of the binary search tree', () => {
    const myTree = new BinarySearchTree();
    myTree.insert(50);
    myTree.insert(40);
    myTree.insert(60);
    myTree.insert(55);
    myTree.insert(30);
    myTree.insert(45);
    myTree.insert(70);
    myTree.insert(20);
    myTree.insert(35);
    myTree.insert(80);
    const solution = [];
    const one = new LinkedList();
    one.add(50);
    solution.push(one);
    const two = new LinkedList();
    two.add(40);
    two.add(60);
    solution.push(two);
    const three = new LinkedList();
    three.add(30);
    three.add(45);
    three.add(55);
    three.add(70);
    solution.push(three);
    const four = new LinkedList();
    four.add(20);
    four.add(35);
    four.add(80);
    solution.push(four);

    const depths = listOfDepths(myTree.root);
    console.log(depths);
    expect(depths.length).toEqual(solution.length);
    depths.forEach((depth, i) =>
      expect(depth.getAsArray()).toEqual(solution[i].getAsArray())
    );
  });
});
