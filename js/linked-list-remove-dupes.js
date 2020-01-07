/* Write a function that takes in a Linked List and removes duplicate values in place */

const removeLinkedListDupes = LinkedList => {
  if (LinkedList.size === 0) {
    return [];
  }
  if (LinkedList.size === 1) {
    return LinkedList;
  }
  const temp = new Set();
  let current = LinkedList.head;
  while (current.next) {
    if (temp.has(current.data)) {
      current.data = current.next.data;
      current.next = current.next.next;
    } else {
      temp.add(current.data);
      current = current.next;
    }
  }
  LinkedList.size = LinkedList.getAsArray().length;
  return LinkedList;
};

module.exports = removeLinkedListDupes;
