class Node {
  constructor(val, left = undefined, right = undefined) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  addNode(val) {
    if (!this.left) {
      this.left = new Node(val);
    } else {
      this.right = new Node(val);
    }
  }
}
const preOrderBinaryTreeTraversal = rootNode => {
  const nodes = [rootNode];
  const values = [];

  while (nodes.length !== 0) {
    const node = nodes.pop();
    if (node) {
      values.push(node.val);
      nodes.push(node.right);
      nodes.push(node.left);
    }
  }

  return values;
};

const newTree = new Node(1);
newTree.addNode(2);
newTree.addNode(3);
newTree.left.addNode(4);
newTree.left.addNode(5);

console.log(preOrderBinaryTreeTraversal(newTree));
