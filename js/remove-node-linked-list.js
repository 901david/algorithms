/* Given a node from a Linked List remove the node from the list assuming it is not the tail or the head */

const removeNodeFromList = node => {
  if (node && node.next && node.next.next) {
    node.data = node.next.data;
    node.next = node.next.next;
  }
  return undefined;
};

module.exports = removeNodeFromList;
