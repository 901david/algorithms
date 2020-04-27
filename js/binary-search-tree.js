class BinarySearchTree {
  constructor() {
    this.tree = [];
  }

  insert(val, idx = 0) {
    const start = this.tree[idx];
    const left = this.tree[idx * 2 + 1];
    const right = this.tree[idx * 2 + 2];

    if (start < val && !right) {
      this.tree[idx * 2 + 2] = val;
      return tree;
    }
    if (start > val && !left) {
      this.tree[idx * 2 + 1] = val;
      return tree;
    }
    if (start > val && left) return this.insert(val, left);

    if (start < val && right) return this.insert(val, right);
    if (start > val && left) return this.insert(val, left);
  }

  remove() {}
}

module.exports = { BinarySearchTree };
