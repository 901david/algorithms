/* Write an algorithm that partitions around a value X such that all nodes that are less than X come before all nodes that are greater than or equal to X. Partition element can appear on either side
ie 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 partition = 5
3 -> 1 -> 2   ->  10 -> 5 -> 5 -> 8
*/
const LinkedList = require("./linked-list");

const partitionLinkedList = (LL, partition) => {
  let current = LL.head;
  let less = new LinkedList();
  let more = new LinkedList();

  const testData = data => {
    if (data < partition) less.add(data);
    else more.add(data);
  };

  while (current.next) {
    testData(current.data);
    current = current.next;
  }
  //Handle final node's data value
  testData(current.data);
  return less.add(more);
};

module.exports = partitionLinkedList;
