const removeNodeFromList = node => {
  if (node && node.next && node.next.next) {
    node.data = node.next.data;
    node.next = node.next.next;
  }
  return undefined;
};

module.exports = removeNodeFromList;
