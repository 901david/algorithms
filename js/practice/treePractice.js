class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new BinaryTreeNode(value);
      return;
    }

    (function findEmptySpot(node) {
      if (node === null) throw new Error('This value already exists in tree');
      if (value < node.val) {
        if (!node.left) {
          node.left = new BinaryTreeNode(value);
          return;
        } else return findEmptySpot(node.left);
      } else {
      }
      if (value > node.val) {
        if (!node.right) {
          node.right = new BinaryTreeNode(value);
          return;
        } else return findEmptySpot(node.right);
      }
    })(this.root);
  }

  find(value) {
    let found = false;
    (function findIn(node) {
      if (node.val === value) {
        found = true;
        return;
      }
      if (node.left && value <= node.left.val) {
        return findIn(node.left);
      }
      if (node.right && value >= node.right.val) {
        return findIn(node.right);
      }
    })(this.root);
    return found;
  }
}

module.exports = { BinarySearchTree };
