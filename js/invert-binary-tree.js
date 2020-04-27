const swapNode = node => {
  [node.left, node.right] = [node.right, node.left];
};

const invertBinaryTree = node => {
  if (node) {
    swapNode(node);
    if (node.left) return invertBinaryTree(node.left);
    if (node.right) return invertBinaryTree(node.right);
  }
  return node;
};

module.exports = { invertBinaryTree };
