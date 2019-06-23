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

const inorderTraversal = root => {
  const results = [];
  const stack = [];
  let curr = root;

  while (stack.length > 0 || curr != undefined) {
    if (curr !== undefined) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      results.push(curr.val);
      curr = curr.right;
    }
  }

  return results;
};

const newTree = new Node(1);
newTree.addNode(2);
newTree.addNode(3);
newTree.left.addNode(4);
newTree.left.addNode(5);

console.log(inorderTraversal(newTree));
console.log(newTree);
