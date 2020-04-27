/* Write a function that returns an array of Linked Lists for each level */

const LinkedList = require('./linked-list');

const listOfDepths = node => {
  let queue = [node];
  let nextQueue = [];
  let list = new LinkedList();
  const results = [];

  while (queue.length) {
    const current = queue.pop();
    list.add(current.val);

    if (current.left) nextQueue.unshift(current.left);
    if (current.right) nextQueue.unshift(current.right);

    if (queue.length === 0) {
      results.push(list);
      list = new LinkedList();
      queue = [...nextQueue];
      nextQueue = [];
    }
  }

  return results;
};

module.exports = { listOfDepths };
