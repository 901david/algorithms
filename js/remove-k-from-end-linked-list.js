/* Write a function that removes the Kth element from the end of a LinkedLists */

const removeKFromEnd = (LinkedList, fromEnd) => {
  if (LinkedList.size < fromEnd) return LinkedList;
  let count = 0;
  let nodePointer = LinkedList.head;
  let current = LinkedList.head;
  while (current.next) {
    current = current.next;
    if (count !== fromEnd) count++;
    else nodePointer = nodePointer.next;
  }
  nodePointer.next = nodePointer.next.next;
  LinkedList.size--;
  return LinkedList;
};

module.exports = removeKFromEnd;
